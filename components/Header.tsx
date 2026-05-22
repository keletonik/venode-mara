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
    <header className="sticky top-0 z-50 border-b border-ink-700/70 bg-ink-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-8 w-8" />
          <span className="text-lg text-white">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-ink-800 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/tools/password-checker"
            className="ml-2 rounded-md bg-accent px-3 py-2 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
          >
            Check a password
          </Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-slate-300 hover:bg-ink-800 sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "x" : "hash"} className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-ink-700/70 px-4 pb-4 pt-2 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-md px-3 py-2 text-slate-200 hover:bg-ink-800"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/tools/password-checker"
            className="mt-2 block rounded-md bg-accent px-3 py-2 text-center font-semibold text-ink-950"
            onClick={() => setOpen(false)}
          >
            Check a password
          </Link>
        </nav>
      )}
    </header>
  );
}
