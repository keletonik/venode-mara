"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/site.config";
import { Mark } from "./Icons";

const nav = [
  { href: "/hugo", label: "Hugo" },
  { href: "/research", label: "Research" },
  { href: "/about", label: "Lab" },
  { href: "/safety", label: "Safety" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur">
      <div className="container-wide flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-2 text-ink-800"
          onClick={() => setOpen(false)}
        >
          <Mark className="h-3.5 w-3.5" />
          <span className="text-[15px] tracking-tightest">
            <a
              href={siteConfig.labUrl}
              className="text-ink-800 hover:text-ink-900"
              onClick={(e) => e.stopPropagation()}
            >
              {siteConfig.lab}
            </a>
            <span className="mx-1.5 text-ink-400">·</span>
            <span className="text-ink-900">{siteConfig.name}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[14px] text-ink-500 transition hover:text-ink-900"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={siteConfig.appUrl}
            className="text-[14px] text-ink-900 underline-offset-4 hover:underline"
          >
            Open Hugo →
          </a>
        </nav>

        <button
          type="button"
          className="p-1 text-ink-700 hover:text-ink-900 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-[15px] tracking-tightest">
            {open ? "×" : "menu"}
          </span>
        </button>
      </div>

      {open && (
        <nav className="border-t border-rule sm:hidden">
          <div className="container-wide flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-2 text-[15px] text-ink-700 hover:text-ink-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.appUrl}
              className="mt-2 py-2 text-[15px] text-ink-900"
              onClick={() => setOpen(false)}
            >
              Open Hugo →
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
