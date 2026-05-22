import Link from "next/link";
import { siteConfig } from "@/site.config";
import { tools } from "@/lib/tools";
import { guides } from "@/lib/guides";
import { Logo } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-ink-700 bg-ink-950">
      <div className="container-wide grid gap-12 py-14 md:grid-cols-12">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2.5">
            <Logo className="h-7 w-7" />
            <span className="font-mono text-sm font-medium uppercase tracking-widewide text-cream">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-xs font-display text-xl leading-snug text-cream/90">
            {siteConfig.tagline}
          </p>
          <p className="mt-3 text-sm text-ash">
            Every tool runs in your browser. We never see or store what you
            type.
          </p>
        </div>

        <FooterCol num="01" title="Tools">
          {tools.map((t) => (
            <FooterLink key={t.slug} href={`/tools/${t.slug}`}>
              {t.name}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol num="02" title="Guides">
          {guides.map((g) => (
            <FooterLink key={g.slug} href={`/guides/${g.slug}`}>
              {g.title}
            </FooterLink>
          ))}
        </FooterCol>

        <FooterCol num="03" title="Site">
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/privacy">Privacy</FooterLink>
          <FooterLink href="/disclosure">Affiliate disclosure</FooterLink>
        </FooterCol>
      </div>

      <div className="border-t border-ink-700">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-ash sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono uppercase tracking-widewide">
            © {year} {siteConfig.name} — Educational. No warranty.
          </p>
          <p>
            Some links are affiliate links;{" "}
            <Link href="/disclosure" className="text-cream hover:text-accent">
              full disclosure →
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="md:col-span-3">
      <div className="flex items-baseline gap-2">
        <span className="font-mono text-xs text-ash/60">// {num}</span>
        <h3 className="font-mono text-xs uppercase tracking-widewide text-cream">
          {title}
        </h3>
      </div>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-ash transition hover:text-accent"
      >
        {children}
      </Link>
    </li>
  );
}
