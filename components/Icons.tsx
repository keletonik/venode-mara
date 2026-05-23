/**
 * Brand marks and a tiny icon set.
 *
 *  - <VenodeWordmark/>  : "venode_" with the o in accent + blinking cursor.
 *  - <VoMark/>          : "vo." monogram used in the footer slab.
 *  - <HugoWordmark/>    : geometric stroke wordmark, the o in deep oxblood.
 *  - <ArrowRight/>      : the only navigation glyph the site uses.
 */

export function VenodeWordmark({
  className = "text-[30px] leading-none",
}: {
  className?: string;
}) {
  return (
    <span className={`wordmark ${className}`} aria-label="venode home">
      ven<span className="o">o</span>de
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}

export function VoMark({
  className = "text-[64px] leading-none",
}: {
  className?: string;
}) {
  return (
    <span className={`vo-mark ${className}`} aria-label="venode">
      v<span className="o">o</span>
      <span className="dot" aria-hidden="true">
        .
      </span>
    </span>
  );
}

/**
 * Geometric Hugo wordmark — direct port of the marque on venode.ai. The
 * 'o' is painted in deep oxblood, matching the published brand colour.
 */
export function HugoWordmark({
  className = "h-16 w-auto text-ink",
  accent = "#5C1A24",
}: {
  className?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 420 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Hugo"
      className={className}
    >
      <g strokeWidth="13" strokeLinecap="butt">
        <path
          stroke="currentColor"
          d="M6.5 10V110M71.5 10V110M6.5 60H71.5 M106.5 10V72A31.5 31.5 0 0 0 169.5 72V10 M262.88 19.12A43.5 43.5 0 1 0 291.5 60H252"
        />
        <path
          stroke={accent}
          d="M408.41 39.58A43.5 43.5 0 1 1 390.42 21.59"
        />
      </g>
    </svg>
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
