import Link from "next/link";
import type { ReactNode } from "react";
import type { Tool } from "@/lib/tools";
import type { AffiliateKey } from "@/site.config";
import { siteConfig } from "@/site.config";
import { getGuide } from "@/lib/guides";
import { canonical } from "@/lib/seo";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import AffiliateCard from "@/components/AffiliateCard";
import AdSlot from "@/components/AdSlot";

export type Faq = { q: string; a: string };

export default function ToolLayout({
  tool,
  children,
  about,
  faq = [],
  affiliate,
  relatedGuides = [],
}: {
  tool: Tool;
  children: ReactNode;
  /** Short explanatory paragraphs shown under the widget. */
  about: string[];
  faq?: Faq[];
  affiliate?: AffiliateKey;
  relatedGuides?: string[];
}) {
  const guides = relatedGuides
    .map((slug) => getGuide(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: tool.name,
          description: tool.description,
          applicationCategory: "SecurityApplication",
          operatingSystem: "Web browser",
          url: canonical(`/tools/${tool.slug}`),
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }}
      />
      {faq.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      )}

      <div className="container-wide py-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link href="/tools" className="hover:text-accent">
            Tools
          </Link>
          <span>/</span>
          <span className="text-slate-300">{tool.name}</span>
        </nav>

        {/* Header */}
        <header className="mt-6 flex items-start gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon name={tool.icon} className="h-7 w-7" />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              {tool.name}
            </h1>
            <p className="mt-1 text-slate-400">{tool.tagline}</p>
          </div>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_320px]">
          {/* Main column */}
          <div className="min-w-0">
            <div className="animate-rise rounded-2xl border border-ink-700 bg-ink-850 p-5 sm:p-6">
              {children}
            </div>

            {/* About */}
            <section className="mt-10">
              <h2 className="text-xl font-bold text-white">
                About this tool
              </h2>
              {about.map((p, i) => (
                <p key={i} className="mt-3 text-slate-300">
                  {p}
                </p>
              ))}
            </section>

            {/* FAQ */}
            {faq.length > 0 && (
              <section className="mt-10">
                <h2 className="text-xl font-bold text-white">
                  Frequently asked questions
                </h2>
                <div className="mt-4 divide-y divide-ink-700 rounded-xl border border-ink-700 bg-ink-850">
                  {faq.map((f) => (
                    <details key={f.q} className="group p-5">
                      <summary className="flex cursor-pointer items-center justify-between font-medium text-white">
                        {f.q}
                        <Icon
                          name="arrow"
                          className="h-4 w-4 rotate-90 text-accent transition group-open:-rotate-90"
                        />
                      </summary>
                      <p className="mt-2 text-sm text-slate-400">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {affiliate && <AffiliateCard affiliate={affiliate} />}

            {siteConfig.product.enabled && (
              <div className="rounded-xl border border-ink-700 bg-ink-850 p-5">
                <h3 className="font-semibold text-white">
                  {siteConfig.product.name}
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  {siteConfig.product.blurb}
                </p>
                <a
                  href={siteConfig.product.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-950 hover:bg-accent-soft"
                >
                  {siteConfig.product.cta} · {siteConfig.product.price}
                </a>
              </div>
            )}

            <AdSlot />

            {guides.length > 0 && (
              <div className="rounded-xl border border-ink-700 bg-ink-850 p-5">
                <h3 className="font-semibold text-white">Related reading</h3>
                <ul className="mt-3 space-y-3">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="group flex gap-2 text-sm text-slate-300 hover:text-accent"
                      >
                        <Icon
                          name="book"
                          className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                        />
                        <span className="group-hover:underline">
                          {g.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </div>
    </>
  );
}
