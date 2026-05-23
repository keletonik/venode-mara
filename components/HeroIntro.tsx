"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "./Icons";
import { siteConfig } from "@/site.config";

type Slide = {
  eyebrow: string;
  headline: string;
  body: string;
  cta?: { label: string; href: string };
};

const SLIDES: Slide[] = [
  {
    eyebrow: "P-01 · Cyber language model",
    headline: "Hugo.",
    body:
      "A cybersecurity intelligence model from venode. Trained on threat reports, malware analyses, IR write-ups and adversary playbooks.",
  },
  {
    eyebrow: "Trained for the work",
    headline: "Built for defenders.",
    body:
      "Triage at speed. Reason under uncertainty. Produce the work — without ceding the cyber advantage to the attacker.",
  },
  {
    eyebrow: "Refusal-first safety",
    headline: "Honest about dual-use.",
    body:
      "Hugo will not write functional exploit code or help plan an intrusion. It says what it does not know, and stays inside the line.",
  },
  {
    eyebrow: "One Hugo · Tiered by plan",
    headline: "Free for the curious. Pro for the work.",
    body:
      "Fast model in the open. Thinking model with private connectors, long context and the full tool surface for teams.",
    cta: { label: "Open Hugo", href: siteConfig.appUrl },
  },
];

const INTERVAL_MS = 5400;

export default function HeroIntro() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const tickRef = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    tickRef.current = window.setTimeout(
      () => setActive((i) => (i + 1) % SLIDES.length),
      INTERVAL_MS,
    );
    return () => {
      if (tickRef.current) window.clearTimeout(tickRef.current);
    };
  }, [active, paused]);

  return (
    <section
      aria-label="Introduction"
      className="relative overflow-hidden border-b border-hairline"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* mysterious backdrop: rising vertical sheen + corner ticks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 60% at 30% 100%, rgba(200,51,75,0.08), transparent 70%)",
        }}
      />

      <div className="container-page relative pb-24 pt-20 sm:pb-28 sm:pt-28">
        {/* Top tape: status + counter */}
        <div className="flex items-center gap-4 font-mono text-[11px] uppercase text-ink-2" style={{ letterSpacing: "0.22em" }}>
          <span className="relative inline-flex h-2 w-2 items-center justify-center">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          <span className="text-ink">Venode · research preview</span>
          <span className="hidden h-px flex-1 bg-hairline sm:block" />
          <span className="hidden sm:inline">
            {String(active + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Slide stage */}
        <div className="relative mt-14 min-h-[20rem] sm:min-h-[24rem]">
          {SLIDES.map((s, i) => (
            <article
              key={i}
              className="slide absolute inset-0"
              data-active={i === active}
              aria-hidden={i !== active}
            >
              <span className="eyebrow">{s.eyebrow}</span>
              <h1 className="display mt-7 max-w-4xl text-[clamp(2.75rem,7.5vw,6.25rem)] leading-[0.98]">
                {s.headline}
              </h1>
              <p className="mt-8 max-w-xl text-[18px] leading-[1.55] text-ink-2">
                {s.body}
              </p>
              {s.cta && (
                <div className="mt-10">
                  <a href={s.cta.href} className="btn-primary">
                    {s.cta.label} <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Dots + progress */}
        <div className="mt-12 flex items-center gap-3">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              onClick={() => setActive(i)}
              className="group relative h-[3px] w-12 overflow-hidden bg-hairline transition hover:bg-hair2"
            >
              <span
                className="absolute inset-y-0 left-0 bg-ink"
                style={{
                  width: i < active ? "100%" : i === active ? (paused ? "100%" : "0%") : "0%",
                  transition:
                    i === active && !paused
                      ? `width ${INTERVAL_MS}ms linear`
                      : "width 250ms ease",
                }}
              />
            </button>
          ))}
          <span className="ml-3 hidden font-mono text-[11px] uppercase text-ink-3 sm:inline" style={{ letterSpacing: "0.18em" }}>
            {paused ? "Paused" : "Auto"}
          </span>

          <div className="ml-auto flex items-center gap-4 font-mono text-[11px] uppercase text-ink-2" style={{ letterSpacing: "0.18em" }}>
            <Link href="/hugo" className="transition hover:text-ink">
              See Hugo →
            </Link>
            <Link href="/research" className="transition hover:text-ink">
              Read research →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
