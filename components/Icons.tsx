/**
 * Brand marks and minimal icon set.
 *
 *  - <MaraWordmark />  : the word "mara" set in Bricolage Grotesque
 *                        700, single cream tone, tight tracking. No
 *                        coloured letter, no cursor underscore.
 *                        Matches the SVG assets in /public/logo/.
 *  - <MaraGlyph />     : the constellation symbol mark — three nodes,
 *                        one accent, faint connecting strokes. Used
 *                        in iconic contexts only (favicon, app icon).
 *  - <VenodeMark />    : parent lab wordmark.
 *  - <ArrowRight />    : the one navigation glyph used everywhere.
 */

export function MaraWordmark({
  className = "text-[28px] leading-none",
}: {
  className?: string;
}) {
  return (
    <span className={`wordmark ${className}`} aria-label="mara">
      mara
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
