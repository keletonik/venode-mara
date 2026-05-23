import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: `How Venode Labs handles data on and around the ${siteConfig.displayName} website.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="container-page pt-20 pb-24 sm:pt-28">
      <p className="label">Privacy</p>
      <h1 className="mt-8 text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tightest">
        Privacy.
      </h1>
      <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-ink-500">
        Short, plain, and current. This page covers the website you are
        reading; the Hugo product has its own data terms inside the app.
      </p>

      <div className="mt-14 max-w-prose space-y-12 text-[17px] leading-[1.7] text-ink-700">
        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            This site.
          </h2>
          <p className="mt-5">
            This marketing site does not require accounts and does not run
            advertising. We use minimal, aggregate analytics to count visits
            to a page — no profile of any individual reader, no third-party
            advertising cookies.
          </p>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            Hugo.
          </h2>
          <p className="mt-5">
            What you put into Hugo, and what Hugo says back, is private to
            your session. On the free tier we keep transcripts only long
            enough to investigate abuse and to improve refusal behaviour, and
            we delete them on a documented schedule. On Pro and custom
            deployments your transcripts stay in your tenant; we do not see
            them.
          </p>
          <p className="mt-4">
            We never train on your inputs without explicit, separate opt-in.
          </p>
        </section>

        <section>
          <h2 className="text-[clamp(1.5rem,2.5vw,1.875rem)] tracking-tightest text-ink-900">
            Contact.
          </h2>
          <p className="mt-5">
            Privacy questions —{" "}
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-ink-900 underline-offset-4 hover:underline"
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
