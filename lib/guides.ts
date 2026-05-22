import type { AffiliateKey } from "@/site.config";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "callout"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "affiliate"; key: AffiliateKey }
  | { type: "tool"; slug: string };

export type Guide = {
  slug: string;
  title: string;
  /** Meta description + card summary. */
  description: string;
  /** ISO date. */
  date: string;
  readingMinutes: number;
  keywords: string[];
  body: Block[];
};

export const guides: Guide[] = [
  {
    slug: "how-to-tell-if-a-link-is-safe",
    title: "How to Tell If a Link Is Safe Before You Click",
    description:
      "A practical, no-jargon checklist for spotting phishing and scam links — what to look for in a URL before you ever click it.",
    date: "2026-01-12",
    readingMinutes: 6,
    keywords: [
      "how to tell if a link is safe",
      "is this link safe",
      "phishing link signs",
      "check a link before clicking",
    ],
    body: [
      {
        type: "p",
        text: "Most successful cyberattacks on ordinary people start with a single click. Not a sophisticated hack — just a convincing link in an email, text message or DM. The good news: phishing links almost always leave fingerprints. Once you know what to look for, you can spot the majority of them in about ten seconds.",
      },
      { type: "h2", text: "1. Read the domain right-to-left" },
      {
        type: "p",
        text: "The real destination of a link is the part immediately before the first single slash — and you read it from right to left. In paypal.com.secure-login.ru, the actual domain is secure-login.ru, not PayPal. Scammers stuff trusted brand names into the subdomain or path because they know your eyes scan left-to-right and stop at the first familiar word.",
      },
      {
        type: "callout",
        text: "Quick rule: find the last word before the first '/', then look at the word just before its final dot. That is who really owns the link.",
      },
      { type: "h2", text: "2. Watch for lookalike characters" },
      {
        type: "p",
        text: "Attackers register domains that are one keystroke away from the real thing: rn instead of m, a zero instead of an O, or non-Latin characters that render identically to English letters (a trick called a homograph or punycode attack). If a domain looks right but the link still feels off, copy it into a scanner rather than trusting your eyes.",
      },
      { type: "tool", slug: "url-scanner" },
      { type: "h2", text: "3. Be suspicious of these specific red flags" },
      {
        type: "ul",
        items: [
          "The link uses a raw IP address (e.g. http://192.0.2.10/login) — legitimate companies use named domains.",
          "It is a shortened link (bit.ly, tinyurl, t.co) in a message about money, accounts or urgent action. Shorteners hide the destination.",
          "There is an @ symbol in the middle of the URL — everything before the @ is ignored by your browser, so the real site is what comes after it.",
          "The page is plain http:// (no padlock) but asks for a password or payment.",
          "The domain was clearly registered to look urgent: 'account-verify-now', 'secure-update', random hyphenated phrases.",
        ],
      },
      { type: "h2", text: "4. Judge the context, not just the link" },
      {
        type: "p",
        text: "A technically valid link can still be a trap. Ask: did I expect this message? Is it pushing me to act fast — 'your account will be closed in 24 hours'? Does the sender's email address actually match the company? Urgency plus a link is the universal shape of phishing. When in doubt, ignore the link entirely and navigate to the company's site by typing the address yourself.",
      },
      { type: "h2", text: "5. Add a safety net for the clicks you get wrong" },
      {
        type: "p",
        text: "Everyone slips eventually. Two layers limit the damage. First, a password manager will not autofill your credentials on a lookalike domain — that silence is itself a warning. Second, reputable antivirus software blocks known malicious sites and downloads before they load.",
      },
      { type: "affiliate", key: "bitdefender" },
      {
        type: "p",
        text: "Run any link you are unsure about through the scanner below, and if it flags problems, simply do not click. The thirty seconds you spend checking is always cheaper than a drained account.",
      },
      { type: "tool", slug: "url-scanner" },
    ],
  },
  {
    slug: "what-to-do-after-a-data-breach",
    title: "Your Password Was in a Data Breach — Here's Exactly What to Do",
    description:
      "A calm, step-by-step recovery plan for when a password or account turns up in a data breach. Do these things, in this order.",
    date: "2026-01-20",
    readingMinutes: 7,
    keywords: [
      "what to do after data breach",
      "my password was leaked",
      "account breached steps",
      "password found in breach",
    ],
    body: [
      {
        type: "p",
        text: "Finding your password in a breach feels alarming, but it is genuinely routine — billions of credentials have leaked over the past decade. What matters is not whether you were caught up in a breach, but how quickly and completely you respond. Here is the plan, in priority order.",
      },
      { type: "h2", text: "Step 1: Confirm what actually leaked" },
      {
        type: "p",
        text: "First establish the facts. Use the breach checker below to test the specific password — it tells you whether that exact string appears in known breach data. The check is private: your password is hashed in your browser and never sent anywhere.",
      },
      { type: "tool", slug: "password-checker" },
      { type: "h2", text: "Step 2: Change that password everywhere it was used" },
      {
        type: "p",
        text: "A leaked password is dangerous not because of the one account it belonged to, but because attackers immediately try it on every other major service. This is called credential stuffing, and it is automated and instant. If you reused that password — even a slight variation of it — change it on every site, starting with the highest-stakes accounts.",
      },
      {
        type: "ol",
        items: [
          "Your primary email — it is the master key that can reset everything else.",
          "Banking, payment and shopping accounts with saved cards.",
          "Anything storing personal documents or identity data.",
          "Social media and messaging accounts.",
          "Everything else.",
        ],
      },
      {
        type: "callout",
        text: "Never reuse the new password. Each account needs its own unique password — that is the single change that makes a future breach a non-event instead of a disaster.",
      },
      { type: "h2", text: "Step 3: Turn on two-factor authentication" },
      {
        type: "p",
        text: "Two-factor authentication (2FA) means a stolen password alone is not enough to get in. Enable it everywhere it is offered, starting with email and banking. Prefer an authenticator app or a hardware key over SMS codes, since text messages can be intercepted or SIM-swapped.",
      },
      { type: "h2", text: "Step 4: Make unique passwords sustainable" },
      {
        type: "p",
        text: "Nobody can remember a hundred unique strong passwords. That is exactly the job a password manager exists to do: it generates a different random password for every account, fills them in for you, and warns you when one shows up in a breach. It also quietly defends against phishing, because it refuses to autofill on a lookalike domain.",
      },
      { type: "affiliate", key: "onepassword" },
      {
        type: "p",
        text: "If you would rather not pay, free tiers and open-source options exist too — the important thing is that you stop reusing passwords. Generate the replacements with the tool below.",
      },
      { type: "tool", slug: "password-generator" },
      { type: "h2", text: "Step 5: Watch for follow-on attacks" },
      {
        type: "p",
        text: "After a breach, expect a wave of targeted phishing — emails that reference the breached service to seem credible. Be extra skeptical of messages about 'verifying' or 'securing' your account for the next few weeks, and check any link before clicking. Then move on: you have done the work, and a unique password plus 2FA puts you ahead of the overwhelming majority of people online.",
      },
    ],
  },
  {
    slug: "password-manager-vs-browser-saved-passwords",
    title: "Password Manager vs. Browser-Saved Passwords: Which Is Safer?",
    description:
      "Letting Chrome or Safari remember your passwords is convenient — but is it secure? An honest comparison with a dedicated password manager.",
    date: "2026-02-03",
    readingMinutes: 6,
    keywords: [
      "password manager vs browser",
      "is chrome password manager safe",
      "browser saved passwords security",
      "should i use a password manager",
    ],
    body: [
      {
        type: "p",
        text: "Your browser keeps offering to save your passwords, and it works fine — so why would anyone pay for a separate app? It is a fair question. Browser password storage has genuinely improved. But there are real differences, and they matter more the more accounts you have.",
      },
      { type: "h2", text: "Where browser-saved passwords are fine" },
      {
        type: "p",
        text: "If your device is locked with a strong PIN or biometric, your browser's built-in store is far better than the alternative most people fall back on: reusing one password everywhere. Modern browsers encrypt the password database and can sync it across your devices. For a casual user inside a single browser ecosystem, it is a reasonable baseline.",
      },
      { type: "h2", text: "Where it falls short" },
      {
        type: "ul",
        items: [
          "It is tied to one browser. Saved in Chrome, but signing in on Safari or a friend's Firefox? You are locked out of your own passwords.",
          "Anyone with access to an unlocked computer profile can often view the saved passwords in plain text in a couple of clicks.",
          "It covers passwords for websites, but not Wi-Fi keys, software licences, secure notes, recovery codes or passwords for non-web apps.",
          "Breach monitoring and password-health auditing are basic or absent compared with dedicated tools.",
          "Malware that targets browsers specifically goes looking for exactly this database.",
        ],
      },
      { type: "h2", text: "What a dedicated password manager adds" },
      {
        type: "p",
        text: "A standalone password manager treats your vault as the product, not an afterthought. It works across every browser and operating system, sits behind its own master password and 2FA, generates strong unique passwords on the spot, stores more than just logins, and actively audits your accounts — flagging reused, weak or breached passwords before an attacker finds them.",
      },
      { type: "affiliate", key: "onepassword" },
      {
        type: "callout",
        text: "The honest verdict: browser storage is acceptable; a dedicated manager is meaningfully safer and more capable. Either is dramatically better than reusing passwords.",
      },
      { type: "h2", text: "If you switch, do it properly" },
      {
        type: "p",
        text: "Migrating is straightforward — most managers import directly from your browser. Once imported, take the extra step that delivers the real benefit: run the manager's password-health check and replace every weak or reused password with a fresh random one. Until you do that, you have just moved the same flawed passwords into a nicer container.",
      },
      { type: "tool", slug: "password-generator" },
      {
        type: "p",
        text: "And before you trust an old favourite password, check whether it has already leaked. If it has, it does not belong in any vault — browser or otherwise.",
      },
      { type: "tool", slug: "password-checker" },
    ],
  },
  {
    slug: "how-often-should-you-change-passwords",
    title: "How Often Should You Change Your Passwords? (2026 Guidance)",
    description:
      "Forced 90-day password changes are out of date. Here is what security experts actually recommend now — and when you really do need to change a password.",
    date: "2026-02-18",
    readingMinutes: 5,
    keywords: [
      "how often change passwords",
      "should i change my password regularly",
      "password rotation advice",
      "password change frequency",
    ],
    body: [
      {
        type: "p",
        text: "For years, the standard advice was to change every password every 90 days. If your workplace still forces this, you have felt the result: people make tiny predictable edits — Summer2025, then Summer2026 — and write them on sticky notes. Modern security guidance has moved on, and so should you.",
      },
      { type: "h2", text: "The current expert consensus" },
      {
        type: "p",
        text: "Major security bodies, including national cybersecurity agencies, now advise against routine scheduled password changes for ordinary accounts. Forced rotation pushes people toward weaker, more predictable passwords, which makes things worse, not better. The modern model is simple: use a long, unique, random password for every account, and change it only when there is a reason to.",
      },
      { type: "h2", text: "When you SHOULD change a password immediately" },
      {
        type: "ul",
        items: [
          "It appears in a known data breach — check below, and change it if found.",
          "You have ever reused it on another site (reuse is itself the breach risk).",
          "You typed it into a site after clicking a link, and later doubted that site was genuine.",
          "Someone could have seen or known it — an ex-partner, former housemate, old colleague.",
          "The service itself announces a breach or asks you to reset.",
          "It is weak, short, or based on personal information someone could guess.",
        ],
      },
      { type: "tool", slug: "password-checker" },
      { type: "h2", text: "What to do instead of rotating" },
      {
        type: "p",
        text: "Redirect the effort you used to spend rotating passwords into three changes that genuinely move the needle:",
      },
      {
        type: "ol",
        items: [
          "Make every password unique. One password per account, full stop.",
          "Make each one long and random — length beats complexity. Generate them rather than inventing them.",
          "Turn on two-factor authentication, so a leaked password alone cannot unlock the account.",
        ],
      },
      { type: "tool", slug: "password-generator" },
      {
        type: "callout",
        text: "Bottom line: do not change strong, unique passwords on a calendar. Change any password the moment there is a reason — and never reuse one.",
      },
      {
        type: "p",
        text: "Keeping a unique password for every account is only realistic with help. A password manager remembers them so you do not have to, and tells you the instant one needs changing — which is the only schedule that actually matters.",
      },
      { type: "affiliate", key: "dashlane" },
    ],
  },
  {
    slug: "personal-cybersecurity-checklist",
    title: "The 12-Point Personal Cybersecurity Checklist for 2026",
    description:
      "A complete, plain-English checklist to secure your accounts, devices and home network in a single weekend. No technical background needed.",
    date: "2026-03-05",
    readingMinutes: 9,
    keywords: [
      "personal cybersecurity checklist",
      "how to secure my accounts",
      "home network security checklist",
      "online safety checklist 2026",
    ],
    body: [
      {
        type: "p",
        text: "You do not need to be a security expert to be a hard target. The vast majority of attacks on individuals are opportunistic — they hit whoever left the easiest opening. Work through these twelve points and you move firmly out of that group. Set aside a weekend; most of it is faster than you expect.",
      },
      { type: "h2", text: "Accounts (the highest priority)" },
      {
        type: "ol",
        items: [
          "Secure your primary email first. It can reset every other account, so it gets your strongest unique password and two-factor authentication before anything else.",
          "Give every important account a unique password. Reuse is the single biggest risk — one leak should never unlock a second account.",
          "Turn on two-factor authentication everywhere it is offered, preferring an authenticator app or hardware key over SMS.",
          "Check your key passwords against breach data and replace any that have leaked.",
        ],
      },
      { type: "tool", slug: "password-checker" },
      {
        type: "p",
        text: "Doing points 2 to 4 by hand is exhausting, which is why people give up halfway. A password manager makes unique passwords effortless: it generates, stores, fills and audits them for you, and flags breached ones automatically.",
      },
      { type: "affiliate", key: "onepassword" },
      { type: "h2", text: "Devices" },
      {
        type: "ol",
        items: [
          "Turn on automatic updates for your operating system, browser and apps — most attacks exploit flaws that were already patched.",
          "Lock every device with a strong PIN, password or biometric, and set a short auto-lock timeout.",
          "Run reputable antivirus / anti-malware protection, especially on Windows and on any shared family computer.",
          "Enable full-disk encryption (FileVault on Mac, BitLocker on Windows, on by default on modern phones) so a lost device is not a data leak.",
        ],
      },
      { type: "affiliate", key: "bitdefender" },
      { type: "h2", text: "Network & connection" },
      {
        type: "ol",
        items: [
          "Change your home router's default admin password and Wi-Fi password, and keep its firmware updated.",
          "On public Wi-Fi — cafes, airports, hotels — use a VPN so your traffic cannot be snooped on the local network.",
          "Be deliberate about what you click: verify links before opening them, and treat urgency in any message as a warning sign.",
        ],
      },
      { type: "affiliate", key: "nordvpn" },
      { type: "tool", slug: "url-scanner" },
      { type: "h2", text: "The twelfth point: a recovery plan" },
      {
        type: "p",
        text: "Finally, assume something will go wrong one day and prepare a soft landing. Keep an up-to-date backup of anything you cannot bear to lose (the simplest rule: one copy off your device, one copy offline). Store each account's recovery codes somewhere safe. Know how you would contact your bank to freeze a card. Resilience is not pessimism — it is what turns a catastrophe into an inconvenience.",
      },
      {
        type: "callout",
        text: "You will not finish all twelve points perfectly, and that is fine. Every single one you complete makes you a measurably harder target. Start at the top of the list and work down.",
      },
      {
        type: "p",
        text: "Generate the unique passwords you need to get started right here — then store them in a manager so you never have to think about them again.",
      },
      { type: "tool", slug: "password-generator" },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
