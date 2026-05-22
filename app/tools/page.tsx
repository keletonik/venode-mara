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
    <div className="container-wide py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Security tools
        </h1>
        <p className="mt-3 text-lg text-slate-300">
          Free, private, no-signup tools to check, generate and analyze. Every
          one runs entirely in your browser — nothing you type is ever sent to
          a server or stored.
        </p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>
    </div>
  );
}
