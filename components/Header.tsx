"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { MaraWordmark, ArrowRight } from "./Icons";

/**
 * Sticky glassmorphism nav. Wordmark on the left; one primary CTA on
 * the right. Border-bottom appears only after a few pixels of scroll
 * to keep the hero clean at top.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
      <div className="container-page flex h-[68px] items-center">
        <Link
          href="/"
          aria-label="mara"
          className="fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <MaraWordmark className="text-[22px] sm:text-[26px]" />
        </Link>

        <nav className="ml-auto flex items-center gap-6">
          <span
            className="hidden font-mono text-[11px] uppercase text-ink-3 sm:inline"
            style={{ letterSpacing: "0.22em" }}
          >
            a venode product
          </span>
          <a
            href={siteConfig.appUrl}
            className="btn-primary fade-up"
            style={{ animationDelay: "260ms" }}
          >
            Join preview <ArrowRight className="h-3 w-3" />
          </a>
        </nav>
      </div>
    </header>
  );
}
