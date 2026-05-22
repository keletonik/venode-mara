import { siteConfig, type AffiliateKey } from "@/site.config";
import { Icon } from "./Icons";

/**
 * A clearly-labelled sponsored recommendation. Affiliate links use
 * rel="sponsored nofollow" per search-engine and FTC guidance.
 */
export default function AffiliateCard({
  affiliate,
  compact = false,
}: {
  affiliate: AffiliateKey;
  compact?: boolean;
}) {
  const a = siteConfig.affiliates[affiliate];

  return (
    <aside
      className={`not-prose rounded-xl border border-accent/25 bg-accent/[0.06] ${
        compact ? "p-4" : "p-5"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-wider text-accent">
            Recommended · {a.category}
          </span>
          <h3 className="mt-1 text-base font-semibold text-white">{a.name}</h3>
        </div>
        <Icon name="shield" className="h-5 w-5 shrink-0 text-accent/70" />
      </div>
      <p className="mt-2 text-sm text-slate-300">{a.blurb}</p>
      <a
        href={a.url}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-accent-soft"
      >
        {a.cta}
        <Icon name="arrow" className="h-4 w-4" />
      </a>
      <p className="mt-2 text-[11px] text-slate-500">
        Affiliate link — we may earn a commission at no cost to you.
      </p>
    </aside>
  );
}
