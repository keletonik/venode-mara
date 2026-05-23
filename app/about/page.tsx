import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About venode — a small AI research lab building Hugo, a cybersecurity intelligence model.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="container-page py-24 sm:py-32">
      <span className="eyebrow">L-01 · About</span>
      <h1 className="display mt-7 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04]">
        venode is a small research lab.{" "}
        <em>We build the tools we want to exist.</em>
      </h1>

      <div className="mt-14 max-w-prose space-y-12">
        <p className="text-[17px] leading-[1.75] text-ink">
          We work on cybersecurity intelligence — the slow, careful analysis
          that turns a queue of alerts into a story, a sample into a
          hypothesis, an incident into something a team can actually learn
          from.
        </p>

        <p className="text-[17px] leading-[1.75] text-ink">
          Hugo is our first public product. It is a language model trained
          for that work, and it is shipped as a research preview because that
          is what it is — a thing we are still learning to build well, in the
          open, with the people who do this work for a living.
        </p>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            What we believe.
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Calibration beats confidence. A model that knows what it does not know is more useful than one that does not.",
              "The artefact is the work. A good investigation that nobody can read is half-done.",
              "Defenders deserve good tools. Most security work is still done by tired people with too many tabs open.",
              "Publishing the failure is part of the science.",
            ].map((x) => (
              <li
                key={x}
                className="flex items-baseline gap-4 text-[16.5px] leading-[1.65] text-ink"
              >
                <span className="font-mono text-[11px] text-accent">—</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            How to reach us.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            For Hugo, custom builds, partnerships, journalism, or anything
            else —{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            . Or the longer{" "}
            <Link
              href="/contact"
              className="text-ink underline-offset-4 hover:underline"
            >
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
