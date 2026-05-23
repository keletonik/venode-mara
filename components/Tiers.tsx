import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

const tiers = [
  {
    name: "Free",
    price: "$0",
    blurb: "For analysts, students, the curious.",
    features: [
      "Mara on the fast model.",
      "Single-question triage, sample inspection.",
      "Public CTI references.",
      "Per-minute rate limit, no daily cap.",
    ],
    cta: { label: "Open Mara", href: siteConfig.appUrl },
    accent: false,
  },
  {
    name: "Pro",
    price: "$20 / month",
    blurb: "For teams who do this for a living.",
    features: [
      "Mara on the thinking model.",
      "Multi-step investigations, agentic tool use.",
      "Long-context up to 200K tokens.",
      "Private connectors into your stack.",
      "Structured outputs (STIX, MISP, JSON).",
      "API access with usage metering.",
    ],
    cta: { label: "Start Pro", href: siteConfig.appUrl },
    accent: true,
  },
  {
    name: "Custom",
    price: "Talk to us",
    blurb: "On-site, hosted, or hybrid — built to your spec.",
    features: [
      "Designed and trained to your spec.",
      "On your detection logic and runbooks.",
      "Your data does not train anything else.",
      "No advertisers. No resale, ever.",
    ],
    cta: { label: "Talk to us", href: `mailto:${siteConfig.contactEmail}` },
    accent: false,
  },
];

export default function Tiers() {
  return (
    <section id="pricing" className="border-b border-hairline">
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <span className="eyebrow">04 · Pricing</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            One Mara.{" "}
            <span className="quiet font-normal">Tiered by plan.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-2">
            We do not split the model. The same Mara answers a curious
            student and a tier-3 SOC analyst. Pro adds the connectors, the
            context, and the API — not a different brain.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal
              key={t.name}
              
              className="bg-bg p-8 sm:p-10"
              delay={i * 110}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[24px] font-extrabold tracking-tight text-ink">
                  {t.name}
                </h3>
                <span
                  className={`font-mono text-[13px] ${t.accent ? "text-accent" : "text-ink-2"}`}
                  style={{ letterSpacing: "0.05em" }}
                >
                  {t.price}
                </span>
              </div>
              <p className="mt-2 text-[15px] text-ink-2">{t.blurb}</p>

              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.55] text-ink"
                  >
                    <span className="font-mono text-[11px] text-accent/80">—</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {t.cta.href.startsWith("mailto:") ? (
                <a href={t.cta.href} className="btn-primary mt-10">
                  {t.cta.label} <ArrowRight className="h-3 w-3" />
                </a>
              ) : (
                <Link href={t.cta.href} className="btn-primary mt-10">
                  {t.cta.label} <ArrowRight className="h-3 w-3" />
                </Link>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
