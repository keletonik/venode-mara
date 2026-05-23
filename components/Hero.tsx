"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight, ArrowDown, MaraConstellation } from "./Icons";

/**
 * Hero v2 — split composition.
 *
 * Left:  eyebrow status row · large "mara" with letter-rise · cycling
 *        tagline · paragraph · CTAs · scroll hint.
 * Right: a framed "intelligence panel" containing the constellation
 *        mark drawing itself in, surrounded by telemetry-style
 *        readouts that update on a slow tick.
 * Bg:    radial accent glow tracking the cursor.
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
  const ref = useRef<HTMLDivElement>(null);
  const [tag, setTag] = useState(0);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id1 = window.setInterval(
      () => setTag((t) => (t + 1) % TAGLINES.length),
      TAGLINE_INTERVAL,
    );
    const id2 = window.setInterval(() => setTick((t) => t + 1), 2200);
    return () => {
      window.clearInterval(id1);
      window.clearInterval(id2);
    };
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

  // Faux telemetry that drifts a little on the tick
  const t = telemetry(tick);

  return (
    <section
      ref={ref}
      aria-label="mara — introduction"
      className="relative isolate overflow-hidden border-b border-hairline"
      style={
        {
          ["--mx" as string]: "50%",
          ["--my" as string]: "30%",
        } as React.CSSProperties
      }
    >
      {/* Parallax glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-[background] duration-300"
        style={{
          background:
            "radial-gradient(40% 50% at var(--mx) var(--my), rgba(200,51,75,0.10), transparent 70%)",
        }}
      />

      <CornerTicks />

      <div className="container-page relative grid min-h-[88svh] gap-12 pb-16 pt-24 sm:pt-28 md:grid-cols-12 md:gap-10">
        {/* ── LEFT: status / wordmark / tagline / CTAs ────────────────── */}
        <div className="md:col-span-7 md:self-center">
          <div
            className="flex flex-wrap items-center gap-x-5 gap-y-3 fade-up"
            style={{ animationDelay: "120ms" }}
          >
            <span
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase text-ink-2"
              style={{ letterSpacing: "0.22em" }}
            >
              <span className="pulse-dot" />
              Venode · cyber language model · 01
            </span>
            <span className="hidden h-px flex-1 bg-hairline sm:block" />
            <span
              className="hidden font-mono text-[11px] uppercase text-ink-3 sm:inline"
              style={{ letterSpacing: "0.22em" }}
            >
              v0.1 · research preview
            </span>
          </div>

          <h1
            aria-label="mara"
            className="display mt-10 flex select-none items-baseline leading-[0.88]"
            style={{ fontSize: "clamp(5.5rem, 17vw, 17rem)" }}
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
              style={{ animationDelay: `${280 + LETTERS.length * 110}ms` }}
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

          <div
            className="relative mt-8 h-[40px] sm:h-[52px] fade-up"
            style={{ animationDelay: "950ms" }}
          >
            {TAGLINES.map((tag_, i) => (
              <p
                key={tag_}
                aria-hidden={i !== tag}
                className="absolute inset-x-0 top-0 font-display text-[clamp(1.35rem,2.6vw,2rem)] font-extrabold tracking-tight text-ink transition-all duration-700"
                style={{
                  letterSpacing: "-0.025em",
                  opacity: i === tag ? 1 : 0,
                  transform: i === tag ? "translateY(0)" : "translateY(10px)",
                }}
              >
                {tag_}
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

          <div
            className="mt-14 flex items-center gap-3 fade-up"
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

        {/* ── RIGHT: intelligence panel with constellation + telemetry ─ */}
        <div className="md:col-span-5 md:self-center">
          <div
            className="relative aspect-square w-full max-w-[480px] border border-hairline bg-[#0c0b0e] fade-up"
            style={{
              animationDelay: "600ms",
              boxShadow:
                "inset 0 1px 0 rgba(244,241,234,0.04), 0 30px 80px -40px rgba(200,51,75,0.18)",
            }}
          >
            {/* panel header */}
            <div className="absolute left-0 right-0 top-0 flex items-center justify-between border-b border-hairline px-4 py-2.5">
              <span
                className="font-mono text-[10px] uppercase text-ink-2"
                style={{ letterSpacing: "0.22em" }}
              >
                live · cluster-08 · soc/3
              </span>
              <span className="pulse-dot" />
            </div>

            {/* corner ticks */}
            <span aria-hidden className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-accent" />
            <span aria-hidden className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t border-accent" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-accent" />
            <span aria-hidden className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-accent" />

            {/* constellation */}
            <div className="absolute inset-0 grid place-items-center px-8 pt-10">
              <div className="aspect-square w-full max-w-[300px]">
                <MaraConstellation />
              </div>
            </div>

            {/* telemetry footer */}
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-hairline">
              <Stat label="nodes" value={t.nodes} />
              <Stat label="anomaly" value={t.anomaly} accent />
              <Stat label="σ" value={t.sigma} divider={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  label,
  value,
  accent,
  divider = true,
}: {
  label: string;
  value: string;
  accent?: boolean;
  divider?: boolean;
}) {
  return (
    <div
      className={`px-3 py-3 ${divider ? "border-r border-hairline" : ""}`}
    >
      <p
        className="font-mono text-[9.5px] uppercase text-ink-3"
        style={{ letterSpacing: "0.22em" }}
      >
        {label}
      </p>
      <p
        className={`mt-1 font-mono text-[12px] ${
          accent ? "text-accent" : "text-ink"
        }`}
        style={{ letterSpacing: "0.08em" }}
      >
        {value}
      </p>
    </div>
  );
}

function CornerTicks() {
  return (
    <>
      <span aria-hidden className="pointer-events-none absolute left-4 top-4 h-3 w-3 border-l border-t border-ink-3 sm:left-8 sm:top-8" />
      <span aria-hidden className="pointer-events-none absolute right-4 top-4 h-3 w-3 border-r border-t border-ink-3 sm:right-8 sm:top-8" />
      <span aria-hidden className="pointer-events-none absolute bottom-4 left-4 h-3 w-3 border-b border-l border-ink-3 sm:bottom-8 sm:left-8" />
      <span aria-hidden className="pointer-events-none absolute bottom-4 right-4 h-3 w-3 border-b border-r border-ink-3 sm:bottom-8 sm:right-8" />
    </>
  );
}

/* Slowly drifting fake telemetry — same values on first render across
   server/client, so no hydration mismatch. */
function telemetry(tick: number) {
  const sigma = (2.0 + (tick * 0.07) % 0.9).toFixed(2);
  const anomaly = tick % 4 === 0 ? "isolated" : "tracking";
  return {
    nodes: "09",
    anomaly,
    sigma: `+${sigma}`,
  };
}
