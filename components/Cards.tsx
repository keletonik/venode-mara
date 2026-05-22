import Link from "next/link";
import type { Tool } from "@/lib/tools";
import type { Guide } from "@/lib/guides";
import { tools } from "@/lib/tools";
import { Icon } from "./Icons";

export function ToolCard({ tool }: { tool: Tool }) {
  const index = tools.findIndex((t) => t.slug === tool.slug);
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group relative flex flex-col border border-ink-700 bg-ink-850/60 p-6 transition hover:border-accent/60 hover:bg-ink-850"
    >
      {/* Corner ticks */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-accent/0 transition group-hover:border-accent"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-accent/0 transition group-hover:border-accent"
      />

      <div className="flex items-center justify-between">
        <span className="flex h-10 w-10 items-center justify-center border border-ink-600 bg-ink-900 text-accent transition group-hover:border-accent/60">
          <Icon name={tool.icon} className="h-5 w-5" />
        </span>
        <span className="font-mono text-xs text-ash/60">// {num}</span>
      </div>

      <h3 className="mt-6 font-display text-2xl leading-tight tracking-tightest text-cream">
        {tool.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ash">
        {tool.tagline}
      </p>

      <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widewide text-accent">
        Open tool
        <Icon
          name="arrow"
          className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group flex flex-col border border-ink-700 bg-ink-850/60 p-6 transition hover:border-accent/60 hover:bg-ink-850"
    >
      <span className="eyebrow">
        Guide · {guide.readingMinutes} min read
      </span>
      <h3 className="mt-3 font-display text-2xl leading-snug tracking-tightest text-cream">
        {guide.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ash">
        {guide.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widewide text-accent">
        Read guide
        <Icon
          name="arrow"
          className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
        />
      </span>
    </Link>
  );
}
