import Link from "next/link";
import { siteConfig } from "@/site.config";
import { tools } from "@/lib/tools";
import { guides } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";
import { ToolCard, GuideCard } from "@/components/Cards";
import { Icon } from "@/components/Icons";

export const metadata = pageMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "free cybersecurity tools",
    "password breach checker",
    "is this link safe",
    "online security tools",
  ],
});

const trust = [
  {
    icon: "lock",
    title: "100% private",
    text: "Every tool runs in your browser. Your passwords and links never reach a server.",
  },
  {
    icon: "bolt",
    title: "No signup, no cost",
    text: "No accounts, no email, no paywall. Open a tool and use it instantly.",
  },
  {
    icon: "shield",
    title: "Built on real data",
    text: "Breach checks use the industry-standard k-anonymity model — accurate and anonymous.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-ink-700/70">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 0%, rgba(34,211,238,0.12), transparent 70%)",
          }}
        />
        <div className="container-wide relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              <Icon name="bolt" className="h-3.5 w-3.5" />
              Free security tools that run entirely in your browser
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Find out if you&apos;ve been{" "}
              <span className="text-accent">exposed</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
              Check whether your password leaked in a data breach, scan a
              suspicious link for phishing, generate uncrackable passwords —
              all free, all private, no account required.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/tools/password-checker"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-ink-950 transition hover:bg-accent-soft"
              >
                <Icon name="shield" className="h-5 w-5" />
                Check my password
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center gap-2 rounded-lg border border-ink-600 bg-ink-850 px-6 py-3 font-semibold text-white transition hover:border-accent/50"
              >
                Browse all tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="container-wide py-14">
        <div className="grid gap-5 sm:grid-cols-3">
          {trust.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-ink-700 bg-ink-850 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Icon name={t.icon} className="h-5 w-5" />
              </span>
              <h2 className="mt-3 text-base font-semibold text-white">
                {t.title}
              </h2>
              <p className="mt-1 text-sm text-slate-400">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tools */}
      <section className="container-wide py-6">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Security tools</h2>
            <p className="mt-1 text-slate-400">
              Six focused tools. Each does one thing well.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden text-sm font-medium text-accent hover:underline sm:block"
          >
            View all
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </section>

      {/* Guides */}
      <section className="container-wide py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">Latest guides</h2>
            <p className="mt-1 text-slate-400">
              Plain-English advice on staying safe online.
            </p>
          </div>
          <Link
            href="/guides"
            className="hidden text-sm font-medium text-accent hover:underline sm:block"
          >
            All guides
          </Link>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 3).map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="container-wide pb-10">
        <div className="rounded-2xl border border-accent/25 bg-accent/[0.06] p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Takes 10 seconds. Could save your accounts.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            The most common way people get hacked is a reused password that
            already leaked. Check yours now — privately, in your browser.
          </p>
          <Link
            href="/tools/password-checker"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-ink-950 transition hover:bg-accent-soft"
          >
            <Icon name="shield" className="h-5 w-5" />
            Run the breach check
          </Link>
        </div>
      </section>
    </>
  );
}
