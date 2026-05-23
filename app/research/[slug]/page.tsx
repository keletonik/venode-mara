import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { notes, getNote, type Block } from "@/lib/research";
import { pageMetadata, canonical } from "@/lib/seo";
import { siteConfig } from "@/site.config";
import { ArrowRight } from "@/components/Icons";
import JsonLd from "@/components/JsonLd";

export function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return {};
  return pageMetadata({
    title: note.title.replace(/\.$/, ""),
    description: note.description,
    path: `/research/${note.slug}`,
    keywords: note.keywords,
  });
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          key={i}
          className="mt-14 font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={i}
          className="mt-5 text-[17.5px] leading-[1.75] text-ink"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "pullquote":
      return (
        <blockquote
          key={i}
          className="my-10 border-l-2 border-accent pl-6 font-display text-[clamp(1.25rem,2.25vw,1.625rem)] font-semibold leading-[1.35] text-ink"
        >
          {block.text}
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {block.items.map((it, j) => (
            <li
              key={j}
              className="flex items-baseline gap-4 text-[16.5px] leading-[1.65] text-ink"
            >
              <span className="font-mono text-[11px] text-accent">—</span>
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div
          key={i}
          className="my-8 border border-hairline bg-surface/50 p-5 font-mono text-[13.5px] leading-[1.65] text-ink"
        >
          {block.lang && (
            <p className="mb-3 font-mono text-[10px] uppercase text-accent" style={{ letterSpacing: "0.22em" }}>
              // {block.lang}
            </p>
          )}
          <pre className="whitespace-pre-wrap break-words">{block.text}</pre>
        </div>
      );
    default:
      return null;
  }
}

export default async function NotePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  const more = notes.filter((n) => n.slug !== note.slug).slice(0, 3);
  const formattedDate = new Date(note.date).toLocaleDateString("en-GB", {
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
          headline: note.title,
          description: note.description,
          datePublished: note.date,
          dateModified: note.date,
          author: { "@type": "Organization", name: "venode" },
          publisher: { "@type": "Organization", name: "venode" },
          mainEntityOfPage: canonical(`/research/${note.slug}`),
        }}
      />

      <article className="container-page py-20 sm:py-28">
        <nav className="flex items-center gap-3 font-mono text-[12px] uppercase text-ink-2" style={{ letterSpacing: "0.18em" }}>
          <Link href="/" className="hover:text-ink">
            {siteConfig.lab}
          </Link>
          <span className="text-ink-2/40">·</span>
          <Link href="/research" className="hover:text-ink">
            Research
          </Link>
        </nav>

        <header className="mt-12 max-w-3xl">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-[12px] uppercase text-accent" style={{ letterSpacing: "0.22em" }}>
              R-{note.num}
            </span>
            <span className="font-mono text-[12px] uppercase text-ink-2/70" style={{ letterSpacing: "0.18em" }}>
              {formattedDate} · {note.readingMinutes} min
            </span>
          </div>
          <h1 className="display mt-7 text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.04]">
            {note.title}
          </h1>
          <p className="mt-7 text-[19px] leading-[1.55] text-ink-2">
            {note.description}
          </p>
        </header>

        <div className="mt-10 max-w-prose">
          {note.body.map(renderBlock)}
        </div>

        <div className="mt-16 max-w-prose border-t border-hairline pt-8">
          <p className="text-[15px] text-ink-2">
            Hugo is a research preview from venode. Feedback, corrections and
            disagreements welcome —{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-hairline">
          <div className="container-page py-20">
            <span className="eyebrow">More notes</span>
            <ol className="mt-8 divide-y divide-hairline border-y border-hairline">
              {more.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/research/${n.slug}`}
                    className="group grid items-baseline gap-6 py-6 md:grid-cols-[4rem_1fr_2rem]"
                  >
                    <span className="font-mono text-[12px] uppercase text-accent" style={{ letterSpacing: "0.22em" }}>
                      R-{n.num}
                    </span>
                    <div>
                      <h3 className="font-display text-[20px] font-bold tracking-display text-ink group-hover:underline">
                        {n.title}
                      </h3>
                      <p className="mt-1.5 max-w-2xl text-[15px] leading-[1.6] text-ink-2">
                        {n.description}
                      </p>
                    </div>
                    <ArrowRight className="hidden h-3.5 w-3.5 text-ink-2 md:block md:justify-self-end" />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  );
}
