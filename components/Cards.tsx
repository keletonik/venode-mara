import Link from "next/link";
import type { Tool } from "@/lib/tools";
import type { Guide } from "@/lib/guides";
import { Icon } from "./Icons";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-xl border border-ink-700 bg-ink-850 p-5 transition hover:border-accent/50 hover:bg-ink-800"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon name={tool.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-4 font-semibold text-white group-hover:text-accent">
        {tool.name}
      </h3>
      <p className="mt-1.5 flex-1 text-sm text-slate-400">{tool.tagline}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Open tool
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col rounded-xl border border-ink-700 bg-ink-850 p-5 transition hover:border-accent/50 hover:bg-ink-800"
    >
      <span className="text-xs font-medium uppercase tracking-wider text-accent">
        Guide · {guide.readingMinutes} min read
      </span>
      <h3 className="mt-2 font-semibold leading-snug text-white group-hover:text-accent">
        {guide.title}
      </h3>
      <p className="mt-2 flex-1 text-sm text-slate-400">{guide.description}</p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Read guide
        <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
