import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight, HugoWordmark } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Hugo",
  description:
    "Hugo is venode's language model for cyber defense. Triage at speed, reason under uncertainty, produce the work — without ceding the cyber advantage to attackers.",
  path: "/hugo",
  keywords: [
    "venode hugo",
    "cybersecurity language model",
    "ai for cyber defenders",
    "threat intelligence llm",
  ],
});

const capabilities = [
  {
    title: "Read like an analyst.",
    text: "Hugo reads a sandbox report, a CTI brief or a packet capture the way a senior analyst does — facts first, hypotheses second, conclusions only when the evidence has earned them.",
  },
  {
    title: "Hold many hypotheses at once.",
    text: "Triaging an alert is not a classification problem. Hugo keeps a small set of explanations live, scores each against new evidence, and tells you which question would actually separate them.",
  },
  {
    title: "Refuse the offensive ask.",
    text: "Hugo will not write functional exploit code, plan intrusions, or help with operational offensive work. The refusal behaviour is documented in the model card, not bolted on.",
  },
  {
    title: "Produce the work.",
    text: "IR write-ups, post-mortems, customer notifications, detection rules, runbook updates. Hugo drafts the artefact in the voice your team already uses.",
  },
];

const connectors = [
  "SIEM — Splunk, Sentinel, Elastic, Sumo",
  "EDR — CrowdStrike, SentinelOne, Defender",
  "Sandbox — Joe, Hatching, Cape",
  "TIP — MISP, OpenCTI",
  "Ticketing — Jira, ServiceNow, Tines",
  "Source — GitHub, GitLab",
];

export default function HugoPage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-hairline">
        <div className="container-page py-24 sm:py-32">
          <div className="grid gap-14 md:grid-cols-12">
            <div className="md:col-span-7">
              <span className="eyebrow">P-01 · Cyber language model</span>
              <div className="mt-10">
                <HugoWordmark className="h-24 w-auto text-ink sm:h-32" />
              </div>
              <h1 className="display mt-12 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]">
                Cybersecurity intelligence.{" "}
                <em>For the people defending things.</em>
              </h1>
            </div>

            <div className="md:col-span-5 md:mt-2">
              <p className="lede max-w-md text-[18px] leading-[1.55] text-ink-2">
                Hugo is a language model trained to do cyber defense work the
                way good analysts do it: carefully, with calibrated
                confidence, and with the discipline to say what it does not
                yet know.
              </p>
              <p className="mt-5 max-w-md text-[15.5px] leading-[1.6] italic text-ink-2/85">
                We should not cede the cyber advantage from AI to attackers
                and criminals. Hugo is venode&apos;s contribution to keeping
                that advantage with the defender.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href={siteConfig.appUrl} className="btn-primary">
                  Open Hugo <ArrowRight className="h-3 w-3" />
                </a>
                <Link href="#pricing" className="btn-ghost">
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-b border-hairline">
        <div className="container-page py-24 sm:py-32">
          <span className="eyebrow">What Hugo is shaped to do</span>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4vw,3rem)] leading-[1.08]">
            Four habits, learned on purpose.
          </h2>

          <ol className="mt-14 grid gap-px bg-hairline sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <li key={c.title} className="bg-bg p-7 sm:p-9">
                <span className="font-mono text-[12px] uppercase text-accent" style={{ letterSpacing: "0.22em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-[20px] font-bold tracking-display text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink-2">
                  {c.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TRANSCRIPTS */}
      <section className="border-b border-hairline">
        <div className="container-page py-24 sm:py-32">
          <span className="eyebrow">Three small scenes</span>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4vw,3rem)] leading-[1.08]">
            Hugo, in conversation.
          </h2>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-2">
            Illustrative transcripts. Real Hugo, when you open it, behaves the
            same way; these are condensed for reading.
          </p>

          <div className="mt-14 space-y-14">
            <Transcript
              label="A · Triaging an alert"
              lines={[
                {
                  who: "you",
                  text: "EDR popped this morning — process tree below, hash unknown. Sev?",
                },
                {
                  who: "hugo",
                  text: "Two things change the answer: was wmic invoked from a script the user normally runs, and is the parent shell interactive? If both yes, lean low. If either no, treat as medium and pull the parent script. I'd want to see the script before I commit to a severity.",
                },
              ]}
            />

            <Transcript
              label="B · Naming an actor"
              lines={[
                {
                  who: "you",
                  text: "Is this Lazarus?",
                },
                {
                  who: "hugo",
                  text: "Two overlaps — the loader stub and the C2 header — are consistent with several DPRK-aligned clusters, and also with three crimeware kits that borrow from them. I'd assess with moderate confidence that this is DPRK-related work; I would not name Lazarus specifically without seeing infrastructure or victimology. Happy to write that up if you want.",
                },
              ]}
            />

            <Transcript
              label="C · Drafting the customer note"
              lines={[
                {
                  who: "you",
                  text: "Draft the customer note. Keep it short, don't speculate.",
                },
                {
                  who: "hugo",
                  text: "Draft below. I have removed two sentences I would have written and you would have cut: the cause and the attribution. We do not yet know either. I have flagged the two open questions in brackets so they cannot ship by accident.",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* PRICING / PRO */}
      <section id="pricing" className="border-b border-hairline">
        <div className="container-page py-24 sm:py-32">
          <span className="eyebrow">P-01 · Pricing</span>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4vw,3rem)] leading-[1.08]">
            One Hugo. <em>Free for the curious. Pro for the work.</em>
          </h2>

          <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2">
            <div className="bg-bg p-8 sm:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[24px] font-extrabold tracking-display text-ink">
                  Free
                </h3>
                <span className="font-mono text-[13px] text-ink-2">
                  $0
                </span>
              </div>
              <p className="mt-2 text-[15px] text-ink-2">
                For analysts, students and the curious.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Hugo on the fast model.",
                  "Single-question triage and sample inspection.",
                  "Public CTI references.",
                  "Per-minute rate limit, no daily cap.",
                ].map((x) => (
                  <li
                    key={x}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.55] text-ink"
                  >
                    <span className="font-mono text-[11px] text-ink-2/60">—</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <a href={siteConfig.appUrl} className="btn-primary mt-10">
                Open Hugo <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="bg-bg p-8 sm:p-10">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-[24px] font-extrabold tracking-display text-ink">
                  Pro
                </h3>
                <span className="font-mono text-[13px] text-ink-2">
                  $20 / month
                </span>
              </div>
              <p className="mt-2 text-[15px] text-ink-2">
                For teams who do this for a living.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  "Hugo on the thinking model.",
                  "Multi-step investigations, agentic tool use.",
                  "Long-context up to 200K tokens.",
                  "Private connectors into your stack.",
                  "Structured outputs (STIX, MISP, JSON).",
                  "API access with usage metering.",
                ].map((x) => (
                  <li
                    key={x}
                    className="flex items-baseline gap-3 text-[15px] leading-[1.55] text-ink"
                  >
                    <span className="font-mono text-[11px] text-ink-2/60">—</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
              <a href={siteConfig.appUrl} className="btn-primary mt-10">
                Start Pro <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="eyebrow">Pro connects to</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {connectors.map((c) => (
                <li
                  key={c}
                  className="flex items-baseline gap-3 text-[15.5px] leading-[1.55] text-ink"
                >
                  <span className="font-mono text-[11px] text-ink-2/60">—</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-hairline pt-10">
            <Link href="/contact" className="btn-primary">
              Custom builds for teams <ArrowRight className="h-3 w-3" />
            </Link>
            <Link href="/safety" className="btn-ghost">
              Safety &amp; refusal behaviour
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function Transcript({
  label,
  lines,
}: {
  label: string;
  lines: { who: "you" | "hugo"; text: string }[];
}) {
  return (
    <div>
      <span className="eyebrow">{label}</span>
      <div className="mt-5 space-y-5 border-l border-hairline pl-6">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-4">
            <span
              className={`shrink-0 font-mono text-[11px] uppercase ${
                l.who === "hugo" ? "text-accent" : "text-ink-2/70"
              }`}
              style={{ letterSpacing: "0.22em" }}
            >
              {l.who}
            </span>
            <p
              className={`text-[16px] leading-[1.7] ${
                l.who === "hugo" ? "text-ink" : "text-ink-2"
              }`}
            >
              {l.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
