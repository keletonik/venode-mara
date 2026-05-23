"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight, ArrowDown } from "./Icons";

/**
 * The Mara entrance.
 *
 * Each letter rises in with a staggered blur-to-clear. After the wordmark
 * settles the cursor blinks, the tagline cycles through three positioning
 * lines, the CTAs surface, and the marquee starts moving below.
 *
 * Everything below the hero (capabilities, tiers, safety) reveals on
 * scroll — see <Reveal>.
 */

const LETTERS = ["m", "a", "r", "a"];
const ACCENT_INDEXES = new Set([1, 3]);

const TAGLINES = [
  "Cybersecurity intelligence.",
  "Built for defenders.",
  "Calibrated. Restrained. Useful.",
];

const TAGLINE_INTERVAL = 4200;

export default function Hero() {
  // Track mouse position for parallax glow on the hero only.
  const ref = useRef<HTMLDivElement>(null);
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setTag((t) => (t + 1) % TAGLINES.length),
      TAGLINE_INTERVAL,
    );
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      aria-label="mara — introduction"
      className="relative isolate overflow-hidden border-b border-hairline"
      style={
        {
          // CSS custom props consumed by the parallax glow below.
          ["--mx" as string]: "50%",
          ["--my" as string]: "30%",
        } as React.CSSProperties
      }
    >
      {/* Parallax glow follows the cursor on desktop. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(40% 50% at var(--mx) var(--my), rgba(200,51,75,0.10), transparent 70%)",
        }}
      />

      {/* Top-left and top-right crosshair-ish ticks */}
      <CornerTicks />

      <div className="container-page relative flex min-h-[88svh] flex-col justify-between pb-12 pt-24 sm:pt-32">
        {/* Eyebrow + status */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 fade-up" style={{ animationDelay: "120ms" }}>
          <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-ink-2" style={{ letterSpacing: "0.22em" }}>
            <span className="pulse-dot" />
            Venode · cyber language model · 01
          </span>
          <span className="hidden h-px flex-1 bg-hairline sm:block" />
          <span
            className="hidden font-mono text-[11px] uppercase text-ink-3 sm:inline"
            style={{ letterSpacing: "0.22em" }}
          >
            research preview · v0.1
          </span>
        </div>

        {/* The wordmark — letter-by-letter reveal */}
        <div className="my-auto py-12">
          <h1
            aria-label="mara"
            className="display flex select-none items-baseline leading-[0.88]"
            style={{ fontSize: "clamp(6rem, 22vw, 22rem)" }}
          >
            {LETTERS.map((ch, i) => (
              <span
                key={i}
                className="letter"
                style={{
                  animationDelay: `${280 + i * 110}ms`,
                  color: ACCENT_INDEXES.has(i) ? "var(--accent)" : undefined,
                }}
              >
                {ch}
              </span>
            ))}
            <span
              className="letter"
              style={{
                animationDelay: `${280 + LETTERS.length * 110}ms`,
              }}
            >
              <span
                className="ml-3 inline-block align-baseline"
                style={{
                  width: "0.42em",
                  height: "0.08em",
                  background: "var(--accent)",
                  animation: "cursor-blink 1.05s steps(2) infinite",
                  animationDelay: "1300ms",
                  marginBottom: "0.18em",
                }}
                aria-hidden="true"
              />
            </span>
          </h1>

          {/* Cycling tagline below the mark */}
          <div
            className="relative mt-10 h-[44px] sm:h-[56px] fade-up"
            style={{ animationDelay: "950ms" }}
          >
            {TAGLINES.map((t, i) => (
              <p
                key={t}
                aria-hidden={i !== tag}
                className="absolute inset-x-0 top-0 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold tracking-tight text-ink transition-all duration-700"
                style={{
                  letterSpacing: "-0.025em",
                  opacity: i === tag ? 1 : 0,
                  transform: i === tag ? "translateY(0)" : "translateY(10px)",
                }}
              >
                {t}
              </p>
            ))}
          </div>

          <p
            className="mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-2 fade-up"
            style={{ animationDelay: "1200ms" }}
          >
            A language model trained on threat reports, malware analyses,
            incident write-ups and adversary playbooks. Built to triage at
            speed, reason carefully under uncertainty, and refuse the
            offensive ask.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 fade-up"
            style={{ animationDelay: "1500ms" }}
          >
            <a href={siteConfig.appUrl} className="btn-primary">
              Open Mara <ArrowRight className="h-3 w-3" />
            </a>
            <Link href="#demo" className="btn-ghost">
              See it think
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="mt-12 flex items-center gap-3 fade-up"
          style={{ animationDelay: "1900ms" }}
        >
          <span
            className="font-mono text-[10px] uppercase text-ink-3"
            style={{ letterSpacing: "0.22em" }}
          >
            Scroll
          </span>
          <span className="h-px w-12 bg-hairline" />
          <ArrowDown className="h-3 w-3 text-ink-3" />
        </div>
      </div>
    </section>
  );
}

function CornerTicks() {
  return (
    <>
      {/* top-left */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-ink-3 sm:left-8 sm:top-8"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-ink-3 sm:right-8 sm:top-8"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-ink-3 sm:bottom-8 sm:left-8"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-ink-3 sm:bottom-8 sm:right-8"
      />
    </>
  );
}
