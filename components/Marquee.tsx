"use client";

import { type ReactNode } from "react";

/**
 * Seamless infinite marquee. Doubles the children so the loop is invisible.
 * Pauses on hover via CSS in globals.
 */
export default function Marquee({
  items,
  className = "",
}: {
  items: ReactNode[];
  className?: string;
}) {
  return (
    <div className={`marquee w-full overflow-hidden ${className}`}>
      <div className="marquee-track">
        {[...items, ...items].map((it, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-6 font-mono text-[12px] uppercase text-ink-2"
            style={{ letterSpacing: "0.22em" }}
          >
            {it}
            <span className="inline-block h-1 w-1 rounded-full bg-accent/70" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
