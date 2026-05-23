import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Hugo",
  description:
    "Hugo is a cybersecurity intelligence model from Venode Labs. Triage at speed, reason under uncertainty, produce the work — without losing the analyst.",
  path: "/hugo",
  keywords: ["hugo llm", "cybersecurity ai model", "threat intelligence agent"],
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
    title: "Ask the discriminating question.",
    text: "When uncertain, Hugo says what it does not know and what it would need to know. It does not invent an answer. It points at the next sensor to look at.",
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
  "Source — GitHub, GitLab, Bitbucket",
];

export default function HugoPage() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-20 pb-20 sm:pt-28">
        <p className="label">{siteConfig.lab} · {siteConfig.name}</p>
        <h1 className="mt-8 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tightest">
          <span className="font-medium">Hugo</span>{" "}
          <span className="text-ink-500">
            sits beside the analyst — not in front of them.
          </span>
        </h1>
        <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-ink-600">
          A cybersecurity intelligence model trained to think the way good
          analysts think: carefully, with calibrated confidence, and with the
          discipline to say what it does not yet know.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={siteConfig.appUrl}
            className="group inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
          >
            Open Hugo
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </a>
          <Link
            href="#pricing"
            className="group inline-flex items-center gap-2 text-[15px] text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
          >
            See Hugo Pro
            <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-rule">
        <div className="container-page py-24 sm:py-28">
          <span className="label">What Hugo is good at</span>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-tightest">
            Four things Hugo is shaped to do well.
          </h2>

          <div className="mt-14 grid gap-12 sm:grid-cols-2">
            {capabilities.map((c, i) => (
              <div key={c.title}>
                <span className="label">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[20px] tracking-tightest text-ink-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-600">
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSCRIPTS */}
      <section className="border-t border-rule">
        <div className="container-page py-24 sm:py-28">
          <span className="label">In conversation</span>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-tightest">
            Three small scenes.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-600">
            Illustrative transcripts of Hugo at work. Real Hugo, when you open
            it, behaves the same way; these are condensed for reading.
          </p>

          <div className="mt-14 space-y-12">
            <Transcript
              label="A · Triaging an alert"
              lines={[
                {
                  who: "you",
                  text: "EDR popped this morning — process tree below, hash unknown. Sev?",
                },
                {
                  who: "hugo",
                  text: "Two things that change the answer: was wmic invoked from a script the user normally runs, and is the parent shell interactive? If both yes, lean low. If either no, treat as medium and pull the parent script. I'd want to see the script before I commit to a severity.",
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
              label="C · Drafting the write-up"
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

      {/* CONNECTORS / PRO */}
      <section id="pricing" className="border-t border-rule">
        <div className="container-page py-24 sm:py-28">
          <span className="label">Hugo Pro</span>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-tightest">
            The same brain, with hands.
          </h2>
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-ink-600">
            Hugo Pro keeps the model that already worked and gives it the
            connectors, the context, and the API to be useful across an entire
            investigation rather than a single message.
          </p>

          <div className="mt-12 grid gap-14 md:grid-cols-2">
            <div>
              <h3 className="label">Adds</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Agentic workflows over multiple artefacts.",
                  "Long-context investigations up to 200k tokens.",
                  "Private connectors into your tools.",
                  "Structured outputs (STIX, OpenCTI, MISP, JSON).",
                  "API access with usage metering.",
                  "Audit log of every reasoning step.",
                ].map((x) => (
                  <li
                    key={x}
                    className="flex items-baseline gap-3 text-[15px] leading-relaxed text-ink-700"
                  >
                    <span className="font-mono text-[11px] text-ink-400">—</span>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="label">Connects to</h3>
              <ul className="mt-4 space-y-3">
                {connectors.map((c) => (
                  <li
                    key={c}
                    className="flex items-baseline gap-3 text-[15px] leading-relaxed text-ink-700"
                  >
                    <span className="font-mono text-[11px] text-ink-400">—</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-rule pt-10">
            <span className="font-mono text-[15px] text-ink-700">
              {siteConfig.tiers.pro.price}
            </span>
            <a
              href={siteConfig.tiers.pro.href}
              className="group inline-flex items-center gap-2 text-[15px] text-ink-900 underline-offset-4 hover:underline"
            >
              Start Pro
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
            </a>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-[15px] text-ink-700 underline-offset-4 hover:text-ink-900 hover:underline"
            >
              Custom builds for teams
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
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
      <p className="label">{label}</p>
      <div className="mt-4 space-y-4 border-l border-rule pl-6">
        {lines.map((l, i) => (
          <div key={i} className="flex gap-4">
            <span
              className={`shrink-0 font-mono text-[12px] uppercase tracking-wider2 ${
                l.who === "hugo" ? "text-ink-900" : "text-ink-400"
              }`}
            >
              {l.who}
            </span>
            <p
              className={`text-[15.5px] leading-relaxed ${
                l.who === "hugo" ? "text-ink-800" : "text-ink-600"
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
