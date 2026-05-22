/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE & MONETIZATION CONFIG  —  edit this file, redeploy, done.
 * ─────────────────────────────────────────────────────────────────────────
 *  This is the ONLY file you need to touch to make the site yours and to
 *  switch on revenue. Everything below is read across the whole app.
 *
 *  HOW TO EARN (see README.md for the full playbook):
 *   1. Buy a domain, set `url` below, deploy to Vercel (free).
 *   2. Apply to the affiliate programs listed in `affiliates` — they are
 *      free to join. When approved, paste YOUR tracking link over each
 *      `url` value. Until then the site links to the product homepage so
 *      nothing looks broken.
 *   3. Once you have ~30 articles / steady traffic, apply to Google
 *      AdSense or Ezoic, then set `ads.enabled = true` and your ID.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Brand name shown in the header, titles and footer. */
  name: "ThreatPeek",

  /** One-line value proposition. Used in metadata + hero. */
  tagline: "Free security tools that actually protect you.",

  description:
    "ThreatPeek gives you free, private, no-signup cybersecurity tools: " +
    "check if a password was breached, scan a suspicious link, generate " +
    "strong passwords and more. Everything runs in your browser.",

  /**
   * Your live URL. CHANGE THIS to your real domain before launch — it is
   * used for canonical tags, sitemap, robots.txt and social metadata.
   */
  url: "https://threatpeek.com",

  /** Optional: contact email shown on the About / Privacy pages. */
  contactEmail: "hello@threatpeek.com",

  /** Optional social handle (without @). Leave "" to hide. */
  twitter: "",

  /* ───────────────────────────── ADS ─────────────────────────────────── */
  ads: {
    /** Flip to true ONLY after you are approved by an ad network. */
    enabled: false,
    /** Google AdSense publisher ID, e.g. "ca-pub-1234567890123456". */
    adsenseClient: "",
  },

  /* ─────────────────────────── AFFILIATES ─────────────────────────────── */
  /**
   * These are real, reputable products with public affiliate programs.
   * Join the programs (free), then replace each `url` with YOUR link.
   * `payout` is an indicative commission to help you prioritise — verify
   * current terms with each program before relying on it.
   */
  affiliates: {
    nordvpn: {
      name: "NordVPN",
      category: "VPN",
      url: "https://nordvpn.com/",
      blurb: "Encrypt your connection on public Wi-Fi and hide your IP.",
      payout: "~40% of first-time sales / up to ~$100 per sale",
      cta: "Get NordVPN",
    },
    proton: {
      name: "Proton VPN & Pass",
      category: "Privacy suite",
      url: "https://proton.me/",
      blurb: "Swiss-based encrypted VPN, email and password manager.",
      payout: "~20–30% recurring",
      cta: "Try Proton",
    },
    bitdefender: {
      name: "Bitdefender",
      category: "Antivirus",
      url: "https://www.bitdefender.com/",
      blurb: "Consistently top-rated malware protection for all devices.",
      payout: "up to ~30% per sale",
      cta: "Get Bitdefender",
    },
    onepassword: {
      name: "1Password",
      category: "Password manager",
      url: "https://1password.com/",
      blurb: "Store unique passwords and passkeys behind one strong vault.",
      payout: "~25% / bounty per signup",
      cta: "Try 1Password",
    },
    dashlane: {
      name: "Dashlane",
      category: "Password manager",
      url: "https://www.dashlane.com/",
      blurb: "Password manager with built-in breach alerts and VPN.",
      payout: "bounty per paid signup",
      cta: "Try Dashlane",
    },
  },

  /* ───────────────────── DIGITAL PRODUCT (optional) ───────────────────── */
  /**
   * The fastest path to day-one revenue: sell a downloadable guide.
   * Create a free Gumroad account, upload a PDF (the "12-Point Personal
   * Cybersecurity Checklist" guide on this site is ready-made source
   * material), then paste the product URL here and set enabled = true.
   */
  product: {
    enabled: false,
    name: "The Home Cybersecurity Toolkit",
    blurb:
      "A printable 30-page PDF: lock down every account, device and your " +
      "home network in a weekend. No jargon.",
    price: "$12",
    url: "https://gumroad.com/",
    cta: "Get the toolkit",
  },
} as const;

export type SiteConfig = typeof siteConfig;
export type AffiliateKey = keyof typeof siteConfig.affiliates;
