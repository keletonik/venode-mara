/**
 * Brand marks and the minimal icon set we use.
 */

export function MaraWordmark({
  className = "text-[28px] leading-none",
}: {
  className?: string;
}) {
  return (
    <span className={`wordmark ${className}`} aria-label="mara home">
      m<span className="a">a</span>r<span className="a">a</span>
      <span className="cursor" aria-hidden="true" />
    </span>
  );
}

export function VenodeMark({
  className = "text-[18px] leading-none",
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
