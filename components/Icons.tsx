import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  shield: <path d="M12 3l7 3v6c0 4.5-3 7.9-7 9-4-1.1-7-4.5-7-9V6z" />,
  key: (
    <>
      <circle cx="9" cy="15" r="4" />
      <path d="M11.9 12.1 19 5M16 5h4v4" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 18a8 8 0 1 1 16 0" />
      <path d="M12 14l4-3" />
    </>
  ),
  hash: <path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16" />,
  link: (
    <>
      <path d="M10.5 13.5a4 4 0 0 0 5.7 0l2.3-2.3a4 4 0 0 0-5.7-5.7l-1.2 1.2" />
      <path d="M13.5 10.5a4 4 0 0 0-5.7 0l-2.3 2.3a4 4 0 0 0 5.7 5.7l1.2-1.2" />
    </>
  ),
  fingerprint: (
    <>
      <path d="M12 11a3 3 0 0 1 3 3v2" />
      <path d="M12 11a3 3 0 0 0-3 3v3" />
      <path d="M12 7a7 7 0 0 1 7 7v1" />
      <path d="M12 7a7 7 0 0 0-7 7v2" />
    </>
  ),
  check: <path d="M5 12.5 10 17l9-10" />,
  x: <path d="M6 6l12 12M18 6 6 18" />,
  alert: (
    <>
      <path d="M12 4 2 20h20z" />
      <path d="M12 10v4M12 17v.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  copy: (
    <>
      <rect x="9" y="9" width="11" height="11" rx="1" />
      <path d="M5 15V5a2 2 0 0 1 2-2h8" />
    </>
  ),
  bolt: <path d="M13 3 4 14h6l-1 7 9-11h-6z" />,
  lock: (
    <>
      <rect x="4" y="10" width="16" height="11" rx="1" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  book: (
    <>
      <path d="M5 4h13a1 1 0 0 1 1 1v15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M19 16H6a2 2 0 0 0-2 2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  corner: <path d="M4 4h6M4 4v6M20 20h-6M20 20v-6" />,
};

export function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.shield}
    </svg>
  );
}

/**
 * Wordmark: small angular shield in lime + monospace uppercase text.
 * Used in the header and footer.
 */
export function Logo({
  className = "h-7 w-7",
}: {
  className?: string;
}) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 3l11 4v8c0 7-4.6 12.3-11 14C9.6 28.3 5 23 5 16V7z"
        fill="none"
        stroke="#bef264"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M10.8 16.3l3.4 3.4 7.1-7.8"
        fill="none"
        stroke="#bef264"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
