"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { MaraWordmark, ArrowRight } from "./Icons";

/**
 * Sticky glassmorphism nav. Wordmark left, primary nav centre/right,
 * one CTA at the end. Border-bottom appears only after a few pixels
 * of scroll so the hero stays clean at the top.
 */

const NAV = [
  { href: "/mara", label: "Mara" },
  { href: "/research", label: "Research" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "Lab" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 glass-nav transition-colors ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center gap-6">
        <Link
          href="/"
          aria-label="mara"
          className="fade-up"
          style={{ animationDelay: "100ms" }}
          onClick={() => setOpen(false)}
        >
          <MaraWordmark className="h-6 sm:h-7" />
        </Link>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-7 md:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[12px] font-medium uppercase text-ink-2 transition hover:text-ink"
              style={{ letterSpacing: "0.10em" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/join"
          className="hidden btn-primary fade-up md:inline-flex"
          style={{ animationDelay: "260ms" }}
        >
          Join preview <ArrowRight className="h-3 w-3" />
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center border border-hair2 text-ink md:hidden"
        >
          <div className="flex flex-col gap-1">
            <span className="block h-[2px] w-[16px] bg-current" />
            <span className="block h-[2px] w-[16px] bg-current" />
            <span className="block h-[2px] w-[16px] bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-bg md:hidden">
          <div className="container-page flex flex-col py-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-hairline py-4 font-display text-[24px] font-semibold leading-none tracking-tight text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/join"
              className="btn-primary mt-6 self-start"
              onClick={() => setOpen(false)}
            >
              Join preview <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
