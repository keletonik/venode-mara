import Link from "next/link";
import { notes } from "@/lib/research";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Research",
  description:
    "Research notes from Venode Labs on Hugo, threat intelligence, model evaluation and what we will and will not ship.",
  path: "/research",
  keywords: ["cybersecurity ai research", "hugo notes", "venode labs"],
});

export default function ResearchIndexPage() {
  const sorted = [...notes].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <article className="container-page pb-24 pt-20 sm:pt-28">
      <p className="label">Research · {notes.length} notes</p>
      <h1 className="mt-8 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tightest">
        <span className="font-medium">From the lab.</span>{" "}
        <span className="text-ink-500">
          Quiet research, written carefully.
        </span>
      </h1>
      <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-600">
        Short essays on how Hugo works, how we measure it, and the choices we
        make about what to publish and what to keep closed.
      </p>

      <ul className="mt-16 divide-y divide-rule border-y border-rule">
        {sorted.map((n) => (
          <li key={n.slug}>
            <Link
              href={`/research/${n.slug}`}
              className="group grid items-baseline gap-6 py-7 md:grid-cols-[3rem_1fr_5rem]"
            >
              <span className="label">{n.num}</span>
              <div>
                <h2 className="text-[22px] tracking-tightest text-ink-900 group-hover:underline">
                  {n.title}
                </h2>
                <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-500">
                  {n.description}
                </p>
              </div>
              <span className="hidden font-mono text-[12px] text-ink-400 md:block md:text-right">
                {n.readingMinutes} min
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
