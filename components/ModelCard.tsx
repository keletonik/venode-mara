import Reveal from "./Reveal";

/**
 * Model card — pre-launch honest. Lists what Mara IS, what it WILL be
 * trained on and evaluated against, and what we COMMIT TO publishing.
 * Specific numbers (Cybench scores, refusal rates, latency, build
 * date) are intentionally absent until v1.0 — we will not ship made-up
 * benchmark figures on a marketing page.
 */

type Row = { label: string; value: string; note?: string };
type Group = { name: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    name: "Identity",
    rows: [
      { label: "Model", value: "mara" },
      { label: "Family", value: "venode laboratories" },
      { label: "Status", value: "research preview · in progress" },
    ],
  },
  {
    name: "Capability surface",
    rows: [
      { label: "Modalities", value: "text · structured outputs" },
      { label: "Long context", value: "design target · published at release" },
      { label: "Tool use", value: "agentic, on Pro and custom builds" },
      { label: "Languages", value: "English at launch" },
    ],
  },
  {
    name: "Training",
    rows: [
      {
        label: "Corpus",
        value:
          "threat reports · malware analyses · IR write-ups · detection logic · adversary playbooks",
      },
      { label: "Curation", value: "venode + invited external reviewers" },
      { label: "Customer data", value: "never trained on by default" },
    ],
  },
  {
    name: "Evaluation",
    rows: [
      {
        label: "Eval panel",
        value:
          "practising SOC analysts · IR consultants · CTI leads · external red team",
      },
      {
        label: "What we measure",
        value:
          "triage realism · calibration · refusal quality · artefact usefulness",
      },
      {
        label: "First report",
        value: "published with v1.0",
      },
    ],
  },
  {
    name: "Refusal commitment",
    rows: [
      {
        label: "Offensive asks",
        value: "target ≥ 99% refusal",
      },
      {
        label: "Defensive asks",
        value: "target ≤ 1% over-refusal",
      },
      {
        label: "Policy",
        value: "documented in the model card, not bolted on",
      },
    ],
  },
  {
    name: "Openness",
    rows: [
      { label: "Weights", value: "closed for the preview" },
      { label: "Eval report", value: "published with each release" },
      { label: "Model card", value: "lives on this page" },
    ],
  },
];

export default function ModelCard() {
  return (
    <section id="model-card" className="border-t border-hairline">
      <div className="container-page py-32 sm:py-40">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <Reveal>
              <span className="eyebrow">Model card</span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display mt-6 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
                What we will publish, before we publish a model.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-[17px] leading-[1.65] text-ink-2">
                The model card lives on this page. It is intentionally
                spare while Mara is in preview — we will not ship a
                marketing page full of unverified benchmark numbers. The
                first eval report ships with v1.0.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-7">
            <div className="divide-y divide-hairline border-y border-hairline">
              {GROUPS.map((g) => (
                <Group key={g.name} group={g} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Group({ group }: { group: Group }) {
  return (
    <div className="py-7">
      <h3
        className="font-mono text-[10.5px] uppercase text-ink-3"
        style={{ letterSpacing: "0.18em" }}
      >
        {group.name}
      </h3>
      <dl className="mt-4 divide-y divide-hairline">
        {group.rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[10rem_1fr] items-baseline gap-6 py-3"
          >
            <dt className="text-[14.5px] text-ink-2">{r.label}</dt>
            <dd className="text-[14.5px] leading-[1.6] text-ink">
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
