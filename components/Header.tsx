"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Icon, Logo } from "./Icons";

const nav = [
  { href: "/tools", label: "Tools" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-700 bg-ink-950/90 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-7 w-7" />
          <span className="font-mono text-sm font-medium uppercase tracking-widewide text-cream">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 font-mono text-xs uppercase tracking-widewide text-ash transition hover:text-cream"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-2 h-4 w-px bg-ink-700" aria-hidden="true" />
          <Link
            href="/tools/password-checker"
            className="group inline-flex items-center gap-2 bg-accent px-4 py-2 font-mono text-xs uppercase tracking-widewide text-ink-950 transition hover:bg-accent-soft"
          >
            Check password
            <Icon
              name="arrow"
              className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
            />
          </Link>
        </nav>

        <button
          type="button"
          className="p-2 text-ash hover:text-cream sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "x" : "menu"} className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink-700 sm:hidden">
          <div className="container-wide flex flex-col py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-1 py-3 font-mono text-xs uppercase tracking-widewide text-ash hover:text-cream"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/tools/password-checker"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-accent px-4 py-3 font-mono text-xs uppercase tracking-widewide text-ink-950"
              onClick={() => setOpen(false)}
            >
              Check password
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
