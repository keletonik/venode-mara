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
    n: "01",
    title: "Browser-only",
    text: "Every tool runs locally. Passwords and links never reach a server.",
  },
  {
    n: "02",
    title: "No signup, no cost",
    text: "No accounts, no email, no paywall. Open a tool and use it instantly.",
  },
  {
    n: "03",
    title: "Real breach data",
    text: "Checks query the industry-standard k-anonymity model — accurate and anonymous.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-ink-700">
        {/* glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 50% at 25% 0%, rgba(190,242,100,0.10), transparent 70%)",
          }}
        />
        <div className="container-wide relative pb-24 pt-16 sm:pt-24">
          {/* status bar */}
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-widewide text-ash">
            <span className="live-dot" />
            <span className="text-cream">
              Threat intelligence · live
            </span>
            <span className="h-px flex-1 bg-ink-700" />
            <span>v1.0</span>
          </div>

          <div className="mt-12 grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <h1 className="font-display text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02] tracking-tightest text-cream">
                Find out if you&apos;ve been{" "}
                <em className="text-accent">exposed</em>.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300">
                A free toolkit for the everyday threats that actually catch
                people out — reused passwords, phishing links, weak secrets.
                Everything runs in your browser. We never see what you type.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/tools/password-checker"
                  className="group inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widewide text-ink-950 transition hover:bg-accent-soft"
                >
                  Check my password
                  <Icon
                    name="arrow"
                    className="h-4 w-4 transition group-hover:translate-x-0.5"
                  />
                </Link>
                <Link
                  href="/tools"
                  className="inline-flex items-center gap-2 border border-ink-600 px-5 py-3 font-mono text-xs uppercase tracking-widewide text-cream transition hover:border-accent/60 hover:text-accent"
                >
                  All tools
                </Link>
              </div>
            </div>

            {/* terminal-style stats panel */}
            <div className="md:col-span-4">
              <div className="border border-ink-700 bg-ink-900/70 p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-widewide text-ash">
                    // Stat
                  </span>
                  <span className="font-mono text-[11px] text-ash/70">
                    breach-db
                  </span>
                </div>
                <p className="mt-4 font-display text-5xl leading-none tracking-tightest text-cream">
                  14B+
                </p>
                <p className="mt-2 text-sm text-ash">
                  Leaked passwords this toolkit can check yours against —
                  privately, in your browser, in under a second.
                </p>
                <div className="mt-4 border-t border-ink-700 pt-4">
                  <span className="font-mono text-[11px] uppercase tracking-widewide text-ash/70">
                    Average exposure
                  </span>
                  <p className="mt-1 font-mono text-sm text-cream">
                    81% of people reuse at least one password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-ink-700">
        <div className="container-wide grid gap-px bg-ink-700 sm:grid-cols-3">
          {trust.map((t) => (
            <div key={t.n} className="bg-ink-950 p-7">
              <div className="flex items-baseline gap-2">
                <span className="font-mono text-xs text-accent">// {t.n}</span>
                <span className="font-mono text-xs uppercase tracking-widewide text-cream">
                  {t.title}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ash">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="container-wide py-20">
        <SectionHeader
          eyebrow="§ 01 — The toolkit"
          title="Six focused tools."
          tail={
            <Link
              href="/tools"
              className="font-mono text-xs uppercase tracking-widewide text-accent hover:underline"
            >
              View all →
            </Link>
          }
        />
        <div className="mt-10 grid gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <div key={tool.slug} className="bg-ink-950">
              <ToolCard tool={tool} />
            </div>
          ))}
        </div>
      </section>

      {/* GUIDES */}
      <section className="container-wide pb-20">
        <SectionHeader
          eyebrow="§ 02 — Field notes"
          title={
            <>
              Plain-English guides,{" "}
              <em className="text-ash">written carefully.</em>
            </>
          }
          tail={
            <Link
              href="/guides"
              className="font-mono text-xs uppercase tracking-widewide text-accent hover:underline"
            >
              All guides →
            </Link>
          }
        />
        <div className="mt-10 grid gap-px bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
          {guides.slice(0, 3).map((guide) => (
            <div key={guide.slug} className="bg-ink-950">
              <GuideCard guide={guide} />
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="container-wide pb-20">
        <div className="relative border border-ink-700 bg-ink-900 p-10 sm:p-16">
          <span
            aria-hidden="true"
            className="absolute -left-px -top-px h-4 w-4 border-l border-t border-accent"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-px -right-px h-4 w-4 border-b border-r border-accent"
          />
          <div className="max-w-2xl">
            <span className="font-mono text-xs uppercase tracking-widewide text-accent">
              // 10 seconds
            </span>
            <h2 className="mt-3 font-display text-4xl leading-tight tracking-tightest text-cream sm:text-5xl">
              The most common way people get hacked is{" "}
              <em>a password that already leaked</em>.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-ash">
              Find out if yours has, privately, in your browser. Then fix it
              once and never have to think about it again.
            </p>
            <Link
              href="/tools/password-checker"
              className="group mt-8 inline-flex items-center gap-2 bg-accent px-5 py-3 font-mono text-xs uppercase tracking-widewide text-ink-950 transition hover:bg-accent-soft"
            >
              Run the breach check
              <Icon
                name="arrow"
                className="h-4 w-4 transition group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeader({
  eyebrow,
  title,
  tail,
}: {
  eyebrow: string;
  title: React.ReactNode;
  tail?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 border-b border-ink-700 pb-6 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="font-mono text-xs uppercase tracking-widewide text-ash">
          {eyebrow}
        </span>
        <h2 className="mt-3 font-display text-4xl leading-tight tracking-tightest text-cream sm:text-5xl">
          {title}
        </h2>
      </div>
      {tail && <div>{tail}</div>}
    </div>
  );
}
