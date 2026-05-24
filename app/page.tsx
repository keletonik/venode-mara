import Link from "next/link";
import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/Icons";
import MaraIntro from "@/components/MaraIntro";

export const metadata = pageMetadata({
  title: siteConfig.displayName,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "venode mara",
    "cyber defence language model",
    "ai for cyber defenders",
    "threat intelligence llm",
  ],
});

const researchAreas = [
  {
    n: "01",
    title: "Post-training and variant fine-tuning.",
    text: "Mara is post-trained on threat reports, IR write-ups, malware analyses and detection logic, and evaluated on what defenders actually do, not on benchmark trivia.",
  },
  {
    n: "02",
    title: "Long-context inference.",
    text: "200K context as the default, not a tier upgrade. A whole IR ticket, sandbox report and packet capture in one prompt. Document-first reasoning, retrieval kept thin.",
  },
  {
    n: "03",
    title: "Editorial alignment.",
    text: "Teaching the model to hold back. Calibrated confidence. Refusal of operational offensive work. No padded answers, no enthusiasm on someone else's behalf.",
  },
  {
    n: "04",
    title: "Inference economics.",
    text: "Latency, batching, caching, cost per million tokens. What it takes to run a serious cyber model at a price a small team can defend.",
  },
];

const customBuilds = [
  {
    title: "Designed and trained to spec.",
    text: "On your detection logic, your historical IR, your runbooks, your sources. Mara learns how your team thinks rather than how the public internet does.",
  },
  {
    title: "On-site, hosted, or both.",
    text: "Run it on your hardware behind your firewall, or on ours, or split the difference. The choice stays yours; we sign whatever you need us to sign.",
  },
  {
    title: "Your data does not train anything else.",
    text: "We do not pool customer data into a shared training set. Your corpus trains your model and only your model.",
  },
  {
    title: "No advertisers. No resale.",
    text: "We do not sell data, sell access to data, or hand it to a third party. Not for revenue, not for partnerships, not at all.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section
        aria-labelledby="hero-h"
        className="border-b border-hairline"
      >
        <div className="container-page grid gap-14 py-24 sm:py-32 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <span className="eyebrow">
              Venode · A research lab
            </span>
            <h1
              id="hero-h"
              className="display mt-7 text-[clamp(2.75rem,7vw,5.5rem)] leading-[1.02]"
            >
              Quiet research.{" "}
              <em>Working tools for defenders.</em>
            </h1>
          </div>

          <div className="md:col-span-5 md:mt-2">
            <p className="lede max-w-md text-[18px] leading-[1.55] text-ink-2">
              Venode is an AI research lab. Mara is our language model for
              cyber defence, built to triage at speed, reason under
              uncertainty, and stay out of the attacker&apos;s way.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/mara" className="btn-primary">
                See Mara <ArrowRight className="h-3 w-3" />
              </Link>
              <Link href="#mara" className="btn-ghost">
                See products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* P-01 · MARA CENTERPIECE */}
      <MaraIntro />

      {/* VENODE LABS */}
      <section aria-labelledby="labs-h" className="border-b border-hairline">
        <div className="container-page py-28 sm:py-36">
          <header className="max-w-3xl">
            <h2
              id="labs-h"
              className="display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]"
            >
              Venode Labs.
            </h2>
            <p className="mt-6 max-w-xl text-[18px] leading-[1.55] text-ink-2">
              Two halves of the lab: the research upstream of Mara, and the
              models we build to spec for teams who need their own.
            </p>
          </header>

          <h3 className="eyebrow mt-16">Research areas</h3>

          <ol className="mt-8 divide-y divide-hairline border-y border-hairline">
            {researchAreas.map((a) => (
              <li
                key={a.n}
                className="grid items-baseline gap-6 py-8 md:grid-cols-[3rem_1fr]"
              >
                <span className="font-mono text-[12px] uppercase text-accent" style={{ letterSpacing: "0.22em" }}>
                  {a.n}
                </span>
                <div>
                  <h4 className="font-display text-[clamp(1.25rem,2vw,1.625rem)] font-bold tracking-display text-ink">
                    {a.title}
                  </h4>
                  <p className="mt-3 max-w-2xl text-[16.5px] leading-[1.65] text-ink-2">
                    {a.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CUSTOM BUILDS — warm surface band */}
      <section
        aria-labelledby="builds-h"
        className="on-warm border-b border-hairline"
        style={{ background: "#F4F1EA" }}
      >
        <div className="container-page grid gap-12 py-28 sm:py-36 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <span className="eyebrow">L-01 · Custom builds</span>
            <h3
              id="builds-h"
              className="display mt-7 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08]"
            >
              Custom builds.{" "}
              <em>Built for you, not trained on you.</em>
            </h3>
            <p className="mt-7 max-w-md text-[17px] leading-[1.6] text-ink-2">
              If you don&apos;t want a shared product, we build one for you.
              On-site, hosted, or hybrid. We design and train on your corpus,
              ship the result to your stack, and stay out of your data. No
              telemetry into a shared pool. No advertisers. No resale, ever.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="btn-primary"
              >
                Talk to us <ArrowRight className="h-3 w-3" />
              </a>
              <Link href="/about" className="btn-ghost">
                How we work
              </Link>
            </div>
          </div>

          <ol className="md:col-span-7 md:mt-2">
            {customBuilds.map((b, i) => (
              <li
                key={b.title}
                className={`grid items-baseline gap-6 py-7 md:grid-cols-[3rem_1fr] ${
                  i > 0 ? "border-t border-hairline" : ""
                }`}
              >
                <span className="font-mono text-[12px] uppercase text-ink-2" style={{ letterSpacing: "0.22em" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-[19px] font-bold tracking-display text-ink">
                    {b.title}
                  </h4>
                  <p className="mt-2 max-w-xl text-[16px] leading-[1.6] text-ink-2">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* JOIN THE PREVIEW — enterprise CTA */}
      <section
        id="join"
        aria-labelledby="join-h"
        className="border-b border-hairline"
      >
        <div className="container-page grid gap-12 py-28 sm:py-36 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-6">
            <span className="eyebrow">P-01 · Enterprise preview</span>
            <h2
              id="join-h"
              className="display mt-7 text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]"
            >
              Join the Mara preview.{" "}
              <em>For organisations, not individual users.</em>
            </h2>
            <p className="mt-7 max-w-md text-[17px] leading-[1.6] text-ink-2">
              Mara is in private preview with a small cohort of security
              organisations. The preview is shaped for SOCs, IR teams and
              threat-intel functions inside enterprises and government. Tell us
              about your team, your stack and your deployment and we will be in
              touch.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link href="/join" className="btn-primary">
                Apply for the preview <ArrowRight className="h-3 w-3" />
              </Link>
              <a
                href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Mara preview")}`}
                className="btn-ghost"
              >
                Email us instead
              </a>
            </div>
          </div>

          <ul className="md:col-span-6 md:mt-2">
            {[
              {
                label: "Mara + Hugo",
                text: "The team tier: $30 per seat per month, organisation minimum of 5 seats. SSO, audit logs, tenant isolation.",
              },
              {
                label: "Tenant-deployed",
                text: "Hosted by venode, in your tenant, or hybrid — your call. Your data stays in your environment.",
              },
              {
                label: "B2B onboarding",
                text: "Briefing call, paper trail for procurement, security review, MSA and DPA. The boring parts done properly.",
              },
              {
                label: "No training on your data",
                text: "Your corpus does not train any other model. Not for revenue, not for partnerships, not at all.",
              },
            ].map((b, i) => (
              <li
                key={b.label}
                className={`grid items-baseline gap-6 py-6 md:grid-cols-[8rem_1fr] ${
                  i > 0 ? "border-t border-hairline" : ""
                }`}
              >
                <span
                  className="font-mono text-[11px] uppercase text-accent"
                  style={{ letterSpacing: "0.18em" }}
                >
                  {b.label}
                </span>
                <p className="text-[15.5px] leading-[1.65] text-ink-2">
                  {b.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BUILT IN THE OPEN — final CTA */}
      <section aria-labelledby="cta-h">
        <div className="container-page py-28 sm:py-40">
          <h2
            id="cta-h"
            className="display max-w-3xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.03]"
          >
            Built in the open.
          </h2>
          <p className="mt-7 max-w-xl text-[18px] leading-[1.55] text-ink-2">
            The research is open. Read it to see what we are building, what we
            are sketching, and what we have decided Mara will never do.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link href="/research" className="btn-primary">
              Read research <ArrowRight className="h-3 w-3" />
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="btn-ghost"
            >
              Say hello
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
