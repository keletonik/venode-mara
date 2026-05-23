import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: `How venode handles data on and around the ${siteConfig.displayName} website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="container-page py-24 sm:py-32">
      <span className="eyebrow">Privacy</span>
      <h1 className="display mt-7 text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04]">
        Privacy.
      </h1>
      <p className="mt-7 max-w-xl text-[18px] leading-[1.55] text-ink-2">
        Short, plain, and current. This page covers the marketing site you
        are reading; the Mara product has its own data terms inside the app.
      </p>

      <div className="mt-14 max-w-prose space-y-12">
        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            This site.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            This marketing site does not require accounts and does not run
            advertising. We use minimal, aggregate analytics to count visits
            to a page — no profile of any individual reader, no third-party
            advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            Mara.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            What you put into Mara, and what Mara says back, is private to
            your session. On the free tier we keep transcripts only long
            enough to investigate abuse and improve refusal behaviour, and we
            delete them on a documented schedule. On Pro and custom
            deployments your transcripts stay in your tenant; we do not see
            them.
          </p>
          <p className="mt-4 text-[17px] leading-[1.75] text-ink">
            We never train on your inputs without explicit, separate opt-in.
          </p>
        </section>

        <section>
          <h2 className="font-display text-[clamp(1.5rem,2.75vw,2rem)] font-bold leading-[1.2] tracking-display text-ink">
            Contact.
          </h2>
          <p className="mt-5 text-[17px] leading-[1.75] text-ink">
            Privacy questions —{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink underline-offset-4 hover:underline"
            >
              {siteConfig.contactEmail}
            </a>
            . When this policy changes the updated version will live on this
            page.
          </p>
        </section>
      </div>
    </article>
  );
}
