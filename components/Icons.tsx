/**
 * Brand marks and minimal icon set.
 *
 * Mara identity system
 *  - <MaraMark />     : the symbol — a custom geometric "M" glyph with
 *                       an oxblood diamond locked into the V valley.
 *                       Reads as: two peaks (vantage), a valley, an
 *                       anomaly observed.
 *  - <MaraWordmark /> : "mara" in Bricolage Grotesque 700, tight
 *                       tracking. Pairs with the mark in a lockup
 *                       (mark + wordmark) by default; pass
 *                       `markless` to render the wordmark alone.
 *  - <MaraGlyph />    : the constellation glyph — kept as a secondary
 *                       mark for surfaces where the M-glyph is too
 *                       graphic (e.g. inline content).
 *  - <VenodeMark />   : parent lab wordmark.
 *  - <ArrowRight />   : the one navigation glyph used everywhere.
 */

export function MaraMark({
  className = "h-5 w-5",
  accent = "#B33347",
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
      {/* Custom geometric M — two asymmetric peaks meeting at a sharp
          V. Stroke set in currentColor so the mark inherits text
          colour from its container. */}
      <path
        d="M 3 20.5 L 3 5 L 12 14.5 L 21 5 L 21 20.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* The anomaly: a small oxblood diamond hanging below the V
          apex. Single accent moment, single meaning. */}
      <path
        d="M 12 18.4 L 13.7 16.7 L 12 15 L 10.3 16.7 Z"
        fill={accent}
      />
    </svg>
  );
}

export function MaraWordmark({
  className = "text-[28px] leading-none",
  markless = false,
  animated = false,
}: {
  className?: string;
  /** Render the wordmark without the leading <MaraMark /> lockup. */
  markless?: boolean;
  /** Reserved — entry animation handled by parent or .mara-reveal. */
  animated?: boolean;
}) {
  void animated;
  if (markless) {
    return (
      <span className={`wordmark ${className}`} aria-label="mara">
        mara
      </span>
    );
  }
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="mara"
    >
      <MaraMark className="h-[0.9em] w-[0.9em] text-ink" />
      <span className="wordmark leading-none">mara</span>
    </span>
  );
}

export function MaraGlyph({
  className = "h-4 w-4",
  accent = "#B33347",
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
        x1="6.5" y1="17" x2="12" y2="5.5"
        stroke="currentColor" strokeOpacity="0.45"
        strokeWidth="0.9" strokeLinecap="round"
      />
      <line
        x1="12" y1="5.5" x2="18" y2="16"
        stroke="currentColor" strokeOpacity="0.45"
        strokeWidth="0.9" strokeLinecap="round"
      />
      <line
        x1="6.5" y1="17" x2="18" y2="16"
        stroke="currentColor" strokeOpacity="0.30"
        strokeWidth="0.9" strokeLinecap="round"
      />
      <circle cx="12" cy="5.5" r="1.7" fill="currentColor" />
      <circle cx="6.5" cy="17" r="1.7" fill="currentColor" />
      <circle cx="18" cy="16" r="2.1" fill={accent} />
    </svg>
  );
}

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
