import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "./Icons";
import Reveal from "./Reveal";

const tiers = [
  {
    name: "Free",
    price: "no charge",
    blurb: "For analysts, students, the curious.",
    features: [
      "Mara on the fast model.",
      "Single-question triage and sample inspection.",
      "Public CTI references.",
    ],
    cta: { label: "Open Mara", href: siteConfig.appUrl },
  },
  {
    name: "Pro",
    price: "twenty dollars / month",
    blurb: "For teams who do this work for a living.",
    features: [
      "Mara on the thinking model.",
      "Multi-step investigations, agentic tool use.",
      "Long context, private connectors, API access.",
    ],
    cta: { label: "Start Pro", href: siteConfig.appUrl },
    highlight: true,
  },
  {
    name: "Custom",
    price: "talk to us",
    blurb: "On-site, hosted, or hybrid — built to your spec.",
    features: [
      "Trained on your detection logic and runbooks.",
      "Your data does not train anything else.",
      "No advertisers, no resale, ever.",
    ],
    cta: { label: "Email venode", href: `mailto:${siteConfig.contactEmail}` },
  },
];

export default function Tiers() {
  return (
    <section id="pricing" className="border-t border-hairline">
      <div className="container-page py-32 sm:py-40">
        <Reveal>
          <span className="eyebrow">Pricing</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            One model, three plans.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-ink-2">
            We do not split the model. The same Mara answers a curious
            student and a tier-3 SOC analyst. Pro adds the connectors, the
            context and the API — not a different brain.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 110}>
              <div className="flex h-full flex-col py-10 md:px-10 md:py-2 md:border-l md:border-hairline md:first:border-l-0">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-[28px] font-medium tracking-tight text-ink">
                    {t.name}
                  </h3>
                  <span
                    className={`font-mono text-[12px] uppercase ${
                      t.highlight ? "text-accent" : "text-ink-3"
                    }`}
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {t.price}
                  </span>
                </div>
                <p className="mt-3 text-[15.5px] leading-[1.6] text-ink-2">
                  {t.blurb}
                </p>
                <ul className="mt-7 space-y-3 text-[15.5px] leading-[1.6] text-ink">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-baseline gap-3">
                      <span className="mt-1 h-px w-3 bg-ink-3" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-10">
                  {t.cta.href.startsWith("mailto:") ? (
                    <a href={t.cta.href} className="arrow-link">
                      {t.cta.label} <ArrowRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <Link href={t.cta.href} className="arrow-link">
                      {t.cta.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
