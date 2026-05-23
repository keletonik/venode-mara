import Reveal from "./Reveal";

/**
 * Model card panel — a dense, mono-styled spec sheet.
 * The numbers are illustrative for this preview; replace from
 * the real evaluation report before launch.
 */

type Row = { label: string; value: string; accent?: boolean };
type Group = { name: string; rows: Row[] };

const GROUPS: Group[] = [
  {
    name: "Identity",
    rows: [
      { label: "model", value: "mara-v0.1" },
      { label: "family", value: "venode-research" },
      { label: "license", value: "preview · TOS apply" },
    ],
  },
  {
    name: "Capacity",
    rows: [
      { label: "context", value: "200,000 tokens" },
      { label: "modality", value: "text / structured" },
      { label: "latency · TTFT", value: "38 ms" },
    ],
  },
  {
    name: "Training corpus",
    rows: [
      { label: "threat reports", value: "2,300,000" },
      { label: "malware analyses", value: "480,000" },
      { label: "IR write-ups", value: "110,000" },
      { label: "detection rules", value: "73,000" },
    ],
  },
  {
    name: "Evaluation",
    rows: [
      { label: "cybench", value: "0.62" },
      { label: "cybergym", value: "0.71" },
      { label: "calibration · ECE", value: "0.04" },
      { label: "analyst-panel realism", value: "0.78", accent: true },
    ],
  },
  {
    name: "Refusal behaviour",
    rows: [
      { label: "offensive asks", value: "99.7 %", accent: true },
      { label: "defensive asks", value: "0.3 %" },
      { label: "ambiguous · escalated", value: "12.4 %" },
    ],
  },
  {
    name: "Build",
    rows: [
      { label: "built", value: "2026-04-18" },
      { label: "weights", value: "closed for now" },
      { label: "status", value: "research preview" },
    ],
  },
];

export default function ModelCard() {
  return (
    <section id="model-card" className="border-b border-hairline">
      <div className="container-page py-28 sm:py-36">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <span className="eyebrow">05 · Model card</span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="display mt-7 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
                The spec sheet,{" "}
                <span className="quiet font-normal">in the open.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-[16.5px] leading-[1.6] text-ink-2">
                What Mara is, what it was trained on, how it scored, and how
                often it refuses what it should. Numbers are from the
                v0.1 preview eval; the full report is published with each
                version.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <a
                href="#"
                className="btn-ghost mt-8"
                aria-disabled
              >
                Full eval report (soon)
              </a>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-7">
            <div
              className="border border-hairline bg-[#0c0b0e]"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(244,241,234,0.04), 0 30px 80px -40px rgba(200,51,75,0.18)",
              }}
            >
              {/* header bar */}
              <div className="flex items-center justify-between border-b border-hairline px-5 py-3">
                <span
                  className="font-mono text-[11px] uppercase text-ink-2"
                  style={{ letterSpacing: "0.22em" }}
                >
                  mara · model card · v0.1
                </span>
                <span
                  className="font-mono text-[11px] uppercase text-ink-3"
                  style={{ letterSpacing: "0.22em" }}
                >
                  signed · venode-labs
                </span>
              </div>

              <div className="divide-y divide-hairline">
                {GROUPS.map((g) => (
                  <Group key={g.name} group={g} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Group({ group }: { group: Group }) {
  return (
    <div className="px-5 py-5 sm:px-7 sm:py-6">
      <h3
        className="font-mono text-[10.5px] uppercase text-ink-3"
        style={{ letterSpacing: "0.22em" }}
      >
        {group.name}
      </h3>
      <dl className="mt-3 divide-y divide-hairline">
        {group.rows.map((r) => (
          <div
            key={r.label}
            className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-2.5"
          >
            <dt
              className="font-mono text-[12px] uppercase text-ink-2"
              style={{ letterSpacing: "0.14em" }}
            >
              {r.label}
            </dt>
            <dd
              className={`font-mono text-[13px] tabular-nums ${
                r.accent ? "text-accent" : "text-ink"
              }`}
              style={{ letterSpacing: "0.05em" }}
            >
              {r.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
