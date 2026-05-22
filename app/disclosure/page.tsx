import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description: `How ${siteConfig.name} earns money through affiliate links, written transparently.`,
  path: "/disclosure",
});

export default function DisclosurePage() {
  return (
    <article className="container-wide py-16">
      <header className="border-b border-ink-700 pb-10">
        <span className="font-mono text-xs uppercase tracking-widewide text-ash">
          § Disclosure
        </span>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-tightest text-cream sm:text-6xl">
          Affiliate disclosure.
        </h1>
      </header>

      <div className="mt-10 max-w-2xl text-[15px]">
        <p className="leading-relaxed text-slate-300">
          Honesty matters, so here it is plainly: {siteConfig.name} contains
          affiliate links. If you click certain links to security products —
          for example password managers, VPNs or antivirus software — and go
          on to make a purchase, we may earn a commission.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          It costs you nothing extra.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          An affiliate commission is paid by the retailer out of their own
          margin. You pay exactly the same price you would have paid otherwise
          — and often you benefit from a discount the partner offers. The
          commissions are simply what keeps the tools on this site free to
          use.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          Recommendations are independent.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          We only feature products with a genuinely strong reputation for
          security and reliability. The presence of an affiliate relationship
          never changes the result a tool gives you, and it never makes a weak
          product look good. If a recommendation stopped being something we
          would suggest to a friend, it would be removed.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          Your choice.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          You are never required to use our links. The tools and guides work
          exactly the same whether or not you do. If you find the site useful
          and want to support it, using an affiliate link when you were going
          to buy a product anyway is a free way to do so — and we appreciate
          it.
        </p>

        <p className="mt-12 font-mono text-[11px] uppercase tracking-widewide text-ash/70">
          Provided in keeping with advertising-standards and
          consumer-protection guidance on clearly identifying paid
          relationships.
        </p>
      </div>
    </article>
  );
}
