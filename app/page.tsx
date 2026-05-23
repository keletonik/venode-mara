/* ─────────────────────────────────────────────────────────────────────
 * mara · single-page product site for venode's cybersecurity model.
 *
 * MASTER PROMPT (the spec this page is built against)
 *
 *   GOAL: A single-page premium product site for Mara, venode's
 *   cybersecurity threat-intelligence language model. Anthropic-grade
 *   restraint, venode-grade brand discipline, cinematic dark execution.
 *
 *   PRINCIPLES
 *   - One page. No nav, no sub-routes (legal pages aside).
 *   - Dark / mysterious. No italics, no serif, no cursive — ever.
 *   - Motion as substance, not decoration. Every animation must read.
 *   - Static-render where possible, CSS-driven where possible. JS only
 *     for: typewriter, intersection-triggered reveal, marquee pause-on-
 *     hover, cycling tagline, parallax glow.
 *   - Zero dependencies beyond next + react + tailwind + next/font.
 *
 *   SECTIONS (top → bottom, single scroll)
 *   01  HERO        — letter-rise reveal of "mara", cycling tagline,
 *                     parallax glow, CTAs, marquee band.
 *   02  POSITION    — Anthropic dual-use framing for defenders.
 *   03  DEMO        — auto-typing chat transcript triggered on scroll.
 *   04  CAPABILITY  — 4 capability blocks with hover micro-interactions.
 *   05  TIERS       — One Mara: Free / Pro / Custom.
 *   06  SAFETY      — Mara will not / Mara will help with.
 *   07  CLOSING     — Big CTA + venode wordmark for parent context.
 *
 *   BRAND
 *   - mara wordmark: m + a (accent) + r + a (accent) + blinking cursor.
 *   - Palette: bg #08070a · ink #F4F1EA · accent #C8334B (oxblood-lift).
 *   - Type: Inter (400–900), Geist Mono for labels & code.
 * ─────────────────────────────────────────────────────────────────── */

import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight, MaraWordmark, VenodeMark } from "@/components/Icons";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import DemoTranscript from "@/components/DemoTranscript";
import Capabilities from "@/components/Capabilities";
import Tiers from "@/components/Tiers";
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
      {/* 01 — Hero */}
      <Hero />

      {/* Marquee band, sits flush under the hero */}
      <div className="border-b border-hairline bg-[#0a090c] py-5">
        <Marquee items={marqueeItems} />
      </div>

      {/* 02 — Position */}
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
                  Mara is venode&apos;s contribution. A model that reads like
                  a senior analyst, refuses operational offensive work,
                  knows what it does not know, and produces the artefact at
                  the end of the shift.
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

      {/* 03 — Demo */}
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
              An illustrative SOC session. The real product behaves the same
              way; this is condensed for reading.
            </p>
          </Reveal>

          <Reveal delay={280} className="mt-12">
            <DemoTranscript />
          </Reveal>
        </div>
      </section>

      {/* 04 — Capabilities */}
      <Capabilities />

      {/* 05 — Tiers */}
      <Tiers />

      {/* 06 — Safety */}
      <Safety />

      {/* 07 — Closing */}
      <section className="border-b border-hairline">
        <div className="container-page relative py-36 sm:py-48">
          {/* Sub backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(40% 60% at 50% 50%, rgba(200,51,75,0.08), transparent 70%)",
            }}
          />
          <div className="relative">
            <Reveal>
              <div className="flex justify-center">
                <MaraWordmark className="text-[clamp(5rem,16vw,16rem)]" />
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
                  · A research lab building tools for defenders
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
