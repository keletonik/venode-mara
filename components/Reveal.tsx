"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * IntersectionObserver wrapper. Adds `.in` once the element enters the
 * viewport — the .reveal class transitions opacity + translateY.
 *
 * Always renders a <div>. If you need a different semantic tag (li,
 * section, etc.), nest the Reveal inside it.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.18,
  once = true,
  style,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  once?: boolean;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            el.classList.add("in");
            if (once) io.unobserve(el);
          } else if (!once) {
            el.classList.remove("in");
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  const composedStyle: CSSProperties = {
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
    ...style,
  };

  return (
    <div ref={ref} className={`reveal ${className}`} style={composedStyle}>
      {children}
    </div>
  );
}
