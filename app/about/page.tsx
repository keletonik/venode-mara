import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `What ${siteConfig.name} is, how its tools protect your privacy, and how the site is funded.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="container-wide py-16">
      <header className="border-b border-ink-700 pb-10">
        <span className="font-mono text-xs uppercase tracking-widewide text-ash">
          § About
        </span>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-tightest text-cream sm:text-6xl">
          About {siteConfig.name}.
        </h1>
      </header>

      <div className="mt-10 max-w-2xl text-[15px]">
        <p className="leading-relaxed text-slate-300">
          {siteConfig.name} exists to make basic cybersecurity genuinely
          accessible. Most people are not protected by exotic attacks — they
          are caught out by a reused password, a convincing phishing link or a
          skipped security setting. The tools and guides here tackle exactly
          those everyday risks, with no jargon and no cost.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          Privacy is the whole point.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          A security site that harvested your data would be a contradiction.
          Every tool on {siteConfig.name} runs entirely inside your browser.
          When you check a password, generate a key or scan a link, the work
          happens on your device. We do not have a database of what you typed
          because the information never reaches us.
        </p>
        <p className="mt-5 leading-relaxed text-slate-300">
          The one tool that talks to the internet — the breach checker — uses
          the k-anonymity model: your password is hashed locally and only a
          short, anonymous fragment of that hash is ever sent. See the{" "}
          <Link href="/privacy" className="text-accent hover:underline">
            privacy page
          </Link>{" "}
          for the full detail.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          How the site is funded.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          The tools are free and we intend to keep them that way. To cover
          running costs, {siteConfig.name} earns commissions when readers
          choose to buy security products — such as password managers, VPNs
          and antivirus software — through links on the site. We only point to
          products with a strong reputation, and a recommendation never
          changes the result a tool gives you. Full details on the{" "}
          <Link href="/disclosure" className="text-accent hover:underline">
            disclosure page
          </Link>
          .
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          A fair warning.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          These tools are educational and provided without warranty. They make
          you a much harder target, but no tool makes anyone unhackable. Use
          them alongside good habits and your own judgement.
        </p>

        <p className="mt-12 font-mono text-xs uppercase tracking-widewide text-ash">
          Questions →{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-accent hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
        </p>
      </div>
    </article>
  );
}
