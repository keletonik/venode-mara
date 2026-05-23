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
          className="mt-14 text-[clamp(1.5rem,2.5vw,1.875rem)] leading-[1.2] tracking-tightest text-ink-900"
        >
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p
          key={i}
          className="mt-5 text-[17px] leading-[1.7] text-ink-700"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
    case "pullquote":
      return (
        <blockquote
          key={i}
          className="my-10 border-l border-ink-300 pl-6 text-[20px] italic leading-[1.5] text-ink-800"
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
              className="flex items-baseline gap-3 text-[16.5px] leading-[1.65] text-ink-700"
            >
              <span className="font-mono text-[11px] text-ink-400">—</span>
              <span dangerouslySetInnerHTML={{ __html: it }} />
            </li>
          ))}
        </ul>
      );
    case "code":
      return (
        <div
          key={i}
          className="my-8 border border-rule bg-paper-alt/60 p-5 font-mono text-[13px] leading-[1.65] text-ink-700"
        >
          {block.lang && (
            <p className="mb-3 text-[11px] uppercase tracking-wider2 text-ink-400">
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
  const formattedDate = new Date(note.date).toLocaleDateString("en-US", {
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
          author: { "@type": "Organization", name: "Venode Labs" },
          publisher: { "@type": "Organization", name: "Venode Labs" },
          mainEntityOfPage: canonical(`/research/${note.slug}`),
        }}
      />

      <article className="container-page pt-20 pb-16 sm:pt-28">
        <nav className="flex items-center gap-2 text-[13px] text-ink-500">
          <Link href="/" className="hover:text-ink-900">
            {siteConfig.lab}
          </Link>
          <span className="text-ink-300">·</span>
          <Link href="/research" className="hover:text-ink-900">
            Research
          </Link>
        </nav>

        <header className="mt-12 max-w-3xl">
          <div className="flex items-baseline gap-4">
            <span className="label">{note.num}</span>
            <span className="font-mono text-[12px] text-ink-400">
              {formattedDate} · {note.readingMinutes} min
            </span>
          </div>
          <h1 className="mt-6 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05] tracking-tightest">
            {note.title}
          </h1>
          <p className="mt-6 text-[19px] leading-relaxed text-ink-500">
            {note.description}
          </p>
        </header>

        <div className="mt-10 max-w-prose">
          {note.body.map(renderBlock)}
        </div>

        <div className="mt-16 max-w-prose border-t border-rule pt-8">
          <p className="text-[14px] text-ink-500">
            Hugo is a research preview from Venode Labs. Feedback, corrections
            and disagreements welcome —{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink-800 underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            .
          </p>
        </div>
      </article>

      {more.length > 0 && (
        <section className="border-t border-rule">
          <div className="container-page py-20">
            <span className="label">More notes</span>
            <ul className="mt-8 divide-y divide-rule border-y border-rule">
              {more.map((n) => (
                <li key={n.slug}>
                  <Link
                    href={`/research/${n.slug}`}
                    className="group grid items-baseline gap-6 py-6 md:grid-cols-[3rem_1fr_2rem]"
                  >
                    <span className="label">{n.num}</span>
                    <div>
                      <h3 className="text-[19px] tracking-tightest text-ink-900 group-hover:underline">
                        {n.title}
                      </h3>
                      <p className="mt-1.5 max-w-2xl text-[14.5px] leading-relaxed text-ink-500">
                        {n.description}
                      </p>
                    </div>
                    <ArrowRight className="hidden h-3.5 w-3.5 text-ink-400 transition group-hover:translate-x-0.5 md:block md:justify-self-end" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}
