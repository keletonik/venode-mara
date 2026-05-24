/**
 * Brand marks and minimal icon set.
 *
 * Mara identity system
 *  - <MaraWordmark /> : the full "Mara" wordmark — a thin-stroke
 *                       geometric M paired with lowercase "ara".
 *                       Source asset: /public/logo/mara-wordmark.png
 *                       (cream on transparent; aspect ratio 836:232).
 *                       Size with Tailwind h-* classes on `className`.
 *                       Width is `auto` from the source aspect ratio.
 *  - <MaraMark />     : the M alone, for favicon-scale / square uses.
 *                       Source asset: /public/logo/mara-mark.png.
 *  - <MaraGlyph />    : the constellation glyph — kept as a secondary
 *                       inline mark for content where the wordmark
 *                       would feel too brand-loud.
 *  - <VenodeMark />   : parent lab wordmark.
 *  - <ArrowRight />   : the one navigation glyph used everywhere.
 */

const WORDMARK = "/logo/mara-wordmark.png";
const MARK = "/logo/mara-mark.png";

/** Native pixel dimensions of /public/logo/mara-wordmark.png. */
const WORDMARK_W = 836;
const WORDMARK_H = 232;

export function MaraWordmark({
  className = "h-7",
  markless = false,
  animated = false,
}: {
  /**
   * Size with Tailwind height utilities (h-6, h-10, h-[clamp(...)]).
   * The image keeps its native aspect ratio; width auto-computes.
   */
  className?: string;
  /** Reserved — present for API parity with previous Bricolage version. */
  markless?: boolean;
  /** Reserved — entry animation handled by parent (.fade-up / .mara-reveal). */
  animated?: boolean;
}) {
  void animated;
  void markless;
  return (
    <img
      src={WORDMARK}
      alt="Mara"
      width={WORDMARK_W}
      height={WORDMARK_H}
      className={`block w-auto select-none ${className}`}
      draggable={false}
    />
  );
}

export function MaraMark({
  className = "h-6 w-6",
}: {
  className?: string;
}) {
  return (
    <img
      src={MARK}
      alt="Mara"
      width={326}
      height={326}
      className={`block select-none ${className}`}
      draggable={false}
    />
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
