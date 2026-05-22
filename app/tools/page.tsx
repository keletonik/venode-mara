import { tools } from "@/lib/tools";
import { pageMetadata } from "@/lib/seo";
import { ToolCard } from "@/components/Cards";

export const metadata = pageMetadata({
  title: "Free Security Tools",
  description:
    "A free suite of privacy-first cybersecurity tools: breach checker, password generator, strength analyzer, link scanner, hash and UUID generators. No signup.",
  path: "/tools",
  keywords: ["free security tools", "online cybersecurity tools", "password tools"],
});

export default function ToolsIndexPage() {
  return (
    <div className="container-wide py-16">
      <header className="border-b border-ink-700 pb-10">
        <span className="font-mono text-xs uppercase tracking-widewide text-ash">
          § Tools — {tools.length} live
        </span>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-tightest text-cream sm:text-6xl">
          The toolkit.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
          Six free, private, no-signup tools to check, generate and analyze.
          Every one runs entirely in your browser — nothing you type is ever
          sent to a server or stored.
        </p>
      </header>

      <div className="mt-10 grid gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <div key={tool.slug} className="bg-ink-950">
            <ToolCard tool={tool} />
          </div>
        ))}
      </div>
    </div>
  );
}
