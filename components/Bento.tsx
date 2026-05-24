import Reveal from "./Reveal";
import { MaraGlyph } from "./Icons";

/**
 * Bento grid — the 2026 layout signal applied honestly.
 *
 * One primary 2×2 cell containing the model statement and the
 * constellation glyph, plus four smaller cells covering capability
 * facets. The cells use a glass-on-dark surface (.bento-cell)
 * defined in globals.css. Stacks to a single column on mobile.
 */

const SMALL_CELLS = [
  {
    eyebrow: "Long context",
    title: "Hold a whole investigation in one prompt.",
    body: "Sandbox report, IR ticket, packet capture, the parent script — all in scope at once. Document-first, retrieval kept thin.",
  },
  {
    eyebrow: "Refusal-first",
    title: "Won't write exploits. Won't plan intrusions.",
    body: "Operational offensive work is refused at the model layer. The policy is published in the model card; it is not a wrapper.",
  },
  {
    eyebrow: "Triage at speed",
    title: "Reads the alert the way an analyst does.",
    body: "Facts first. Hypotheses second. Conclusions only when the evidence has earned them. Mara tells you what would change its mind.",
  },
];

const WIDE_CELL = {
  eyebrow: "Open by default",
  title: "Eval report ships with every release.",
  body: "We will not put a benchmark number on this page that we cannot back up. The first signed eval report from venode laboratories ships with v1.0.",
};

export default function Bento() {
  return (
    <section id="bento" className="border-t border-hairline">
      <div className="container-page py-32 sm:py-40">
        <Reveal>
          <span className="eyebrow">Inside Mara</span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            One model, end to end.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-ink-2">
            Five things Mara is shaped to do well — laid out the way the
            work actually fits together.
          </p>
        </Reveal>

        {/* Bento grid: 3 columns × 3 rows on desktop, 1 column stacked
            on mobile. The primary cell spans 2×2 (top-left). */}
        <div className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3 md:grid-rows-3">
          {/* Primary cell — model statement + constellation glyph */}
          <Reveal delay={160} className="md:col-span-2 md:row-span-2">
            <div className="bento-cell relative flex h-full min-h-[320px] flex-col justify-between md:min-h-[480px]">
              <div>
                <span className="bento-eyebrow">The model</span>
                <h3 className="bento-title mt-6 text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.08]">
                  One conversation,{" "}
                  <span className="text-ink-2">from triage to write-up.</span>
                </h3>
                <p className="bento-body mt-5 max-w-md">
                  Mara reads, reasons and writes inside one session — the
                  alert, the dig, the post-mortem. No swapping between five
                  tools. No re-pasting the context.
                </p>
              </div>

              {/* Constellation glyph sits in the bottom-right of the
                  primary cell, sized large, in cream + accent. */}
              <div className="mt-12 flex items-end justify-between gap-4">
                <span
                  className="font-mono text-[11px] uppercase text-ink-3"
                  style={{ letterSpacing: "0.18em" }}
                >
                  mara · cyber language model
                </span>
                <MaraGlyph className="h-16 w-16 text-ink sm:h-20 sm:w-20" />
              </div>
            </div>
          </Reveal>

          {/* Three small cells — top-right, mid-right, bottom-left */}
          {SMALL_CELLS.map((c, i) => (
            <Reveal key={c.eyebrow} delay={240 + i * 80}>
              <div className="bento-cell flex h-full min-h-[200px] flex-col">
                <span className="bento-eyebrow">{c.eyebrow}</span>
                <h3 className="bento-title mt-5 text-[clamp(1.1rem,1.5vw,1.375rem)] leading-snug">
                  {c.title}
                </h3>
                <p className="bento-body mt-4">{c.body}</p>
              </div>
            </Reveal>
          ))}

          {/* Wide bottom cell — spans 2 columns */}
          <Reveal delay={480} className="md:col-span-2">
            <div className="bento-cell flex h-full min-h-[180px] flex-col justify-between">
              <div>
                <span className="bento-eyebrow">{WIDE_CELL.eyebrow}</span>
                <h3 className="bento-title mt-5 text-[clamp(1.25rem,2vw,1.625rem)] leading-snug">
                  {WIDE_CELL.title}
                </h3>
                <p className="bento-body mt-4 max-w-xl">{WIDE_CELL.body}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
