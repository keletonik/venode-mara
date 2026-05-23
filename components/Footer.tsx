import Link from "next/link";
import { siteConfig } from "@/site.config";
import { VoMark } from "./Icons";
import { notes } from "@/lib/research";

const columns = [
  {
    title: "Products",
    links: [
      { href: "/mara", label: "Mara" },
      { href: siteConfig.appUrl, label: "Mara Cloud" },
      { href: "/mara#pricing", label: "Pricing" },
    ],
  },
  {
    title: "Research",
    links: [
      { href: "/research", label: "Post-training" },
      { href: "/research", label: "Long context" },
      { href: "/research", label: "Editorial alignment" },
      { href: "/research", label: "Inference economics" },
    ],
  },
  {
    title: "Lab",
    links: [
      { href: "/lab", label: "Lab" },
      { href: "/about", label: "About" },
      { href: "/safety", label: "Safety" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: `mailto:${siteConfig.contactEmail}`, label: siteConfig.contactEmail },
      { href: "/contact", label: "Contact" },
      ...(siteConfig.github
        ? [{ href: siteConfig.github, label: "GitHub" }]
        : []),
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const recent = [...notes]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 4);

  return (
    <footer className="mt-32 bg-black text-cream-warm">
      <div className="container-page py-20">
        <div className="grid items-start gap-12 md:grid-cols-[auto_1fr]">
          <Link href="/" aria-label="venode home" className="self-start">
            <VoMark className="text-[64px]" />
          </Link>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {columns.map((c) => (
              <div key={c.title}>
                <h4 className="font-mono text-[11px] font-bold uppercase text-cream-warm/70" style={{ letterSpacing: "0.22em" }}>
                  {c.title}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("http") || l.href.startsWith("mailto:") ? (
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={l.href.startsWith("http") ? "noopener" : undefined}
                          className="font-serif text-[14.5px] text-cream-warm/80 transition hover:text-cream-warm"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="font-serif text-[14.5px] text-cream-warm/80 transition hover:text-cream-warm"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h4 className="font-mono text-[11px] font-bold uppercase text-cream-warm/70" style={{ letterSpacing: "0.22em" }}>
                News
              </h4>
              <ul className="mt-4 space-y-4">
                {recent.map((n) => (
                  <li key={n.slug}>
                    <Link
                      href={`/research/${n.slug}`}
                      className="block font-serif text-[14px] leading-snug text-cream-warm/80 transition hover:text-cream-warm"
                    >
                      {n.title}
                    </Link>
                    <span className="mt-1 block font-mono text-[10px] uppercase text-cream-warm/40" style={{ letterSpacing: "0.18em" }}>
                      {new Date(n.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-3 border-t border-cream-warm/15 pt-6 font-mono text-[12px] text-cream-warm/55" style={{ letterSpacing: "0.06em" }}>
          <span>© {year} venode</span>
          <span>{siteConfig.url.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    </footer>
  );
}
