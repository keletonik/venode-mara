"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "./Icons";

/**
 * Hero — full-bleed editorial composition. Typography on the left;
 * the hero atmosphere is a sparse constellation of nodes scattered
 * across the whole section (no box, no caption, no panel chrome).
 * A radial accent glow follows the cursor at very low intensity.
 */

const TAGLINES = [
  "A language model for cyber defense.",
  "Built for the people defending things.",
  "Calibrated, restrained, refusing the offensive ask.",
];
const TAGLINE_INTERVAL = 5200;

/* Node positions are expressed as % of the section box, so they
   reflow with the viewport. The accent node is the only oxblood
   element in the composition. */
type Node = { left: string; top: string; size: number; accent?: boolean; delay: number };

const NODES: Node[] = [
  { left: "6%",  top: "22%", size: 5, delay: 200 },
  { left: "12%", top: "78%", size: 4, delay: 1200 },
  { left: "42%", top: "9%",  size: 3, delay: 500 },
  { left: "70%", top: "16%", size: 5, delay: 750 },
  { left: "88%", top: "34%", size: 9, accent: true, delay: 950 },
  { left: "93%", top: "62%", size: 4, delay: 1400 },
  { left: "78%", top: "86%", size: 5, delay: 1650 },
  { left: "55%", top: "92%", size: 3, delay: 1850 },
];

/* Index pairs that get a faint connecting line drawn between them.
   Kept sparse — three lines, not a web. */
const THREADS: [number, number][] = [
  [4, 3],
  [4, 5],
  [4, 6],
];

export default function Hero() {
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
      className="relative isolate overflow-hidden"
      style={
        {
          ["--mx" as string]: "85%",
          ["--my" as string]: "35%",
        } as React.CSSProperties
      }
    >
      {/* Cursor-following accent glow — very subtle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-[background] duration-500"
        style={{
          background:
            "radial-gradient(35% 45% at var(--mx) var(--my), rgba(179,51,71,0.10), transparent 70%)",
        }}
      />

      {/* Connecting threads — drawn at non-scaling stroke so they
          remain hairline regardless of viewport aspect ratio. */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {THREADS.map(([a, b], i) => {
          const na = NODES[a];
          const nb = NODES[b];
          return (
            <line
              key={i}
              x1={parseFloat(na.left)}
              y1={parseFloat(na.top)}
              x2={parseFloat(nb.left)}
              y2={parseFloat(nb.top)}
              stroke="#F2EFE7"
              strokeOpacity="0.12"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              style={{
                opacity: 0,
                animation: "fade-up 1400ms var(--ease) forwards",
                animationDelay: `${1300 + i * 150}ms`,
              }}
            />
          );
        })}
      </svg>

      {/* Floating nodes — absolute, percentage-positioned, no frame */}
      {NODES.map((n, i) => (
        <span
          key={i}
          aria-hidden
          className="pointer-events-none absolute rounded-full fade-up"
          style={{
            left: n.left,
            top: n.top,
            width: `${n.size}px`,
            height: `${n.size}px`,
            background: n.accent ? "var(--accent)" : "var(--ink)",
            opacity: 0,
            animationDelay: `${n.delay}ms`,
            transform: "translate(-50%, -50%)",
            boxShadow: n.accent
              ? "0 0 0 0 rgba(179,51,71,0.55)"
              : undefined,
          }}
        />
      ))}

      {/* Accent halo pulse — placed at the same coords as accent node */}
      <span
        aria-hidden
        className="pointer-events-none absolute rounded-full"
        style={{
          left: NODES[4].left,
          top: NODES[4].top,
          width: `${NODES[4].size}px`,
          height: `${NODES[4].size}px`,
          background: "var(--accent)",
          transform: "translate(-50%, -50%)",
          animation: "anomaly-pulse 2.8s ease-out infinite",
          animationDelay: "2000ms",
          opacity: 0,
        }}
      />

      {/* ── Content ────────────────────────────────────────────────── */}
      <div className="container-page relative grid min-h-[86svh] items-center py-24 sm:py-28">
        <div className="max-w-3xl">
          <p
            className="font-mono text-[11px] uppercase text-ink-3 fade-up"
            style={{ letterSpacing: "0.18em", animationDelay: "100ms" }}
          >
            mara · research preview
          </p>

          <h1
            className="display mt-7 text-[clamp(3rem,8vw,7rem)] leading-[0.98] fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Introducing Mara.
          </h1>

          <div
            className="relative mt-7 h-[44px] sm:h-[56px] fade-up"
            style={{ animationDelay: "480ms" }}
          >
            {TAGLINES.map((line, i) => (
              <p
                key={line}
                aria-hidden={i !== tag}
                className="absolute inset-x-0 top-0 font-display text-[clamp(1.25rem,2.4vw,1.875rem)] leading-snug text-ink-2 transition-all duration-700"
                style={{
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  opacity: i === tag ? 1 : 0,
                  transform: i === tag ? "translateY(0)" : "translateY(8px)",
                }}
              >
                {line}
              </p>
            ))}
          </div>

          <p
            className="mt-10 max-w-xl text-[17px] leading-[1.65] text-ink-2 fade-up"
            style={{ animationDelay: "720ms" }}
          >
            Mara is venode&apos;s first public model, built for cyber
            defense — for the people defending things, not the ones
            attacking them. It is a preview; the work is in progress in
            the open.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 fade-up"
            style={{ animationDelay: "960ms" }}
          >
            <a href={siteConfig.appUrl} className="btn-primary">
              Request access <ArrowRight className="h-3 w-3" />
            </a>
            <Link href="#why" className="arrow-link">
              Read the argument <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
