import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "About Venode Labs — a small research lab building cybersecurity intelligence tools, including Hugo.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <article className="container-page pt-20 pb-24 sm:pt-28">
      <p className="label">Lab</p>
      <h1 className="mt-8 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tightest">
        <span className="font-medium">Venode Labs.</span>{" "}
        <span className="text-ink-500">
          A small research lab building tools for the people defending things.
        </span>
      </h1>

      <div className="mt-12 max-w-prose space-y-12 text-[17px] leading-[1.7] text-ink-700">
        <p>
          We work on cybersecurity intelligence — the kind of slow, careful
          analysis that turns a queue of alerts into a story, a sample into a
          hypothesis, an incident into something a team can actually learn
          from.
        </p>

        <p>
          Hugo is our first public product. It is a language model trained for
          this work, and it is shipped as a research preview because that is
          what it is — a thing we are still learning how to build well, in the
          open, with the people who do this work for a living.
        </p>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            What we believe.
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Calibration beats confidence. A model that knows what it does not know is more useful than one that does not.",
              "The artefact is the work. A good investigation that nobody can read is half-done.",
              "Defenders deserve good tools. Most security work is still done by tired people with too many tabs open.",
              "Publishing the failure is part of the science.",
            ].map((x) => (
              <li key={x} className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-ink-400">—</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            Who we are.
          </h2>
          <p className="mt-5">
            A small team of analysts, engineers and researchers. We have spent
            years on the defender side of cybersecurity and a few years
            building language models. Hugo is what happens when those two
            careers sit together at one desk.
          </p>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            How to reach us.
          </h2>
          <p className="mt-5">
            For Hugo, custom builds, partnerships, journalism, or anything
            else —{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink-900 underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            . Or the longer{" "}
            <Link
              href="/contact"
              className="text-ink-900 underline-offset-4 hover:underline"
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
