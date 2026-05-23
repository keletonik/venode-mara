"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { MaraWordmark, ArrowRight } from "./Icons";

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
      className={`sticky top-0 z-40 bg-bg/85 backdrop-blur transition-colors ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center">
        <Link
          href="/"
          aria-label="mara home"
          className="fade-up"
          style={{ animationDelay: "100ms" }}
        >
          <MaraWordmark showGlyph={false} className="text-[20px] sm:text-[22px]" />
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
            Open Mara <ArrowRight className="h-3 w-3" />
          </a>
        </nav>
      </div>
    </header>
  );
}
