/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG  —  Mara · a venode research lab product
 *  Cyber defence and threat intelligence model. One file to edit before deploy.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Parent lab brand */
  lab: "venode",
  /** Product */
  name: "mara",
  displayName: "Mara",

  /** One-line product positioning */
  tagline: "A cyber defence and threat intelligence model.",

  description:
    "Mara is venode's language model for cyber defence and threat " +
    "intelligence. Trained on threat reports, malware analyses, incident " +
    "write-ups and adversary playbooks. Built for the people defending things.",

  /** Update before launch. Used for canonicals, sitemap, OG. */
  url: "https://mara.venode.ai",

  /** Parent lab URL. */
  labUrl: "https://venode.ai",

  /** Where "Open Mara" / "Sign up" point. */
  appUrl: "https://mara.venode.ai/chat",

  /** Where contact CTAs send mail. */
  contactEmail: "hello@venode.ai",

  /** Social. Leave "" to hide. */
  github: "",
  twitter: "",

  /** Mara's two-tier offering, matching venode's "One Mara, tiered by plan" model. */
  tiers: {
    free: {
      name: "Free",
      blurb:
        "Mara on the fast model. Single-question triage, sample inspection, public CTI sources. Per-minute rate limit, no daily cap.",
    },
    pro: {
      name: "Pro",
      blurb:
        "Mara on the thinking model. Multi-step investigations, private connectors, structured outputs and long context up to 200K tokens.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
