import Reveal from "./Reveal";

const willNot = [
  "Author functional offensive code targeting a specific named victim, environment or asset.",
  "Write novel exploit code for unpatched vulnerabilities.",
  "Help with operational planning of intrusions, fraud or extortion.",
  "Defame, doxx, or attribute attacks to identifiable individuals.",
];

export default function Safety() {
  return (
    <section id="safety" className="border-t border-hairline">
      <div className="container-narrow py-32 sm:py-40">
        <Reveal>
          <span className="eyebrow">Safety</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08]">
            Safety is the work, not the disclaimer.
          </h2>
        </Reveal>

        <div className="mt-10 space-y-6 text-[18px] leading-[1.75] text-ink-2">
          <Reveal delay={120}>
            <p>
              Mara is a dual-use tool by definition. Almost everything that
              helps a defender investigate an attack would help an attacker
              plan one. We take that seriously, draw the lines explicitly,
              and write them down.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-ink">
              Mara will not —
            </p>
          </Reveal>
        </div>

        <Reveal delay={280}>
          <ul className="mt-6 space-y-4 text-[17px] leading-[1.65] text-ink">
            {willNot.map((x) => (
              <li key={x} className="flex items-baseline gap-3">
                <span className="mt-1 h-px w-3 bg-accent" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={360}>
          <p className="mt-10 text-[16.5px] leading-[1.7] text-ink-2">
            These boundaries are enforced through training, refusal behaviour
            and a separate review layer. They are not perfect — the model
            card documents the failure modes we have measured. If you find a
            way to make Mara do something it should not, write to us before
            anyone else.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
