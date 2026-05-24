/* ─────────────────────────────────────────────────────────────────────
 * mara · venode's cybersecurity language model.
 *
 * Built against the MARA Master Redesign Protocol — see RESEARCH.md,
 * DESIGN_SYSTEM.md, AUDIT_PRE.md and PROGRESS.md at the repo root.
 *
 * Stack
 *   - Bricolage Grotesque (display + wordmark) via next/font/google
 *   - Inter (body)
 *   - Geist Mono (labels, code)
 *   - Tailwind 3 + CSS custom properties
 *
 * Section order
 *   00  Sticky glassmorphism header (mara wordmark + Join preview CTA)
 *   01  Hero — full-bleed atmosphere, oversized headline, cycling sub
 *   02  Argument — narrow editorial column
 *   03  Bento — 2026 modular grid, five facets of the model
 *   04  Demo — typewriter conversation
 *   05  Tiers — pre-launch honest plans
 *   06  Model card — commitment sheet, no fictional numbers
 *   07  Safety — refusal-first manifesto
 *   08  Closing — centered signature
 *   09  Footer — minimal signature row
 * ─────────────────────────────────────────────────────────────────── */

import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight, VenodeMark } from "@/components/Icons";
import Hero from "@/components/Hero";
import Argument from "@/components/Argument";
import Bento from "@/components/Bento";
import DemoTranscript from "@/components/DemoTranscript";
import Tiers from "@/components/Tiers";
import ModelCard from "@/components/ModelCard";
import Safety from "@/components/Safety";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({
  title: siteConfig.displayName,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "mara",
    "venode mara",
    "cybersecurity language model",
    "ai for cyber defenders",
    "threat intelligence llm",
  ],
});

export default function Page() {
  return (
    <>
      <Hero />
      <Argument />
      <Bento />

      {/* Demo */}
      <section id="demo" className="border-t border-hairline">
        <div className="container-page py-32 sm:py-40">
          <Reveal>
            <span className="eyebrow">In conversation</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
              What it feels like to use Mara.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-ink-2">
              An illustrative SOC exchange. The real product behaves the
              same way; the transcript below is condensed for reading.
            </p>
          </Reveal>

          <Reveal delay={280} className="mt-16">
            <DemoTranscript />
          </Reveal>
        </div>
      </section>

      <Tiers />
      <ModelCard />
      <Safety />

      {/* Closing — calm signature */}
      <section className="border-t border-hairline">
        <div className="container-narrow py-32 text-center sm:py-40">
          <Reveal>
            <p
              className="font-mono text-[11px] uppercase text-ink-3"
              style={{ letterSpacing: "0.18em" }}
            >
              Join the preview
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.05]">
              For the people defending things.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a href={siteConfig.appUrl} className="btn-primary">
                Request access <ArrowRight className="h-3 w-3" />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="arrow-link"
              >
                Talk to venode <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-20 flex items-center justify-center gap-2">
              <VenodeMark className="text-[14px]" />
              <span
                className="font-mono text-[11px] uppercase text-ink-3"
                style={{ letterSpacing: "0.18em" }}
              >
                · cyber lab · {new Date().getFullYear()}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
