import Link from "next/link";
import { siteConfig } from "@/site.config";
import { Mark } from "./Icons";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/hugo", label: "Hugo" },
      { href: "/hugo#pro", label: "Hugo Pro" },
      { href: "/contact", label: "Custom builds" },
    ],
  },
  {
    title: "Research",
    links: [
      { href: "/research", label: "Notes" },
      { href: "/safety", label: "Safety" },
    ],
  },
  {
    title: "Lab",
    links: [
      { href: "/about", label: "About Venode" },
      { href: siteConfig.labUrl, label: "venode.ai ↗", external: true },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      {
        href: `mailto:${siteConfig.contactEmail}`,
        label: siteConfig.contactEmail,
      },
      ...(siteConfig.github
        ? [{ href: siteConfig.github, label: "GitHub ↗", external: true }]
        : []),
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-rule">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-ink-800"
          >
            <Mark className="h-3.5 w-3.5" />
            <span className="text-[15px] tracking-tightest">
              {siteConfig.lab}
              <span className="mx-1.5 text-ink-400">·</span>
              <span className="text-ink-900">{siteConfig.name}</span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-ink-500">
            A cybersecurity intelligence model from Venode Labs. Quiet
            research, working tools.
          </p>
        </div>

        {columns.map((c) => (
          <div key={c.title} className="md:col-span-2">
            <h3 className="label">{c.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  {"external" in l && l.external ? (
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener"
                      className="text-[14px] text-ink-700 hover:text-ink-900"
                    >
                      {l.label}
                    </a>
                  ) : (
                    <Link
                      href={l.href}
                      className="text-[14px] text-ink-700 hover:text-ink-900"
                    >
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-rule">
        <div className="container-wide flex flex-col gap-2 py-6 text-[13px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Venode Labs. {siteConfig.displayName} is a research preview.
          </p>
          <p>
            <Link href="/privacy" className="hover:text-ink-900">
              Privacy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
