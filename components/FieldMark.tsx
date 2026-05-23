/**
 * FieldMark — a generative point-field that serves as the one hero
 * artifact for the page. Deterministically positioned (so server- and
 * client-rendered DOM match exactly), softly fading in, with one accent
 * "anomaly" point pulsing in oxblood and a slow horizontal sweep that
 * implies an unhurried scan.
 *
 * The whole thing is SVG and pure CSS. No canvas, no extra deps.
 */

const W = 800;
const H = 500;
const COUNT = 240;

/* Bright nodes form an asymmetric constellation. Picked by hand so
 * the figure has a recognisable shape across viewports. */
const BRIGHT_INDICES = new Set([8, 27, 53, 79, 102, 128, 156, 188, 214]);
const ACCENT_INDEX = 102;

type Dot = {
  i: number;
  x: number;
  y: number;
  r: number;
  o: number;
  delayMs: number;
  bright: boolean;
};

function generate(): Dot[] {
  const dots: Dot[] = [];
  for (let i = 0; i < COUNT; i++) {
    // Deterministic quasi-random distribution
    const sx = (i * 137 + 19) % 1000;
    const sy = (i * 211 + 73) % 1000;
    const s = (i * 271 + 13) % 100;
    const x = (sx / 1000) * W;
    const y = (sy / 1000) * H;
    const bright = BRIGHT_INDICES.has(i);
    const o = bright ? 0.55 + (s / 100) * 0.4 : 0.06 + (s / 100) * 0.16;
    const r = bright ? 1.4 + (s / 100) * 0.9 : 0.6 + (s / 100) * 0.4;
    const delayMs = (s * 12 + (i % 7) * 80) % 1600;
    dots.push({ i, x, y, r, o, delayMs, bright });
  }
  return dots;
}

const DOTS = generate();

/* Edges that connect a small subset of bright dots — drawn at very
 * low opacity so the shape just barely emerges. */
const EDGES: [number, number][] = [
  [8, 27],
  [27, 53],
  [53, 79],
  [79, 102],
  [102, 128],
  [128, 156],
  [128, 188],
  [156, 214],
];

export default function FieldMark({
  className = "h-full w-full",
}: {
  className?: string;
}) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 h-full w-full"
      >
        {/* Edges — very faint, draw slightly after the dots */}
        <g>
          {EDGES.map(([a, b], ei) => {
            const da = DOTS[a];
            const db = DOTS[b];
            return (
              <line
                key={ei}
                x1={da.x}
                y1={da.y}
                x2={db.x}
                y2={db.y}
                stroke="#F2EFE7"
                strokeOpacity="0.18"
                strokeWidth="0.6"
                strokeLinecap="round"
                style={{
                  opacity: 0,
                  animation: "fade-up 1400ms var(--ease) forwards",
                  animationDelay: `${1100 + ei * 80}ms`,
                }}
              />
            );
          })}
        </g>

        {/* Dots */}
        <g>
          {DOTS.map((d) => {
            if (d.i === ACCENT_INDEX) return null;
            return (
              <circle
                key={d.i}
                cx={d.x}
                cy={d.y}
                r={d.r}
                fill="#F2EFE7"
                className="field-dot"
                style={
                  {
                    ["--final-opacity"]: d.o,
                    animationDelay: `${d.delayMs}ms`,
                  } as React.CSSProperties
                }
              />
            );
          })}

          {/* Accent anomaly: solid dot + pulsing halo */}
          <circle
            cx={DOTS[ACCENT_INDEX].x}
            cy={DOTS[ACCENT_INDEX].y}
            r="3.4"
            fill="#B33347"
            className="field-dot"
            style={
              {
                ["--final-opacity"]: 1,
                animationDelay: "900ms",
              } as React.CSSProperties
            }
          />
          <circle
            cx={DOTS[ACCENT_INDEX].x}
            cy={DOTS[ACCENT_INDEX].y}
            r="3.4"
            fill="none"
            stroke="#B33347"
            strokeOpacity="0.55"
            strokeWidth="0.6"
            style={{
              animation: "anomaly-pulse 2.6s ease-out infinite",
              animationDelay: "1600ms",
              transformBox: "fill-box",
              transformOrigin: "center",
            }}
          />
        </g>
      </svg>

      {/* Slow vertical sweep highlight — adds a sense of attention
          scanning across the field without being aggressive. */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[20%] field-sweep"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(242,239,231,0.04) 40%, rgba(179,51,71,0.06) 50%, rgba(242,239,231,0.04) 60%, transparent 100%)",
        }}
      />
    </div>
  );
}
