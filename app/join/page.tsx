import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import JoinForm from "./JoinForm";

export const metadata = pageMetadata({
  title: "Join the preview",
  description:
    "Mara is in private preview for organisations. Tell us about your team, your stack and your security posture, and we will be in touch.",
  path: "/join",
  keywords: [
    "mara preview",
    "enterprise cyber defence ai",
    "venode mara enterprise",
    "request access mara",
  ],
});

export default function JoinPage() {
  return (
    <>
      <section className="border-b border-hairline">
        <div className="container-page grid gap-14 py-24 sm:py-32 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="eyebrow">P-01 · Enterprise preview</span>
            <h1 className="display mt-7 text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04]">
              Join the Mara preview. <em>Built for teams that defend things.</em>
            </h1>
          </div>
          <div className="md:col-span-5 md:mt-2">
            <p className="lede max-w-md text-[18px] leading-[1.55] text-ink-2">
              Mara is in private preview with a small cohort of security
              organisations. The preview is shaped for SOCs, IR teams and
              threat-intel functions inside enterprises and government — not
              for individual users.
            </p>
            <p className="mt-5 max-w-md text-[15.5px] leading-[1.6] text-ink-2/85">
              The team tier — <strong className="font-semibold text-ink">Mara + Hugo</strong> —
              is per-seat with a 5-seat organisation minimum. Tell us about
              your organisation and your security posture below. A human at
              venode reads every submission and we typically reply inside one
              business day.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-hairline">
        <div className="container-page py-20 sm:py-28">
          <JoinForm contactEmail={siteConfig.contactEmail} />
        </div>
      </section>

      <section>
        <div className="container-page py-20 sm:py-28">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
                What happens next.
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  {
                    n: "01",
                    text: "We read what you sent and check that Mara is the right fit for what your team is trying to do.",
                  },
                  {
                    n: "02",
                    text: "If it is, a venode engineer schedules a 30-minute conversation about your stack, deployment and threat model.",
                  },
                  {
                    n: "03",
                    text: "We propose a preview shape — tenant, retention, model, integrations — and a paper trail your procurement team can read.",
                  },
                  {
                    n: "04",
                    text: "If we both agree, we move to a 60-day preview inside your tenant. No advertisers. No data resale. Your corpus does not train anyone else.",
                  },
                ].map((s) => (
                  <li
                    key={s.n}
                    className="grid items-baseline gap-4 border-t border-hairline pt-4 md:grid-cols-[2.5rem_1fr]"
                  >
                    <span
                      className="font-mono text-[12px] uppercase text-accent"
                      style={{ letterSpacing: "0.22em" }}
                    >
                      {s.n}
                    </span>
                    <p className="text-[15.5px] leading-[1.65] text-ink-2">
                      {s.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
                Not the right form?
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[1.65] text-ink-2">
                If you are an individual analyst, student, or curious reader,
                Mara has a free tier you can use today — no enterprise form
                needed.
              </p>
              <p className="mt-4 max-w-md text-[16px] leading-[1.65] text-ink-2">
                For press, partnerships or safety reports, write to{" "}
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="text-ink underline-offset-4 hover:underline"
                >
                  {siteConfig.contactEmail}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
