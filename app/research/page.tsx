import Link from "next/link";
import { notes } from "@/lib/research";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Research",
  description:
    "Research notes from venode on Hugo, threat intelligence, model evaluation and what we will and will not ship.",
  path: "/research",
  keywords: ["cybersecurity ai research", "hugo notes", "venode labs"],
});

export default function ResearchIndexPage() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <article className="container-page py-24 sm:py-32">
      <span className="eyebrow">R · {notes.length} notes</span>
      <h1 className="display mt-7 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04]">
        From the lab.{" "}
        <span className="quiet font-normal">Written carefully.</span>
      </h1>
      <p className="mt-8 max-w-xl text-[18px] leading-[1.55] text-ink-2">
        Short essays on how Hugo works, how we measure it, and the choices we
        make about what to publish and what to keep closed.
      </p>

      <ol className="mt-16 divide-y divide-hairline border-y border-hairline">
        {sorted.map((n) => (
          <li key={n.slug}>
            <Link
              href={`/research/${n.slug}`}
              className="group grid items-baseline gap-6 py-8 md:grid-cols-[4rem_1fr_6rem]"
            >
              <span className="font-mono text-[12px] uppercase text-accent" style={{ letterSpacing: "0.22em" }}>
                R-{n.num}
              </span>
              <div>
                <h2 className="font-display text-[clamp(1.5rem,2.5vw,2rem)] font-bold leading-tight tracking-display text-ink group-hover:underline">
                  {n.title}
                </h2>
                <p className="mt-3 max-w-2xl text-[16px] leading-[1.6] text-ink-2">
                  {n.description}
                </p>
              </div>
              <span className="hidden font-mono text-[12px] uppercase text-ink-2/70 md:block md:text-right" style={{ letterSpacing: "0.18em" }}>
                {n.readingMinutes} min
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </article>
  );
}
