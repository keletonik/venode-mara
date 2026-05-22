import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Affiliate Disclosure",
  description: `How ${siteConfig.name} earns money through affiliate links, written transparently.`,
  path: "/disclosure",
});

export default function DisclosurePage() {
  return (
    <div className="container-wide max-w-2xl py-12">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Affiliate Disclosure
      </h1>

      <p className="mt-5 leading-relaxed text-slate-300">
        Honesty matters, so here it is plainly: {siteConfig.name} contains
        affiliate links. If you click certain links to security products — for
        example password managers, VPNs or antivirus software — and go on to
        make a purchase, we may earn a commission.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">
        It costs you nothing extra
      </h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        An affiliate commission is paid by the retailer out of their own
        margin. You pay exactly the same price you would have paid otherwise —
        and often you benefit from a discount the partner offers. The
        commissions are simply what keeps the tools on this site free to use.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">
        Recommendations are independent
      </h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        We only feature products with a genuinely strong reputation for
        security and reliability. The presence of an affiliate relationship
        never changes the result a tool gives you, and it never makes a weak
        product look good. If a recommendation stopped being something we would
        suggest to a friend, it would be removed.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">Your choice</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        You are never required to use our links. The tools and guides work
        exactly the same whether or not you do. If you find the site useful and
        want to support it, using an affiliate link when you were going to buy
        a product anyway is a free way to do so — and we appreciate it.
      </p>

      <p className="mt-8 text-sm text-slate-500">
        This disclosure is provided in keeping with advertising-standards and
        consumer-protection guidance on clearly identifying paid relationships.
      </p>
    </div>
  );
}
