import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight, MaraWordmark, VenodeWordmark } from "./Icons";

const sectors = [
  "Financial services",
  "Healthcare and life sciences",
  "Scientific research",
  "Critical infrastructure",
];

const capabilities = [
  "200K-token context",
  "STIX, MISP and JSON outputs",
  "Tenant-deployed",
  "Documented model card",
];

export default function MaraIntro() {
  return (
    <section
      id="mara"
      aria-labelledby="mara-intro-h"
      className="relative border-b border-hairline"
    >
      <div className="container-page py-32 sm:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="eyebrow mara-reveal inline-block"
            style={{ animationDelay: "60ms" }}
          >
            P-01 · Introducing
          </span>

          <div className="mt-14 flex justify-center">
            <MaraWordmark
              animated
              className="h-24 w-auto text-ink sm:h-32"
            />
          </div>

          <div
            className="mara-reveal mt-7 flex items-baseline justify-center gap-3"
            style={{ animationDelay: "950ms" }}
          >
            <span
              className="font-mono text-[11px] uppercase text-ink-2"
              style={{ letterSpacing: "0.22em" }}
            >
              By
            </span>
            <VenodeWordmark className="text-[20px] sm:text-[22px]" />
          </div>

          <div
            className="mara-rule mx-auto mt-12 h-px w-24 bg-hairline"
            style={{ animationDelay: "1150ms" }}
            aria-hidden="true"
          />

          <h2
            id="mara-intro-h"
            className="display mara-reveal mt-12 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.06]"
            style={{ animationDelay: "1250ms" }}
          >
            A language model for cyber threat intelligence.
          </h2>

          <p
            className="mara-reveal mx-auto mt-8 max-w-xl text-[17px] leading-[1.7] text-ink-2"
            style={{ animationDelay: "1450ms" }}
          >
            Mara is built for the analytical work behind a credible security
            programme: triage, malware analysis, incident response and threat
            reporting. Deployed inside the tenant, calibrated by senior
            practitioners, and accountable to a documented model card.
          </p>

          <ul
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
            aria-label="Sectors served"
          >
            {sectors.map((s, i) => (
              <li
                key={s}
                className="mara-reveal"
                style={{ animationDelay: `${1650 + i * 130}ms` }}
              >
                <span
                  className="inline-flex items-center border border-hair2 px-3.5 py-2 font-mono text-[11px] uppercase text-ink"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {s}
                </span>
              </li>
            ))}
          </ul>

          <ul
            className="mara-reveal mt-12 flex flex-wrap items-center justify-center gap-x-5 gap-y-3"
            style={{ animationDelay: "2350ms" }}
            aria-label="Capabilities"
          >
            {capabilities.map((c, i) => (
              <li
                key={c}
                className="flex items-center gap-5 font-mono text-[11px] uppercase text-ink-2"
                style={{ letterSpacing: "0.18em" }}
              >
                {i > 0 && (
                  <span aria-hidden="true" className="text-ink-2/40">·</span>
                )}
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div
            className="mara-reveal mt-16 flex flex-wrap items-center justify-center gap-x-7 gap-y-4"
            style={{ animationDelay: "2600ms" }}
          >
            <Link href="/mara" className="btn-primary">
              See Mara <ArrowRight className="h-3 w-3" />
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Mara briefing")}`}
              className="btn-ghost"
            >
              Request a briefing
            </a>
          </div>

          <p
            className="mara-reveal mt-16 font-mono text-[10px] uppercase text-ink-2/45"
            style={{ animationDelay: "2900ms", letterSpacing: "0.22em" }}
          >
            mara/v1 · model card · refusal behaviour documented
          </p>
        </div>
      </div>
    </section>
  );
}
