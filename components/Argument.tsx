import Reveal from "./Reveal";

/**
 * "Why Mara" — a manifesto in a narrow centered column. Reads as a
 * journal entry, not a section of a SaaS page.
 */
export default function Argument() {
  return (
    <section id="why" className="border-t border-hairline">
      <div className="container-narrow py-32 sm:py-40">
        <Reveal>
          <span className="eyebrow">Why mara</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.1]">
            AI is now genuinely useful for cybersecurity — for both sides.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-6 text-[18px] leading-[1.75] text-ink-2">
          <Reveal delay={120}>
            <p>
              We see the same evidence everyone else does. Models are getting
              good at finding bugs, planning attack chains and writing
              convincing pretexts. They are getting better faster than the
              average security team can adopt them.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              The honest position is to put that capability firmly in the
              hands of the people defending things. Mara is venode&apos;s
              contribution. A model that reads like a senior analyst, refuses
              operational offensive work, knows what it does not know, and
              produces the artefact at the end of the shift.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <p>
              We are building it slowly, in public, with the people who have
              done this work for a long time. The pages that follow are what
              we have so far.
            </p>
          </Reveal>
        </div>

        <Reveal delay={360}>
          <p
            className="mt-16 font-mono text-[11px] uppercase text-ink-3"
            style={{ letterSpacing: "0.18em" }}
          >
            — venode · cyber lab · 2026
          </p>
        </Reveal>
      </div>
    </section>
  );
}
