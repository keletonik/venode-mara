/* ─────────────────────────────────────────────────────────────────────
 * mara · venode's cybersecurity language model.
 *
 * MASTER PROMPT (this iteration)
 *
 *   ROLE: brand designer + motion designer + typographer + Next.js
 *   engineer + senior security product writer.
 *
 *   TASTE BAR: openai.com, anthropic.com, mistral.ai, stripe.com,
 *   linear.app. Editorial calm. Premium restraint. One beautiful
 *   visual artifact, not five decorative ones.
 *
 *   KILL LIST (template tropes to remove)
 *   - CRT scanlines, crosshair corner ticks, telemetry panels.
 *   - Section eyebrows numbered "01 ·", "02 ·".
 *   - The marquee scrolling band.
 *   - Heavy 800/900 display weights with extreme tracking.
 *   - Mono labels everywhere. Mono only where it earns its keep.
 *   - Card-tick hover affordances.
 *
 *   KEEP LIST
 *   - Dark palette · cream type · oxblood accent USED SPARINGLY.
 *   - The wordmark with blinking cursor.
 *   - IntersectionObserver fade-up reveals.
 *
 *   THIS PASS
 *   - Calm announcement hero: "Introducing Mara." paired with the
 *     FieldMark — a generative point-field with one anomaly.
 *   - An editorial manifesto block "Why mara" in a narrow centered
 *     column.
 *   - Demo transcript reframed as an editorial conversation, no
 *     terminal chrome.
 *   - Capabilities as four declarative rows on hairlines.
 *   - Pricing as a calm three-column comparison.
 *   - Model card as a calm two-column table.
 *   - Safety as a single centered manifesto.
 *   - A signature closing.
 * ─────────────────────────────────────────────────────────────────── */

import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight, VenodeMark } from "@/components/Icons";
import Hero from "@/components/Hero";
import Argument from "@/components/Argument";
import DemoTranscript from "@/components/DemoTranscript";
import Capabilities from "@/components/Capabilities";
import Tiers from "@/components/Tiers";
import ModelCard from "@/components/ModelCard";
import Safety from "@/components/Safety";
import Reveal from "@/components/Reveal";

export const metadata = pageMetadata({
  title: siteConfig.displayName,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "mara",
    "venode mara",
    "cybersecurity language model",
    "ai for cyber defenders",
    "threat intelligence llm",
  ],
});

export default function Page() {
  return (
    <>
      <Hero />
      <Argument />

      {/* Demo — presented as an editorial transcript, no terminal chrome */}
      <section id="demo" className="border-t border-hairline">
        <div className="container-page py-32 sm:py-40">
          <Reveal>
            <span className="eyebrow">In conversation</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
              What it feels like to use Mara.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl text-[17px] leading-[1.65] text-ink-2">
              An illustrative SOC exchange. The real product behaves the
              same way; the transcript below is condensed for reading.
            </p>
          </Reveal>

          <Reveal delay={280} className="mt-16">
            <DemoTranscript />
          </Reveal>
        </div>
      </section>

      <Capabilities />
      <Tiers />
      <ModelCard />
      <Safety />

      {/* Closing — calm signature */}
      <section className="border-t border-hairline">
        <div className="container-narrow py-32 text-center sm:py-40">
          <Reveal>
            <p className="font-mono text-[11px] uppercase text-ink-3" style={{ letterSpacing: "0.18em" }}>
              Open Mara
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="display mt-6 text-[clamp(2.5rem,5.5vw,4.25rem)] leading-[1.05]">
              For the people defending things.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <a href={siteConfig.appUrl} className="btn-primary">
                Join the preview <ArrowRight className="h-3 w-3" />
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="arrow-link"
              >
                Talk to venode <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-20 flex items-center justify-center gap-2">
              <VenodeMark className="text-[14px]" />
              <span
                className="font-mono text-[11px] uppercase text-ink-3"
                style={{ letterSpacing: "0.18em" }}
              >
                · cyber lab · {new Date().getFullYear()}
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
