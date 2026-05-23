/* ─────────────────────────────────────────────────────────────────────
 * mara · single-page product site for venode's cybersecurity model.
 *
 * MASTER PROMPT (this iteration)
 *
 *   ROLE: simultaneously a senior brand designer (Linear/Apple), a
 *   motion designer (Anthropic/Stripe), a Vignelli-restraint
 *   typographer, a senior Next.js engineer, and a cybersecurity
 *   product marketer with real SOC experience.
 *
 *   TASTE BAR: linear.app, anthropic.com, mistral.ai, stripe.com.
 *   Earned restraint, premium motion, considered density. Not
 *   generic dark-mode template.
 *
 *   NON-NEGOTIABLES
 *   - Dark. Cream. Oxblood. No italics. No serif. No rounded corners.
 *   - Static-render. Zero deps beyond next/react/tailwind/next-font.
 *   - Respects reduced-motion. WCAG-acceptable contrast.
 *   - Every line of copy passes a senior analyst's smell test.
 *
 *   THIS PASS
 *   1. A real Mara mark — a constellation glyph (three nodes, one
 *      accent, thin connecting strokes). Used at favicon, header,
 *      hero panel, and as the recurring motif. Lines draw in.
 *   2. Hero v2 — split composition. Wordmark on the left, an
 *      "intelligence panel" containing the live constellation +
 *      telemetry readouts on the right. Parallax glow tracks cursor.
 *   3. New section: MODEL CARD — concrete spec sheet in mono with
 *      version, context, training corpus, eval scores, refusal
 *      rates, build date.
 *   4. Subtle CRT scanline overlay over the whole page for depth.
 *   5. Sharper section rhythm, tighter copy throughout.
 * ─────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import {
  ArrowRight,
  MaraConstellation,
  MaraWordmark,
  VenodeMark,
} from "@/components/Icons";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import DemoTranscript from "@/components/DemoTranscript";
import Capabilities from "@/components/Capabilities";
import Tiers from "@/components/Tiers";
import Safety from "@/components/Safety";
import ModelCard from "@/components/ModelCard";
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

const marqueeItems = [
  "Cybersecurity intelligence",
  "Threat triage",
  "Malware analysis",
  "Incident response",
  "Adversary reasoning",
  "Calibrated confidence",
  "Refusal-first safety",
  "On the defender's side",
  "Built by venode",
];

export default function Page() {
  return (
    <>
      {/* ─── HERO ───────────────────────────────────────────────────── */}
      <Hero />

      {/* ─── MARQUEE BAND ───────────────────────────────────────────── */}
      <div className="border-b border-hairline bg-[#0a090c] py-5">
        <Marquee items={marqueeItems} />
      </div>

      {/* ─── 01 · POSITION ──────────────────────────────────────────── */}
      <section className="border-b border-hairline">
        <div className="container-page py-28 sm:py-36">
          <div className="grid gap-14 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <Reveal>
                <span className="eyebrow">01 · Position</span>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="display mt-7 text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
                  Don&apos;t cede the cyber advantage.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:mt-2">
              <Reveal>
                <p className="text-[19px] leading-[1.6] text-ink">
                  AI is now genuinely useful for cybersecurity — for both
                  sides. The honest position is to put it firmly in the
                  hands of the people defending things.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 max-w-xl text-[17px] leading-[1.65] text-ink-2">
                  Mara is venode&apos;s contribution. A model that reads
                  like a senior analyst, refuses operational offensive
                  work, knows what it does not know, and produces the
                  artefact at the end of the shift.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <Link href="#demo" className="btn-primary">
                    See Mara think <ArrowRight className="h-3 w-3" />
                  </Link>
                  <Link href="#safety" className="btn-ghost">
                    Read the refusal policy
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 02 · DEMO ──────────────────────────────────────────────── */}
      <section id="demo" className="border-b border-hairline">
        <div className="container-page py-28 sm:py-36">
          <Reveal>
            <span className="eyebrow">02 · Mara, in conversation</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
              The transcript writes itself.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[16.5px] leading-[1.6] text-ink-2">
              An illustrative SOC session. The real product behaves the
              same way; this is condensed for reading.
            </p>
          </Reveal>

          <Reveal delay={280} className="mt-12">
            <DemoTranscript />
          </Reveal>
        </div>
      </section>

      {/* ─── 03 · CAPABILITIES ──────────────────────────────────────── */}
      <Capabilities />

      {/* ─── 04 · TIERS ─────────────────────────────────────────────── */}
      <Tiers />

      {/* ─── 05 · MODEL CARD ────────────────────────────────────────── */}
      <ModelCard />

      {/* ─── 06 · SAFETY ────────────────────────────────────────────── */}
      <Safety />

      {/* ─── 07 · CLOSING ───────────────────────────────────────────── */}
      <section className="relative border-b border-hairline">
        {/* Constellation as background glyph behind the wordmark */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid place-items-center opacity-40"
        >
          <div className="aspect-square w-[min(70vw,720px)]">
            <MaraConstellation />
          </div>
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(40% 60% at 50% 50%, rgba(200,51,75,0.10), transparent 70%)",
          }}
        />
        <div className="container-page relative py-36 sm:py-48">
          <Reveal>
            <div className="flex justify-center">
              <MaraWordmark
                showGlyph={false}
                className="text-[clamp(5rem,16vw,16rem)]"
              />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-10 max-w-xl text-center text-[18px] leading-[1.55] text-ink-2">
              Free for the curious. Twenty dollars a month for the work.
              Custom for the teams who need their own.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
              <a href={siteConfig.appUrl} className="btn-primary">
                Open Mara <ArrowRight className="h-3 w-3" />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="btn-ghost"
              >
                Talk to us
              </a>
            </div>
          </Reveal>

          <Reveal delay={440}>
            <div className="mt-20 flex items-center justify-center gap-3">
              <VenodeMark className="text-[15px]" />
              <span
                className="font-mono text-[11px] uppercase text-ink-3"
                style={{ letterSpacing: "0.22em" }}
              >
                · a research lab building tools for defenders
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
