import Link from "next/link";
import { siteConfig } from "@/site.config";
import { notes } from "@/lib/research";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/Icons";

export const metadata = pageMetadata({
  title: siteConfig.displayName,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "cybersecurity language model",
    "threat intelligence ai",
    "hugo venode",
    "security llm",
  ],
});

const researchAreas = [
  {
    n: "01",
    title: "Threat intelligence",
    text: "Hugo reads CTI reports, normalises IOCs, builds attribution timelines and tells you what it does not know.",
  },
  {
    n: "02",
    title: "Malware analysis",
    text: "Reasoning over disassembly, sandbox traces, behaviour and YARA rules. Hypotheses before conclusions.",
  },
  {
    n: "03",
    title: "Incident response",
    text: "Triage at speed: question the alert, follow the trail, draft the write-up. Sit beside the analyst, not in front of them.",
  },
  {
    n: "04",
    title: "Adversary simulation",
    text: "TTP libraries, plausible attacker plans, blue-team practice. Useful for the people preparing for the next one.",
  },
];

const customBuilds = [
  {
    title: "For your stack.",
    text: "Connect Hugo to your SIEM, EDR, ticketing system and sandbox. We provide the connectors; your data does not leave your environment.",
  },
  {
    title: "On your data.",
    text: "Fine-tune on your detection logic, runbooks, and historical incidents. Hugo learns how your team thinks.",
  },
  {
    title: "In your environment.",
    text: "On-premise, in your VPC, or in our managed service. Pick the deployment that your security team can sign off on.",
  },
  {
    title: "With our guarantees.",
    text: "Model cards, eval reports, red-team writeups and refusal behaviour documented before, not after.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-20 pb-24 sm:pt-32 sm:pb-32">
        <div className="max-w-3xl">
          <p className="label">Venode Labs · A research preview</p>

          <h1 className="mt-10 font-sans text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.05] tracking-tightest text-ink-900">
            <span className="font-medium">Hugo.</span>{" "}
            <span className="text-ink-500">
              A cybersecurity intelligence model.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[18px] leading-relaxed text-ink-600">
            Trained on threat reports, malware analyses, incident write-ups and
            adversary playbooks. Built for the people defending things — to
            triage at speed, to reason carefully under uncertainty, and to
            produce the work.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={siteConfig.appUrl}
              className="group inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
            >
              Open Hugo
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/research"
              className="group inline-flex items-center gap-2 text-[15px] text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
            >
              Read research
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ONE HUGO — pricing */}
      <section id="pricing" className="border-t border-rule">
        <div className="container-page py-24 sm:py-32">
          <div className="flex items-baseline gap-4">
            <span className="label">01 — Product</span>
          </div>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tightest">
            One Hugo.{" "}
            <span className="text-ink-500">Free for analysts. Pro for teams.</span>
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-600">
            We do not split the model. The same Hugo answers a curious student
            and a tier-3 SOC analyst. Pro adds the connectors, the context, and
            the API — not a different brain.
          </p>

          <div className="mt-14 grid gap-px bg-rule md:grid-cols-2">
            <Tier tier={siteConfig.tiers.free} />
            <Tier tier={siteConfig.tiers.pro} />
          </div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="border-t border-rule">
        <div className="container-page py-24 sm:py-32">
          <span className="label">02 — Research areas</span>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tightest">
            Where Hugo is most at home.
          </h2>

          <div className="mt-14 grid gap-px bg-rule sm:grid-cols-2">
            {researchAreas.map((area) => (
              <div key={area.n} className="bg-paper p-8 sm:p-10">
                <span className="label">{area.n}</span>
                <h3 className="mt-3 text-[22px] tracking-tightest text-ink-900">
                  {area.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOM BUILDS */}
      <section className="border-t border-rule">
        <div className="container-page py-24 sm:py-32">
          <span className="label">03 — Custom builds</span>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tightest">
            Bring Hugo to your stack.
          </h2>
          <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-ink-600">
            For SOCs, MSSPs, threat-intel teams and IR retainers who need Hugo
            to live where their data already does.
          </p>

          <div className="mt-14 grid gap-12 sm:grid-cols-2">
            {customBuilds.map((c) => (
              <div key={c.title}>
                <h3 className="text-[19px] tracking-tightest text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  {c.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
            >
              Talk to us about a custom build
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST RESEARCH */}
      <section className="border-t border-rule">
        <div className="container-page py-24 sm:py-32">
          <div className="flex items-end justify-between">
            <div>
              <span className="label">04 — Recent notes</span>
              <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-tightest">
                From the lab.
              </h2>
            </div>
            <Link
              href="/research"
              className="hidden text-[15px] text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline sm:inline-block"
            >
              All notes →
            </Link>
          </div>

          <ul className="mt-12 divide-y divide-rule border-y border-rule">
            {notes.slice(0, 4).map((n) => (
              <li key={n.slug}>
                <Link
                  href={`/research/${n.slug}`}
                  className="group flex items-baseline gap-6 py-6 transition hover:bg-paper-alt/40"
                >
                  <span className="label w-10 shrink-0">{n.num}</span>
                  <span className="flex-1">
                    <span className="text-[20px] tracking-tightest text-ink-900 group-hover:underline">
                      {n.title}
                    </span>
                    <span className="mt-1 block max-w-2xl text-[15px] leading-relaxed text-ink-500">
                      {n.description}
                    </span>
                  </span>
                  <span className="hidden font-mono text-[12px] text-ink-400 sm:inline">
                    {n.readingMinutes} min
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLOSING */}
      <section className="border-t border-rule">
        <div className="container-page py-24 sm:py-32">
          <div className="max-w-2xl">
            <p className="text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.25] tracking-tightest text-ink-900">
              We are building Hugo carefully, in public, with the people who
              have done this work for a long time.{" "}
              <span className="text-ink-500">
                Read about what we will and will not ship, and why.
              </span>
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link
                href="/safety"
                className="group inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
              >
                Safety &amp; disclosure
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-[15px] text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
              >
                About Venode Labs
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Tier({
  tier,
}: {
  tier: (typeof siteConfig.tiers)[keyof typeof siteConfig.tiers];
}) {
  return (
    <div className="bg-paper p-8 sm:p-10">
      <div className="flex items-baseline justify-between">
        <h3 className="text-[22px] tracking-tightest text-ink-900">
          {tier.name}
        </h3>
        <span className="font-mono text-[13px] text-ink-500">{tier.price}</span>
      </div>
      <p className="mt-2 text-[15px] text-ink-500">{tier.blurb}</p>
      <ul className="mt-7 space-y-3">
        {tier.features.map((f) => (
          <li
            key={f}
            className="flex items-baseline gap-3 text-[15px] leading-relaxed text-ink-700"
          >
            <span className="font-mono text-[11px] text-ink-400" aria-hidden>
              —
            </span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href={tier.href}
        className="group mt-9 inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
      >
        {tier.cta}
        <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
      </a>
    </div>
  );
}
