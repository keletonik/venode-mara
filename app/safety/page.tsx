import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Safety",
  description:
    "How Mara is built, what it refuses, how we evaluate it, and how to disclose problems responsibly.",
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <article className="container-page py-24 sm:py-32">
      <span className="eyebrow">L-02 · Safety</span>
      <h1 className="display mt-7 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04]">
        Safety is the work, <em>not the disclaimer.</em>
      </h1>
      <p className="mt-8 max-w-xl text-[18px] leading-[1.55] text-ink-2">
        Mara is a dual-use tool by definition. Almost everything that helps a
        defender investigate an attack would help an attacker plan one. We
        take that seriously, draw the lines explicitly, and write them down.
      </p>

      <div className="mt-16 max-w-prose space-y-14">
        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            What Mara will not do.
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Author functional offensive code targeting a specific named victim, environment or asset.",
              "Author novel exploit code for unpatched vulnerabilities.",
              "Help with operational planning of intrusions, fraud or extortion.",
              "Defame, doxx, or attribute attacks to identifiable individuals.",
              "Produce content for harassment, child safety violations, or other prohibited categories.",
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
          <p className="mt-5 font-serif text-[15.5px] italic leading-[1.55] text-ink-2">
            These boundaries are enforced through training, refusal behaviour
            and a separate review layer. They are not perfect. The model card
            documents the failure modes we have measured.
          </p>
        </section>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            What Mara will help with.
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Detection engineering, threat modelling, red-team / blue-team education.",
              "Analysis of samples already in the wild and reported on publicly.",
              "Reasoning about adversary TTPs at the level of frameworks like ATT&CK.",
              "Writing the artefact: post-mortems, customer notes, runbooks, detection rules.",
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
            How we evaluate.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            We test Mara on the work, not on trivia. Our evaluation panel
            includes practising SOC analysts, IR consultants, threat-intel
            leads and an external red team. They run live cases, score
            calibration and refusals, and challenge the model in the
            directions they know it should resist. We publish the results,
            including the failure modes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            Responsible disclosure.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            If you find a way to make Mara do something it should not, or a
            failure of judgement that matters, please tell us before telling
            anyone else. We respond inside one business day and credit
            researchers who would like to be credited.
          </p>
          <p className="mt-4 text-[17px] leading-[1.75] text-ink">
            Email{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=Safety%20report`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            with the subject &ldquo;Safety report&rdquo;.
          </p>
        </section>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            On the boundary itself.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            Where the line between defensive and offensive sits is a judgement
            call, and not always ours alone. We write up specific cases in our
            research notes, including the ones where we changed our minds.
            Read{" "}
            <Link
              href="/research/working-in-the-open"
              className="text-ink underline-offset-4 hover:underline"
            >
              Working in the open
            </Link>{" "}
            for the longer argument.
          </p>
        </section>
      </div>
    </article>
  );
}
