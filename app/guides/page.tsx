import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { GuideCard } from "@/components/Cards";

export const metadata = pageMetadata({
  title: "Security Guides",
  description:
    "Plain-English cybersecurity guides: spotting phishing links, recovering from a data breach, choosing a password manager and more.",
  path: "/guides",
  keywords: ["cybersecurity guides", "online safety advice", "phishing tips"],
});

export default function GuidesIndexPage() {
  const sorted = [...guides].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="container-wide py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Security guides
        </h1>
        <p className="mt-3 text-lg text-slate-300">
          Practical, jargon-free advice on protecting your accounts, devices
          and money online. Written to be read in a coffee break.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} />
        ))}
      </div>
    </div>
  );
}
