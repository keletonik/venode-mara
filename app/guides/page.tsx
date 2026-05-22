import Link from "next/link";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { GuideCard } from "@/components/Cards";
import { Icon } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Security Guides",
  description:
    "Plain-English cybersecurity guides: spotting phishing links, recovering from a data breach, choosing a password manager and more.",
  path: "/guides",
  keywords: ["cybersecurity guides", "online safety advice", "phishing tips"],
});

export default function GuidesIndexPage() {
  const sorted = [...guides].sort((a, b) => b.date.localeCompare(a.date));
  const [feature, ...rest] = sorted;

  return (
    <div className="container-wide py-16">
      <header className="border-b border-ink-700 pb-10">
        <span className="font-mono text-xs uppercase tracking-widewide text-ash">
          § Field notes — {guides.length} essays
        </span>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-tightest text-cream sm:text-6xl">
          Plain-English security,{" "}
          <em className="text-ash">written carefully.</em>
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          Practical, jargon-free essays on protecting your accounts, devices
          and money online. Written to be read in a coffee break.
        </p>
      </header>

      {/* Featured */}
      <Link
        href={`/guides/${feature.slug}`}
        className="group mt-10 grid gap-8 border border-ink-700 bg-ink-850/60 p-8 transition hover:border-accent/60 hover:bg-ink-850 md:grid-cols-[1fr_2fr] sm:p-10"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widewide text-accent">
            // Featured · {feature.readingMinutes} min
          </span>
          <p className="mt-4 font-mono text-xs uppercase tracking-widewide text-ash">
            {new Date(feature.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
            })}
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl leading-tight tracking-tightest text-cream group-hover:text-accent sm:text-4xl">
            {feature.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ash">
            {feature.description}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widewide text-accent">
            Read guide
            <Icon
              name="arrow"
              className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </Link>

      {/* Rest */}
      <div className="mt-px grid gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((guide) => (
          <div key={guide.slug} className="bg-ink-950">
            <GuideCard guide={guide} />
          </div>
        ))}
      </div>
    </div>
  );
}
