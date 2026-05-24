/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SITE CONFIG  —  Mara · a venode product
 *  Cybersecurity threat-intelligence language model. One source of truth.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  /** Parent lab */
  lab: "venode",
  /** Product (lowercase, matches venode brand style) */
  name: "mara",
  /** Display title for metadata + headings */
  displayName: "Mara",

  /** One-line positioning */
  tagline: "Cybersecurity intelligence, on the defender's side.",

  description:
    "Mara is venode's language model for cyber defense. Trained on threat " +
    "reports, malware analyses, incident write-ups and adversary playbooks " +
    "— built for the people defending things.",

  /** Set this to your real domain before launch. */
  url: "https://mara.venode.ai",

  /** Parent lab homepage. */
  labUrl: "https://venode.ai",

  /** Where "Open Mara" / "Sign up" CTAs land. */
  appUrl: "https://mara.venode.ai/chat",

  /** Contact mailbox. */
  contactEmail: "hello@venode.ai",
} as const;

export type SiteConfig = typeof siteConfig;
