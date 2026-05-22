import { siteConfig, type AffiliateKey } from "@/site.config";
import { Icon } from "./Icons";

/**
 * Sponsored recommendation card. rel="sponsored nofollow" per FTC / SEO
 * guidance.
 */
export default function AffiliateCard({
  affiliate,
}: {
  affiliate: AffiliateKey;
}) {
  const a = siteConfig.affiliates[affiliate];

  return (
    <aside className="not-prose border border-ink-700 bg-ink-850 p-5">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-widewide text-accent">
          // Recommended · {a.category}
        </span>
        <Icon name="shield" className="h-4 w-4 text-accent/70" />
      </div>
      <h3 className="mt-3 font-display text-xl tracking-tightest text-cream">
        {a.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ash">{a.blurb}</p>
      <a
        href={a.url}
        target="_blank"
        rel="sponsored nofollow noopener"
        className="group mt-4 inline-flex items-center gap-2 bg-accent px-4 py-2.5 font-mono text-xs uppercase tracking-widewide text-ink-950 transition hover:bg-accent-soft"
      >
        {a.cta}
        <Icon
          name="arrow"
          className="h-3.5 w-3.5 transition group-hover:translate-x-0.5"
        />
      </a>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-widewide text-ash/70">
        Affiliate link · no extra cost to you
      </p>
    </aside>
  );
}
