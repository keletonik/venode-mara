import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Safety",
  description:
    "How Hugo is built, what it refuses, how we evaluate it, and how to disclose problems responsibly.",
  path: "/safety",
});

export default function SafetyPage() {
  return (
    <article className="container-page pt-20 pb-24 sm:pt-28">
      <p className="label">Safety</p>
      <h1 className="mt-8 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tightest">
        <span className="font-medium">Safety</span>{" "}
        <span className="text-ink-500">is the work, not the disclaimer.</span>
      </h1>
      <p className="mt-7 max-w-xl text-[18px] leading-relaxed text-ink-600">
        Hugo is a dual-use tool by definition. Everything that helps a
        defender investigate an attack would help an attacker plan one. We
        take that seriously and write down our position clearly.
      </p>

      <div className="mt-16 max-w-prose space-y-14 text-[17px] leading-[1.7] text-ink-700">
        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            What Hugo will not do.
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Author functional offensive code targeting a specific named victim, environment or asset.",
              "Author novel exploit code for unpatched vulnerabilities.",
              "Help with operational planning of intrusions, fraud or extortion.",
              "Defame, doxx or attribute attacks to identifiable individuals.",
              "Produce content for harassment, child safety violations, or other prohibited categories.",
            ].map((x) => (
              <li key={x} className="flex items-baseline gap-3">
                <span className="font-mono text-[11px] text-ink-400">—</span>
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[15px] text-ink-500">
            These boundaries are enforced through training, refusal behaviour
            and a separate review layer. They are not perfect. The model card
            documents the failure modes we have measured.
          </p>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            What Hugo will help with.
          </h2>
          <ul className="mt-5 space-y-3">
            {[
              "Detection engineering, threat modelling, red-team / blue-team education.",
              "Analysis of samples already in the wild and reported on publicly.",
              "Reasoning about adversary TTPs at the level of frameworks like ATT&CK.",
              "Writing the artefact: post-mortems, customer notes, runbooks, detection rules.",
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
            How we evaluate.
          </h2>
          <p className="mt-5">
            We test Hugo on the work, not on trivia. Our evaluation panel
            includes practising SOC analysts, IR consultants, threat-intel
            leads and an external red team. They run live cases, score
            calibration and refusals, and challenge the model in the
            directions they know it should resist. We publish the results,
            including the failure modes.
          </p>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            Responsible disclosure.
          </h2>
          <p className="mt-5">
            If you find a way to make Hugo do something it should not, or a
            failure of judgement that matters, please tell us before telling
            anyone else. We respond inside one business day and credit
            researchers who would like to be credited.
          </p>
          <p className="mt-4">
            Email{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}?subject=Safety%20report`}
              className="text-ink-900 underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>{" "}
            with the subject &ldquo;Safety report&rdquo;.
          </p>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            A note on the boundary.
          </h2>
          <p className="mt-5">
            Where the line between defensive and offensive sits is a judgement
            call, and not always ours alone. We talk about specific cases in
            our research notes — including the ones where we changed our
            minds. Read{" "}
            <Link
              href="/research/working-in-the-open"
              className="text-ink-900 underline-offset-4 hover:underline"
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
