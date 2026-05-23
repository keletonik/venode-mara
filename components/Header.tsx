"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { siteConfig } from "@/site.config";
import { VenodeWordmark } from "./Icons";

const nav = [
  { href: "/", label: "Home" },
  { href: "/mara", label: "Mara" },
  { href: "/lab", label: "Lab" },
  { href: "/journal", label: "Journal" },
  { href: "/research", label: "Research" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 bg-bg ${
        scrolled ? "border-b border-hairline" : "border-b border-transparent"
      } transition-colors`}
    >
      <div className="container-page flex h-[76px] items-center gap-6">
        <Link
          href="/"
          className="text-[26px] sm:text-[30px]"
          onClick={() => setOpen(false)}
        >
          <VenodeWordmark className="text-[26px] sm:text-[30px]" />
        </Link>

        <nav
          aria-label="Primary"
          className="ml-auto hidden items-center gap-7 sm:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-[13px] font-medium text-ink-2 transition hover:text-ink"
              style={{ letterSpacing: "0.04em" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={siteConfig.appUrl}
          className="hidden sm:inline-flex btn-primary"
        >
          Sign up
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="ml-auto inline-flex h-11 w-11 items-center justify-center border border-hair2 text-ink sm:hidden"
        >
          <div className="flex flex-col gap-1">
            <span className="block h-[2px] w-[18px] bg-current" />
            <span className="block h-[2px] w-[18px] bg-current" />
            <span className="block h-[2px] w-[18px] bg-current" />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-hairline bg-bg sm:hidden">
          <div className="container-page flex flex-col py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-hairline py-4 font-display text-[26px] font-extrabold leading-none tracking-display text-ink"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.appUrl}
              className="btn-primary mt-6 self-start"
              onClick={() => setOpen(false)}
            >
              Sign up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
