"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "./Icons";
import FieldMark from "./FieldMark";

/**
 * Hero — calm announcement. Two columns: editorial copy on the left,
 * the FieldMark artifact on the right. Asymmetric (5 / 7), generous
 * breathing room, no template chrome.
 */

const TAGLINES = [
  "A language model for cyber defense.",
  "Built for the people defending things.",
  "Calibrated, restrained, refusing the offensive ask.",
];
const TAGLINE_INTERVAL = 5200;

export default function Hero() {
  const [tag, setTag] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setTag((t) => (t + 1) % TAGLINES.length),
      TAGLINE_INTERVAL,
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      aria-label="mara — introduction"
      className="relative isolate overflow-hidden"
    >
      <div className="container-page relative grid min-h-[88svh] items-center gap-12 py-24 sm:py-28 md:grid-cols-12 md:gap-16">
        {/* ── LEFT: editorial copy ────────────────────────────────── */}
        <div className="md:col-span-5">
          <p
            className="font-mono text-[11px] uppercase text-ink-3 fade-up"
            style={{ letterSpacing: "0.18em", animationDelay: "100ms" }}
          >
            mara · v0.1 · 2026
          </p>

          <h1
            className="display mt-7 text-[clamp(3rem,7vw,5.5rem)] leading-[1.02] fade-up"
            style={{ animationDelay: "240ms" }}
          >
            Introducing Mara.
          </h1>

          <div
            className="relative mt-7 h-[44px] sm:h-[52px] fade-up"
            style={{ animationDelay: "480ms" }}
          >
            {TAGLINES.map((line, i) => (
              <p
                key={line}
                aria-hidden={i !== tag}
                className="absolute inset-x-0 top-0 font-display text-[clamp(1.25rem,2.2vw,1.75rem)] leading-snug text-ink-2 transition-all duration-700"
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
            className="mt-10 max-w-md text-[17px] leading-[1.6] text-ink-2 fade-up"
            style={{ animationDelay: "720ms" }}
          >
            Mara is venode&apos;s first public model. Trained on threat
            reports, malware analyses, incident write-ups and adversary
            playbooks — for the people defending things, not the ones
            attacking them.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 fade-up"
            style={{ animationDelay: "960ms" }}
          >
            <a href={siteConfig.appUrl} className="btn-primary">
              Open Mara <ArrowRight className="h-3 w-3" />
            </a>
            <Link href="#why" className="arrow-link">
              Read the argument <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT: the artifact ─────────────────────────────────── */}
        <div className="md:col-span-7">
          <div
            className="relative aspect-[16/11] w-full overflow-hidden bg-bg-2 fade-up"
            style={{ animationDelay: "400ms" }}
          >
            <FieldMark />
            {/* Caption / metadata baseline — feels editorial, like an
                image with its credit line beneath it. */}
            <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between border-t border-hairline bg-bg/60 px-5 py-3 backdrop-blur">
              <span
                className="font-mono text-[10.5px] uppercase text-ink-3"
                style={{ letterSpacing: "0.18em" }}
              >
                field · 240 nodes · anomaly observed
              </span>
              <span
                className="font-mono text-[10.5px] uppercase text-ink-3"
                style={{ letterSpacing: "0.18em" }}
              >
                fig. 01
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
