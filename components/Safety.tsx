import Reveal from "./Reveal";

const willNot = [
  "Author functional offensive code targeting a specific named victim, environment or asset.",
  "Write novel exploit code for unpatched vulnerabilities.",
  "Help with operational planning of intrusions, fraud or extortion.",
  "Defame, doxx, or attribute attacks to identifiable individuals.",
];

const will = [
  "Detection engineering, threat modelling, red-team and blue-team education.",
  "Analysis of samples already in the wild and reported on publicly.",
  "Reasoning about adversary TTPs at the level of frameworks like ATT&CK.",
  "Drafting the artefact: post-mortems, customer notes, runbooks, rules.",
];

export default function Safety() {
  return (
    <section
      id="safety"
      className="border-b border-hairline"
      style={{ background: "#0c0b0e" }}
    >
      <div className="container-page py-28 sm:py-36">
        <Reveal>
          <span className="eyebrow">06 · Safety</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-7 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            Safety is the work,{" "}
            <span className="quiet font-normal">not the disclaimer.</span>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.6] text-ink-2">
            Mara is a dual-use tool by definition. Almost everything that
            helps a defender investigate an attack would help an attacker
            plan one. We take that seriously, draw the lines explicitly, and
            write them down.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2">
          <Reveal  className="bg-[#0c0b0e] p-8 sm:p-10">
            <h3
              className="font-mono text-[12px] uppercase text-accent"
              style={{ letterSpacing: "0.22em" }}
            >
              Mara will not
            </h3>
            <ul className="mt-6 space-y-3">
              {willNot.map((x) => (
                <li
                  key={x}
                  className="flex items-baseline gap-3 text-[15.5px] leading-[1.6] text-ink"
                >
                  <span className="font-mono text-[11px] text-accent">×</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal  className="bg-[#0c0b0e] p-8 sm:p-10" delay={120}>
            <h3
              className="font-mono text-[12px] uppercase text-ink-2"
              style={{ letterSpacing: "0.22em" }}
            >
              Mara will help with
            </h3>
            <ul className="mt-6 space-y-3">
              {will.map((x) => (
                <li
                  key={x}
                  className="flex items-baseline gap-3 text-[15.5px] leading-[1.6] text-ink"
                >
                  <span className="font-mono text-[11px] text-ink-2">→</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={240}>
          <p className="mt-10 max-w-2xl text-[15.5px] leading-[1.6] text-ink-2">
            These boundaries are enforced through training, refusal
            behaviour and a separate review layer. They are not perfect — the
            model card documents the failure modes we have measured. If you
            find a way to make Mara do something it should not, write to us
            before anyone else.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
