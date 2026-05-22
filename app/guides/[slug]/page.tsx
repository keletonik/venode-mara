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
      className="group my-6 flex items-center gap-4 rounded-xl border border-accent/30 bg-accent/[0.06] p-4 transition hover:border-accent/60"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent">
        <Icon name={tool.icon} className="h-6 w-6" />
      </span>
      <span className="flex-1">
        <span className="block font-semibold text-white">
          Try it: {tool.name}
        </span>
        <span className="block text-sm text-slate-400">{tool.tagline}</span>
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
        <h2 key={i} className="mt-10 text-xl font-bold text-white sm:text-2xl">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p key={i} className="mt-4 leading-relaxed text-slate-300">
          {block.text}
        </p>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-6 rounded-xl border-l-2 border-accent bg-accent/[0.07] p-4 text-slate-200"
        >
          {block.text}
        </div>
      );
    case "ul":
      return (
        <ul key={i} className="mt-4 space-y-2">
          {block.items.map((it, j) => (
            <li key={j} className="flex gap-2.5 text-slate-300">
              <Icon
                name="check"
                className="mt-1 h-4 w-4 shrink-0 text-accent"
              />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-4 space-y-2.5">
          {block.items.map((it, j) => (
            <li key={j} className="flex gap-3 text-slate-300">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-sm font-semibold text-accent">
                {j + 1}
              </span>
              <span className="pt-0.5">{it}</span>
            </li>
          ))}
        </ol>
      );
    case "affiliate":
      return (
        <div key={i} className="my-6">
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

      <article className="container-wide py-10">
        <nav className="flex items-center gap-1.5 text-sm text-slate-500">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <span>/</span>
          <Link href="/guides" className="hover:text-accent">
            Guides
          </Link>
        </nav>

        <header className="mt-6 max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-wider text-accent">
            Guide · {guide.readingMinutes} min read · {formattedDate}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-lg text-slate-300">{guide.description}</p>
        </header>

        <div className="mt-8 max-w-2xl">
          {guide.body.map(renderBlock)}
        </div>

        <div className="mt-10 max-w-2xl">
          <AdSlot />
        </div>

        <p className="mt-10 max-w-2xl text-xs text-slate-500">
          This guide is general educational information, not personalised
          security advice. Some links are affiliate links — see our{" "}
          <Link href="/disclosure" className="underline hover:text-accent">
            disclosure
          </Link>
          .
        </p>
      </article>

      {more.length > 0 && (
        <section className="container-wide pb-6">
          <h2 className="text-xl font-bold text-white">Keep reading</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {more.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
