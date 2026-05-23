import Reveal from "./Reveal";

const capabilities = [
  {
    n: "01",
    title: "Read like an analyst.",
    text: "Facts first, hypotheses second, conclusions only when the evidence has earned them. Mara reads a sandbox report, a CTI brief or a packet capture the way a senior analyst does.",
  },
  {
    n: "02",
    title: "Hold many hypotheses at once.",
    text: "Triage is not a classification problem. Mara keeps a small set of explanations live, scores each against new evidence, and tells you which question would actually separate them.",
  },
  {
    n: "03",
    title: "Refuse the offensive ask.",
    text: "Mara will not write functional exploit code, plan intrusions, or help with operational offensive work. The refusal behaviour is documented in the model card, not bolted on.",
  },
  {
    n: "04",
    title: "Produce the work.",
    text: "IR write-ups, post-mortems, customer notifications, detection rules, runbook updates. Mara drafts the artefact in the voice your team already uses.",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-hairline">
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <span className="eyebrow">02 · Capabilities</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Four habits,{" "}
            <span className="quiet font-normal">learned on purpose.</span>
          </h2>
        </Reveal>

        <ol className="mt-16 grid gap-px bg-hairline sm:grid-cols-2">
          {capabilities.map((c, i) => (
            <li key={c.n} className="bg-bg">
              <Reveal className="card-tick block p-8 sm:p-10" delay={i * 90}>
                <span
                  className="font-mono text-[12px] uppercase text-accent"
                  style={{ letterSpacing: "0.22em" }}
                >
                  {c.n}
                </span>
                <h3 className="mt-4 font-display text-[20px] font-extrabold tracking-tight text-ink">
                  {c.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-ink-2">
                  {c.text}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
