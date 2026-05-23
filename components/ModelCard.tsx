import Reveal from "./Reveal";

/**
 * Model card — a calm two-column key/value table. Numbers are
 * illustrative for v0.1 preview.
 */

const rows: { label: string; value: string; accent?: boolean }[] = [
  { label: "Model", value: "mara-v0.1" },
  { label: "Family", value: "venode-research" },
  { label: "Context", value: "200,000 tokens" },
  { label: "Latency · TTFT", value: "38 ms" },
  { label: "Training corpus", value: "2.3M reports · 480K samples · 110K IRs" },
  { label: "Cybench", value: "0.62" },
  { label: "CyberGym", value: "0.71" },
  { label: "Calibration · ECE", value: "0.04" },
  { label: "Analyst-panel realism", value: "0.78", accent: true },
  { label: "Refusal · offensive", value: "99.7 %", accent: true },
  { label: "Refusal · defensive", value: "0.3 %" },
  { label: "Built", value: "2026-04-18" },
  { label: "Weights", value: "closed for now" },
  { label: "Status", value: "research preview" },
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
                The spec sheet, in the open.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-md text-[17px] leading-[1.65] text-ink-2">
                What Mara is, what it was trained on, how it scored, and how
                often it refuses what it should. Numbers are from the v0.1
                preview evaluation; the full report is published with each
                version.
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="md:col-span-7">
            <dl className="divide-y divide-hairline border-y border-hairline">
              {rows.map((r) => (
                <div
                  key={r.label}
                  className="grid grid-cols-[1fr_auto] items-baseline gap-6 py-4"
                >
                  <dt className="text-[15.5px] text-ink-2">{r.label}</dt>
                  <dd
                    className={`font-mono text-[14px] tabular-nums ${
                      r.accent ? "text-accent" : "text-ink"
                    }`}
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
