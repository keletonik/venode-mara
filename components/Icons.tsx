/**
 * Brand marks and minimal icon set.
 *
 * THE MARA MARK — a constellation glyph.
 *   Three filled nodes arranged as an irregular triangle, connected by
 *   thin strokes, with one node painted in the accent oxblood. The mark
 *   reads as triangulation, pattern recognition, an anomaly noticed.
 *   It scales — same construction used at 16px in the favicon and at
 *   hundreds of pixels in the hero, where the lines draw themselves in.
 */

import { type CSSProperties } from "react";

/* ── Small glyph used inline with the wordmark, in the favicon, etc. ── */

export function MaraGlyph({
  className = "h-4 w-4",
  accent = "#C8334B",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <line
        x1="6.5"
        y1="17"
        x2="12"
        y2="5.5"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <line
        x1="12"
        y1="5.5"
        x2="18"
        y2="16"
        stroke="currentColor"
        strokeOpacity="0.45"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <line
        x1="6.5"
        y1="17"
        x2="18"
        y2="16"
        stroke="currentColor"
        strokeOpacity="0.30"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="12" cy="5.5" r="1.7" fill="currentColor" />
      <circle cx="6.5" cy="17" r="1.7" fill="currentColor" />
      <circle cx="18" cy="16" r="2.1" fill={accent} />
    </svg>
  );
}

/* ── Wordmark: glyph + "mara" + accented final "a" + blinking cursor ── */

export function MaraWordmark({
  className = "text-[26px] leading-none",
  showGlyph = true,
}: {
  className?: string;
  showGlyph?: boolean;
}) {
  return (
    <span
      className={`wordmark inline-flex items-center gap-2.5 ${className}`}
      aria-label="mara home"
    >
      {showGlyph && <MaraGlyph className="h-[0.9em] w-[0.9em] text-ink" />}
      <span className="inline-flex items-baseline">
        mar<span className="a">a</span>
        <span className="cursor" aria-hidden="true" />
      </span>
    </span>
  );
}

/* ── Hero constellation: a larger, animated version of the same idea.
   Nine nodes, eight strokes. One accent node pulses. Strokes draw in
   from 0 → full over a staggered cycle. Drawn at 200×200 viewBox,
   scales to whatever the container gives it. ── */

type Node = { x: number; y: number; accent?: boolean; size?: number };
type Edge = [number, number, number]; // (a-index, b-index, length-estimate-for-stroke-dash)

const NODES: Node[] = [
  { x: 38, y: 36 },
  { x: 110, y: 22 },
  { x: 172, y: 58 },
  { x: 86, y: 82, accent: true, size: 4.2 }, // the accent / "anomaly"
  { x: 28, y: 118 },
  { x: 154, y: 112 },
  { x: 184, y: 168 },
  { x: 72, y: 162 },
  { x: 128, y: 178 },
];

const EDGES: Edge[] = [
  [0, 1, 80], // 38,36 → 110,22
  [1, 2, 75], // 110,22 → 172,58
  [1, 3, 65], // 110,22 → 86,82
  [3, 4, 70], // 86,82 → 28,118
  [3, 5, 75], // 86,82 → 154,112
  [4, 7, 60], // 28,118 → 72,162
  [5, 6, 65], // 154,112 → 184,168
  [5, 8, 70], // 154,112 → 128,178
  [7, 8, 60], // 72,162 → 128,178
];

export function MaraConstellation({
  className = "h-full w-full",
  accent = "#C8334B",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      {/* Edges — line-draw animation via stroke-dashoffset */}
      <g>
        {EDGES.map(([a, b, len], i) => {
          const na = NODES[a];
          const nb = NODES[b];
          const style: CSSProperties = {
            strokeDasharray: len,
            strokeDashoffset: len,
            animation: `cnst-draw 1400ms cubic-bezier(0.16,1,0.3,1) forwards`,
            animationDelay: `${600 + i * 130}ms`,
            opacity: 0.5,
          };
          return (
            <line
              key={i}
              x1={na.x}
              y1={na.y}
              x2={nb.x}
              y2={nb.y}
              stroke="#F4F1EA"
              strokeOpacity="0.55"
              strokeWidth="0.8"
              strokeLinecap="round"
              style={style}
            />
          );
        })}
      </g>

      {/* Nodes — fade-in with stagger */}
      <g>
        {NODES.map((n, i) => {
          const isAccent = n.accent;
          const r = n.size ?? 2.6;
          const fill = isAccent ? accent : "#F4F1EA";
          const style: CSSProperties = {
            opacity: 0,
            animation: `cnst-pop 700ms cubic-bezier(0.16,1,0.3,1) forwards`,
            animationDelay: `${120 + i * 90}ms`,
            transformBox: "fill-box",
            transformOrigin: "center",
          };
          return (
            <g key={i} style={style}>
              {isAccent && (
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={r + 2}
                  fill={accent}
                  opacity="0.18"
                  style={{
                    animation: "cnst-pulse 2.6s ease-out infinite",
                    transformBox: "fill-box",
                    transformOrigin: "center",
                  }}
                />
              )}
              <circle cx={n.x} cy={n.y} r={r} fill={fill} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ── Parent venode mark (still typographic, unchanged) ── */

export function VenodeMark({
  className = "text-[16px] leading-none",
}: {
  className?: string;
}) {
  return (
    <span className={`venode-mark ${className}`} aria-label="venode">
      ven<span className="o">o</span>de
    </span>
  );
}

/* ── Arrows ── */

export function ArrowRight({
  className = "h-3 w-3",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowDown({
  className = "h-3 w-3",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 3v10M4 9l4 4 4-4" />
    </svg>
  );
}
