import Link from "next/link";
import type { ReactNode } from "react";
import type { Tool } from "@/lib/tools";
import type { AffiliateKey } from "@/site.config";
import { siteConfig } from "@/site.config";
import { tools } from "@/lib/tools";
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
  about: string[];
  faq?: Faq[];
  affiliate?: AffiliateKey;
  relatedGuides?: string[];
}) {
  const guides = relatedGuides
    .map((slug) => getGuide(slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  const index = tools.findIndex((t) => t.slug === tool.slug);
  const num = String(index + 1).padStart(2, "0");

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

      <div className="container-wide py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widewide text-ash">
          <Link href="/" className="hover:text-cream">
            Home
          </Link>
          <span className="text-ash/40">/</span>
          <Link href="/tools" className="hover:text-cream">
            Tools
          </Link>
          <span className="text-ash/40">/</span>
          <span className="text-cream">{tool.name}</span>
        </nav>

        {/* Header */}
        <header className="mt-8 border-b border-ink-700 pb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">// Tool · {num}</span>
            <span className="h-px flex-1 bg-ink-700" />
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widewide text-ash">
              <span className="live-dot" />
              In-browser · private
            </span>
          </div>
          <div className="mt-5 flex items-start gap-5">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-ink-600 bg-ink-900 text-accent">
              <Icon name={tool.icon} className="h-7 w-7" />
            </span>
            <div>
              <h1 className="font-display text-4xl leading-none tracking-tightest text-cream sm:text-5xl">
                {tool.name}
              </h1>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-ash">
                {tool.tagline}
              </p>
            </div>
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="min-w-0">
            {/* Tool widget */}
            <div className="animate-rise border border-ink-700 bg-ink-850 p-6 sm:p-8">
              {children}
            </div>

            {/* About */}
            <section className="mt-12">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-ash/60">// About</span>
                <h2 className="font-display text-2xl tracking-tightest text-cream">
                  About this tool
                </h2>
              </div>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-300">
                {about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>

            {/* FAQ */}
            {faq.length > 0 && (
              <section className="mt-12">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-ash/60">// FAQ</span>
                  <h2 className="font-display text-2xl tracking-tightest text-cream">
                    Frequently asked questions
                  </h2>
                </div>
                <div className="mt-5 divide-y divide-ink-700 border border-ink-700 bg-ink-850">
                  {faq.map((f) => (
                    <details key={f.q} className="group p-5">
                      <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-medium text-cream">
                        <span>{f.q}</span>
                        <span className="mt-1 font-mono text-xs text-accent transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-ash">
                        {f.a}
                      </p>
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
              <div className="border border-ink-700 bg-ink-850 p-5">
                <span className="font-mono text-[11px] uppercase tracking-widewide text-accent">
                  // Product · {siteConfig.product.price}
                </span>
                <h3 className="mt-3 font-display text-xl tracking-tightest text-cream">
                  {siteConfig.product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ash">
                  {siteConfig.product.blurb}
                </p>
                <a
                  href={siteConfig.product.url}
                  target="_blank"
                  rel="noopener"
                  className="mt-4 inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-xs uppercase tracking-widewide text-ink-950 hover:bg-accent-soft"
                >
                  {siteConfig.product.cta}
                  <Icon name="arrow" className="h-3.5 w-3.5" />
                </a>
              </div>
            )}

            <AdSlot />

            {guides.length > 0 && (
              <div className="border border-ink-700 bg-ink-850 p-5">
                <span className="font-mono text-[11px] uppercase tracking-widewide text-ash/70">
                  // Related reading
                </span>
                <ul className="mt-4 space-y-3.5">
                  {guides.map((g) => (
                    <li key={g.slug}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="group block text-sm text-slate-200 hover:text-accent"
                      >
                        <span className="block leading-snug group-hover:underline">
                          {g.title}
                        </span>
                        <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-widewide text-ash/70">
                          {g.readingMinutes} min read →
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
