import Link from "next/link";
import { siteConfig } from "@/site.config";
import { MaraWordmark, VenodeMark } from "./Icons";

const columns = [
  {
    title: "Mara",
    links: [
      { href: "/mara", label: "Product" },
      { href: siteConfig.appUrl, label: "Join preview", external: true },
      { href: "/safety", label: "Safety" },
    ],
  },
  {
    title: "Research",
    links: [{ href: "/research", label: "All notes" }],
  },
  {
    title: "Venode",
    links: [
      { href: "/about", label: "Lab" },
      { href: "/contact", label: "Contact" },
      { href: siteConfig.labUrl, label: "venode.ai", external: true },
    ],
  },
  {
    title: "Legal",
    links: [{ href: "/privacy", label: "Privacy" }],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-hairline">
      <div className="container-page py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Link href="/" aria-label="mara">
              <MaraWordmark className="text-[34px]" />
            </Link>
            <p className="mt-6 max-w-xs text-[14.5px] leading-[1.6] text-ink-2">
              A cyber defence and threat intelligence model by venode.
              Built for the people defending things.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:col-span-8 md:grid-cols-4">
            {columns.map((c) => (
              <div key={c.title}>
                <h3
                  className="font-mono text-[10.5px] uppercase text-ink-3"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {c.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.external ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener"
                          className="text-[14px] text-ink-2 transition hover:text-ink"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-[14px] text-ink-2 transition hover:text-ink"
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
        </div>

        <div className="mt-14 flex flex-wrap items-end justify-between gap-4 border-t border-hairline pt-6">
          <div className="flex items-center gap-3">
            <VenodeMark className="text-[14px]" />
            <span
              className="font-mono text-[11px] uppercase text-ink-3"
              style={{ letterSpacing: "0.18em" }}
            >
              · a research lab
            </span>
          </div>
          <span
            className="font-mono text-[11px] uppercase text-ink-3"
            style={{ letterSpacing: "0.10em" }}
          >
            © {year} venode · all rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
