/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG  —  Hugo · a venode research lab product
 *  Cybersecurity intelligence model. One file to edit before deploy.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Parent lab brand */
  lab: "venode",
  /** Product */
  name: "hugo",
  displayName: "Hugo",

  /** One-line product positioning */
  tagline: "A cybersecurity intelligence model.",

  description:
    "Hugo is venode's language model for cyber defense. Trained on threat " +
    "reports, malware analyses, incident write-ups and adversary playbooks " +
    "— built for the people defending things.",

  /** Update before launch. Used for canonicals, sitemap, OG. */
  url: "https://hugo.venode.ai",

  /** Parent lab URL. */
  labUrl: "https://venode.ai",

  /** Where "Open Hugo" / "Sign up" point. */
  appUrl: "https://hugo.venode.ai/chat",

  /** Where contact CTAs send mail. */
  contactEmail: "hello@venode.ai",

  /** Social. Leave "" to hide. */
  github: "",
  twitter: "",

  /** Hugo's two-tier offering, matching venode's "One Hugo, tiered by plan" model. */
  tiers: {
    free: {
      name: "Free",
      blurb:
        "Hugo on the fast model. Single-question triage, sample inspection, public CTI sources. Per-minute rate limit, no daily cap.",
    },
    pro: {
      name: "Pro",
      blurb:
        "Hugo on the thinking model. Multi-step investigations, private connectors, structured outputs and long context up to 200K tokens.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
