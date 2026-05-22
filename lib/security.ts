/* Client-side security heuristics: password strength + URL risk analysis. */

const COMMON_PASSWORDS = new Set([
  "123456", "password", "123456789", "12345678", "12345", "qwerty",
  "111111", "1234567", "123123", "abc123", "000000", "iloveyou",
  "1234567890", "1q2w3e4r", "qwertyuiop", "admin", "letmein", "welcome",
  "monkey", "dragon", "password1", "password123", "qwerty123", "1234",
  "sunshine", "princess", "football", "charlie", "aa123456", "donald",
  "passw0rd", "654321", "superman", "asdfghjkl", "trustno1", "hello",
  "freedom", "whatever", "ninja", "azerty", "starwars", "login",
]);

const SEQUENCES = "abcdefghijklmnopqrstuvwxyz0123456789";

export type StrengthResult = {
  score: 0 | 1 | 2 | 3 | 4;
  label: string;
  entropyBits: number;
  crackTime: string;
  feedback: string[];
};

function humanTime(seconds: number): string {
  if (seconds < 1) return "instantly";
  const units: [string, number][] = [
    ["years", 31557600],
    ["days", 86400],
    ["hours", 3600],
    ["minutes", 60],
    ["seconds", 1],
  ];
  if (seconds > 31557600 * 1000) {
    const millennia = seconds / (31557600 * 1000);
    if (millennia > 1e9) return "effectively forever";
    return `${Math.round(millennia).toLocaleString()} millennia`;
  }
  for (const [name, size] of units) {
    if (seconds >= size) {
      const v = Math.round(seconds / size);
      return `${v.toLocaleString()} ${v === 1 ? name.slice(0, -1) : name}`;
    }
  }
  return "instantly";
}

export function analyzePassword(pw: string): StrengthResult {
  const feedback: string[] = [];

  if (!pw) {
    return {
      score: 0,
      label: "Empty",
      entropyBits: 0,
      crackTime: "instantly",
      feedback: ["Enter a password to analyze it."],
    };
  }

  let pool = 0;
  if (/[a-z]/.test(pw)) pool += 26;
  if (/[A-Z]/.test(pw)) pool += 26;
  if (/[0-9]/.test(pw)) pool += 10;
  if (/[^A-Za-z0-9]/.test(pw)) pool += 33;

  let entropy = pw.length * Math.log2(pool || 1);

  const lower = pw.toLowerCase();

  if (COMMON_PASSWORDS.has(lower)) {
    entropy = Math.min(entropy, 8);
    feedback.push("This is one of the most common passwords in the world — it is cracked instantly.");
  }

  if (/^(.)\1+$/.test(pw)) {
    entropy = Math.min(entropy, 10);
    feedback.push("It is a single repeated character.");
  }

  if (/(.)\1\1/.test(pw)) {
    entropy -= 8;
    feedback.push("Avoid repeating the same character three or more times.");
  }

  for (let i = 0; i + 4 <= lower.length; i++) {
    const chunk = lower.slice(i, i + 4);
    if (SEQUENCES.includes(chunk) || SEQUENCES.includes([...chunk].reverse().join(""))) {
      entropy -= 10;
      feedback.push("Contains a predictable sequence (like 'abcd' or '1234').");
      break;
    }
  }

  if (/^\d+$/.test(pw)) {
    entropy -= 6;
    feedback.push("Digits only — add letters and symbols.");
  }

  if (/(19|20)\d\d/.test(pw)) {
    feedback.push("Looks like it contains a year — attackers try those first.");
  }

  entropy = Math.max(0, entropy);

  // Offline fast-hash attack assumption: 1e11 guesses/sec, average = half.
  const seconds = Math.pow(2, entropy) / 1e11 / 2;
  const crackTime = humanTime(seconds);

  let score: StrengthResult["score"];
  let label: string;
  if (entropy < 28) {
    score = 0;
    label = "Very weak";
  } else if (entropy < 40) {
    score = 1;
    label = "Weak";
  } else if (entropy < 60) {
    score = 2;
    label = "Fair";
  } else if (entropy < 80) {
    score = 3;
    label = "Strong";
  } else {
    score = 4;
    label = "Excellent";
  }

  if (pw.length < 12 && score > 1) {
    feedback.push("Length matters most — aim for at least 14–16 characters.");
  }
  if (pool < 62 && score < 4) {
    feedback.push("Mix uppercase, lowercase, numbers and symbols to widen the search space.");
  }
  if (feedback.length === 0) {
    feedback.push("No obvious weaknesses found. Make sure it is also unique to this account.");
  }

  return { score, label, entropyBits: Math.round(entropy), crackTime, feedback };
}

/* ───────────────────────────── URL analysis ──────────────────────────── */

const RISKY_TLDS = new Set([
  "zip", "mov", "xyz", "top", "click", "link", "gq", "cf", "tk", "ml",
  "ga", "work", "country", "kim", "loan", "men", "rest", "fit", "review",
]);

const SHORTENERS = new Set([
  "bit.ly", "tinyurl.com", "t.co", "goo.gl", "ow.ly", "is.gd", "buff.ly",
  "rebrand.ly", "cutt.ly", "shorturl.at", "rb.gy", "tiny.cc",
]);

const BRAND_WORDS = [
  "paypal", "apple", "microsoft", "amazon", "google", "facebook", "netflix",
  "instagram", "bank", "wallet", "coinbase", "binance", "dhl", "fedex",
  "usps", "irs", "outlook", "office365", "icloud", "secure", "verify",
  "login", "signin", "account", "update", "support",
];

export type UrlCheck = {
  label: string;
  status: "ok" | "warn" | "bad";
  detail: string;
};

export type UrlReport = {
  ok: boolean;
  url: string;
  host: string;
  riskScore: number;
  verdict: "Looks safe" | "Be cautious" | "High risk";
  checks: UrlCheck[];
};

export function analyzeUrl(raw: string): UrlReport | { error: string } {
  let input = raw.trim();
  if (!input) return { error: "Enter a link to scan." };
  if (!/^https?:\/\//i.test(input)) input = "http://" + input;

  let parsed: URL;
  try {
    parsed = new URL(input);
  } catch {
    return { error: "That does not look like a valid web address." };
  }

  const host = parsed.hostname.toLowerCase();
  const checks: UrlCheck[] = [];
  let risk = 0;

  // HTTPS
  if (parsed.protocol === "https:") {
    checks.push({
      label: "Encrypted connection (HTTPS)",
      status: "ok",
      detail: "The link uses HTTPS. Note: HTTPS proves encryption, not honesty — scam sites use it too.",
    });
  } else {
    risk += 20;
    checks.push({
      label: "No HTTPS encryption",
      status: "bad",
      detail: "This link uses plain HTTP. Never enter passwords or payment details on an HTTP page.",
    });
  }

  // IP-address host
  if (/^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    risk += 35;
    checks.push({
      label: "Hosted on a raw IP address",
      status: "bad",
      detail: "Legitimate organisations use named domains, not bare IP addresses. This is a strong phishing signal.",
    });
  } else {
    checks.push({
      label: "Uses a named domain",
      status: "ok",
      detail: `The link points to the domain "${host}".`,
    });
  }

  // Punycode / homograph
  if (host.includes("xn--")) {
    risk += 30;
    checks.push({
      label: "Punycode characters detected",
      status: "bad",
      detail: "The domain uses encoded non-Latin characters that can imitate a real brand. Treat with strong suspicion.",
    });
  }

  // "@" trick
  if (raw.includes("@")) {
    risk += 30;
    checks.push({
      label: "Contains an '@' symbol",
      status: "bad",
      detail: "Anything before an '@' in a URL is ignored by the browser. Attackers use it to hide the real destination.",
    });
  }

  // Shortener
  if (SHORTENERS.has(host)) {
    risk += 18;
    checks.push({
      label: "Link shortener",
      status: "warn",
      detail: "Shortened links hide their true destination. Expand it before trusting it, especially in unexpected messages.",
    });
  }

  // Risky TLD
  const tld = host.split(".").pop() || "";
  if (RISKY_TLDS.has(tld)) {
    risk += 18;
    checks.push({
      label: `Higher-risk domain ending (.${tld})`,
      status: "warn",
      detail: `The ".${tld}" extension is disproportionately used for spam and phishing campaigns.`,
    });
  }

  // Subdomain depth
  const labels = host.split(".");
  if (labels.length >= 5) {
    risk += 15;
    checks.push({
      label: "Unusually deep subdomain",
      status: "warn",
      detail: "Many sub-levels are often used to bury a malicious domain behind trusted-looking words.",
    });
  }

  // Brand keyword in subdomain/path but not the registered domain
  const registered = labels.slice(-2).join(".");
  const subAndPath = (host + parsed.pathname).toLowerCase();
  const brandHit = BRAND_WORDS.find(
    (b) => subAndPath.includes(b) && !registered.includes(b),
  );
  if (brandHit) {
    risk += 25;
    checks.push({
      label: `Trusted word "${brandHit}" used outside the real domain`,
      status: "bad",
      detail: `The word "${brandHit}" appears in the address but not in the registered domain "${registered}". This is a classic lookalike trick.`,
    });
  }

  // Hyphens / length
  if ((host.match(/-/g) || []).length >= 3) {
    risk += 10;
    checks.push({
      label: "Many hyphens in the domain",
      status: "warn",
      detail: "Heavily hyphenated domains are common in throwaway phishing sites.",
    });
  }
  if (input.length > 100) {
    risk += 8;
    checks.push({
      label: "Very long URL",
      status: "warn",
      detail: "Excessively long links are often used to obscure where they really lead.",
    });
  }

  if (!checks.some((c) => c.status !== "ok")) {
    checks.push({
      label: "No common phishing red flags",
      status: "ok",
      detail: "The structure of this link looks ordinary. Still confirm you trust the sender and expected this message.",
    });
  }

  const riskScore = Math.min(100, risk);
  let verdict: UrlReport["verdict"];
  if (riskScore >= 50) verdict = "High risk";
  else if (riskScore >= 20) verdict = "Be cautious";
  else verdict = "Looks safe";

  return {
    ok: true,
    url: input,
    host,
    riskScore,
    verdict,
    checks,
  };
}
