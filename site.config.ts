/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG  —  Hugo · a Venode Labs product
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit this file and redeploy. Everything else reads from here.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Lab / parent brand */
  lab: "venode",
  /** Product name */
  name: "hugo",
  /** Long display title used in page metadata */
  displayName: "Hugo",

  /** One-line product positioning */
  tagline: "A cybersecurity intelligence model.",

  description:
    "Hugo is a language model from Venode Labs trained on threat reports, " +
    "malware analyses, incident write-ups and adversary playbooks. It is " +
    "built for the people who defend things.",

  /**
   * Your live URL. CHANGE THIS to your real domain before launch — it is
   * used for canonical tags, sitemap, robots.txt and social metadata.
   */
  url: "https://hugo.venode.ai",

  /** Parent lab URL (used in the wordmark link) */
  labUrl: "https://venode.ai",

  /** Where the "Open Hugo" CTA points. Replace with your app URL. */
  appUrl: "https://hugo.venode.ai/chat",

  /** Where the "Talk to us" CTAs point. */
  contactEmail: "hugo@venode.ai",

  /** Repo, social, etc. — leave "" to hide. */
  github: "https://github.com/venode",
  twitter: "",

  /** Headline pricing tiers shown on the home page. */
  tiers: {
    free: {
      name: "Hugo",
      price: "Free",
      blurb: "For analysts, students and the curious.",
      features: [
        "Chat with Hugo on threat intel, malware and IR.",
        "Single-file sample and report analysis.",
        "Public threat-intelligence references.",
        "5,000 tokens of context.",
      ],
      cta: "Open Hugo",
      href: "https://hugo.venode.ai/chat",
    },
    pro: {
      name: "Hugo Pro",
      price: "$20 / month",
      blurb: "For teams who do this for a living.",
      features: [
        "Agentic workflows across multiple artefacts.",
        "Private connectors: SIEM, EDR, ticketing, sandbox.",
        "Long-context investigations up to 200k tokens.",
        "API access and structured outputs.",
      ],
      cta: "Start Pro",
      href: "https://hugo.venode.ai/pro",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
