export type Tool = {
  slug: string;
  name: string;
  /** Short label for cards / nav. */
  tagline: string;
  /** Longer description used on the tool page + meta description. */
  description: string;
  /** Search keywords this tool targets. */
  keywords: string[];
  /** Icon key, see components/Icons.tsx */
  icon: string;
};

export const tools: Tool[] = [
  {
    slug: "password-checker",
    name: "Password Breach Checker",
    tagline: "See if your password has leaked in a data breach.",
    description:
      "Check instantly and privately whether a password has appeared in a " +
      "known data breach. Your password is hashed in your browser and never " +
      "sent anywhere — only a partial, anonymous hash prefix is used.",
    keywords: [
      "password breach checker",
      "has my password been leaked",
      "check password data breach",
      "pwned password check",
    ],
    icon: "shield",
  },
  {
    slug: "password-generator",
    name: "Strong Password Generator",
    tagline: "Create random, uncrackable passwords in one click.",
    description:
      "Generate strong, random passwords and passphrases using your " +
      "browser's cryptographically secure random generator. Choose length, " +
      "character sets and copy with one click. Nothing leaves your device.",
    keywords: [
      "strong password generator",
      "random password generator",
      "secure password creator",
      "passphrase generator",
    ],
    icon: "key",
  },
  {
    slug: "password-strength",
    name: "Password Strength Analyzer",
    tagline: "Estimate how long your password would survive an attack.",
    description:
      "Analyze a password's strength: entropy, character variety, common " +
      "patterns and an estimated time to crack it. Runs fully in your " +
      "browser — your password is never transmitted.",
    keywords: [
      "password strength checker",
      "how strong is my password",
      "password entropy calculator",
      "time to crack password",
    ],
    icon: "gauge",
  },
  {
    slug: "url-scanner",
    name: "Suspicious Link Scanner",
    tagline: "Spot phishing and scam links before you click.",
    description:
      "Paste any link to get an instant safety breakdown. The scanner checks " +
      "for phishing red flags: lookalike domains, IP-address hosts, risky " +
      "TLDs, URL shorteners, punycode tricks and more.",
    keywords: [
      "is this link safe",
      "phishing link checker",
      "suspicious url scanner",
      "check url for scam",
    ],
    icon: "link",
  },
  {
    slug: "hash-generator",
    name: "Hash Generator",
    tagline: "Generate MD5, SHA-1 and SHA-256/512 hashes.",
    description:
      "Generate cryptographic hashes (MD5, SHA-1, SHA-256, SHA-384, SHA-512) " +
      "from any text. Useful for verifying file integrity and checksums. " +
      "All hashing happens locally in your browser.",
    keywords: [
      "hash generator",
      "md5 generator",
      "sha256 hash online",
      "checksum calculator",
    ],
    icon: "hash",
  },
  {
    slug: "uuid-generator",
    name: "UUID & Token Generator",
    tagline: "Generate UUIDs, API keys and random secrets.",
    description:
      "Generate version-4 UUIDs and cryptographically secure random tokens " +
      "for API keys, secrets and identifiers. Bulk generation supported, all " +
      "done locally with the Web Crypto API.",
    keywords: [
      "uuid generator",
      "random token generator",
      "api key generator",
      "secret key generator",
    ],
    icon: "fingerprint",
  },
];

export function getTool(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}
