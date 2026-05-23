import Reveal from "./Reveal";

/**
 * Four declarative habits, laid out as full-width rows separated by
 * hairlines. No card chrome, no hover affordances, no border-tick.
 * The typography does the work.
 */

const habits = [
  {
    n: "01",
    title: "Read like an analyst.",
    text: "Facts first, hypotheses second, conclusions only when the evidence has earned them.",
  },
  {
    n: "02",
    title: "Hold many explanations at once.",
    text: "Triage is not a classification problem. Mara keeps a small set of hypotheses live and tells you which question would actually separate them.",
  },
  {
    n: "03",
    title: "Refuse the offensive ask.",
    text: "Mara will not write functional exploit code, plan intrusions, or help with operational offensive work. The refusal is documented in the model card, not bolted on.",
  },
  {
    n: "04",
    title: "Produce the artefact.",
    text: "IR write-ups, post-mortems, customer notifications, detection rules, runbook updates. Mara writes in the voice your team already uses.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-t border-hairline">
      <div className="container-page py-32 sm:py-40">
        <Reveal>
          <span className="eyebrow">Capabilities</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            What Mara is shaped to do.
          </h2>
        </Reveal>

        <div className="mt-16">
          {habits.map((h, i) => (
            <Reveal key={h.n} delay={i * 90}>
              <div
                className={`grid items-baseline gap-6 py-10 md:grid-cols-12 md:gap-10 ${
                  i === 0 ? "border-t border-hairline" : ""
                } border-b border-hairline`}
              >
                <span
                  className="font-mono text-[12px] uppercase text-ink-3 md:col-span-1"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {h.n}
                </span>
                <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] leading-tight tracking-tight text-ink md:col-span-5">
                  {h.title}
                </h3>
                <p className="max-w-2xl text-[17px] leading-[1.65] text-ink-2 md:col-span-6">
                  {h.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
