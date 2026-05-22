import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuide, type Block } from "@/lib/guides";
import { getTool } from "@/lib/tools";
import { pageMetadata, canonical } from "@/lib/seo";
import { siteConfig } from "@/site.config";
import { Icon } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";
import AffiliateCard from "@/components/AffiliateCard";
import AdSlot from "@/components/AdSlot";
import { GuideCard } from "@/components/Cards";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return pageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/guides/${guide.slug}`,
    keywords: guide.keywords,
  });
}

function ToolCallout({ slug }: { slug: string }) {
  const tool = getTool(slug);
  if (!tool) return null;
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group my-8 flex items-center gap-5 border border-ink-700 bg-ink-850 p-5 transition hover:border-accent/60"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink-600 bg-ink-900 text-accent">
        <Icon name={tool.icon} className="h-5 w-5" />
      </span>
      <span className="flex-1">
        <span className="block font-mono text-[11px] uppercase tracking-widewide text-accent">
          // Try it
        </span>
        <span className="mt-1 block font-display text-xl leading-tight tracking-tightest text-cream group-hover:text-accent">
          {tool.name}
        </span>
      </span>
      <Icon
        name="arrow"
        className="h-5 w-5 text-accent transition group-hover:translate-x-0.5"
      />
    </Link>
  );
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-12 font-display text-2xl leading-tight tracking-tightest text-cream sm:text-3xl"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-5 leading-relaxed text-slate-300">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-8 border-l-2 border-accent bg-ink-850 px-5 py-4"
        >
          <span className="font-mono text-[11px] uppercase tracking-widewide text-accent">
            // Note
          </span>
          <p className="mt-1 leading-relaxed text-cream/95">{block.text}</p>
        </div>
      );
    case "ul":
      return (
        <ul key={i} className="mt-5 space-y-2.5">
          {block.items.map((it, j) => (
            <li key={j} className="flex gap-3 text-slate-300">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-accent"
                aria-hidden="true"
              />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-5 space-y-3">
          {block.items.map((it, j) => (
            <li key={j} className="flex gap-4 text-slate-300">
              <span className="shrink-0 font-mono text-xs text-accent">
                {String(j + 1).padStart(2, "0")}
              </span>
              <span>{it}</span>
            </li>
          ))}
        </ol>
      );
    case "affiliate":
      return (
        <div key={i} className="my-8">
          <AffiliateCard affiliate={block.key} />
        </div>
      );
    case "tool":
      return <ToolCallout key={i} slug={block.slug} />;
    default:
      return null;
  }
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const more = guides.filter((g) => g.slug !== guide.slug).slice(0, 3);
  const formattedDate = new Date(guide.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: guide.title,
          description: guide.description,
          datePublished: guide.date,
          dateModified: guide.date,
          author: { "@type": "Organization", name: siteConfig.name },
          publisher: { "@type": "Organization", name: siteConfig.name },
          mainEntityOfPage: canonical(`/guides/${guide.slug}`),
        }}
      />

      <article className="container-wide py-12">
        <nav className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widewide text-ash">
          <Link href="/" className="hover:text-cream">
            Home
          </Link>
          <span className="text-ash/40">/</span>
          <Link href="/guides" className="hover:text-cream">
            Guides
          </Link>
        </nav>

        <header className="mt-8 border-b border-ink-700 pb-10">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widewide text-ash">
            <span className="text-accent">// Guide</span>
            <span>·</span>
            <span>{guide.readingMinutes} min read</span>
            <span>·</span>
            <span>{formattedDate}</span>
          </div>
          <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] tracking-tightest text-cream sm:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            {guide.description}
          </p>
        </header>

        <div className="mt-10 max-w-2xl text-[15px]">
          {guide.body.map(renderBlock)}
        </div>

        <div className="mt-12 max-w-2xl">
          <AdSlot />
        </div>

        <p className="mt-12 max-w-2xl font-mono text-[11px] uppercase tracking-widewide text-ash/70">
          General educational information, not personalised security advice.
          Some links are affiliate links —{" "}
          <Link href="/disclosure" className="text-accent hover:underline">
            disclosure
          </Link>
          .
        </p>
      </article>

      {more.length > 0 && (
        <section className="container-wide pb-6">
          <div className="border-t border-ink-700 pt-10">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-ash/60">// More</span>
              <h2 className="font-display text-2xl tracking-tightest text-cream">
                Keep reading
              </h2>
            </div>
            <div className="mt-6 grid gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
              {more.map((g) => (
                <div key={g.slug} className="bg-ink-950">
                  <GuideCard guide={g} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
