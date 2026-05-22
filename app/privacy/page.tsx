import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data — in short, it does not collect what you type into its tools.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <article className="container-wide py-16">
      <header className="border-b border-ink-700 pb-10">
        <span className="font-mono text-xs uppercase tracking-widewide text-ash">
          § Privacy
        </span>
        <h1 className="mt-4 font-display text-5xl leading-none tracking-tightest text-cream sm:text-6xl">
          Privacy policy.
        </h1>
        <p className="mt-5 max-w-2xl text-base text-ash">
          A plain-language summary of how this site treats your data.
        </p>
      </header>

      <div className="mt-10 max-w-2xl text-[15px]">
        <h2 className="font-display text-3xl tracking-tightest text-cream">
          What the tools collect: nothing.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          Every tool on {siteConfig.name} runs entirely in your browser.
          Passwords, links, text and any other input you provide are processed
          on your own device and are never transmitted to or stored on our
          servers. We could not show you what you typed even if we wanted to.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          The one external request.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          The Password Breach Checker is the only tool that contacts the
          internet. It hashes your password locally with SHA-1 and sends just
          the first five characters of that hash to the Have I Been Pwned
          Pwned Passwords API. That fragment cannot be reversed into your
          password, and your password itself never leaves your device. This is
          the standard k-anonymity model.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          Cookies and analytics.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          The site sets no tracking cookies of its own. If advertising is
          enabled, third-party ad partners (such as Google AdSense) may set
          cookies to display and measure ads; you can control these through
          your browser settings and your ad provider&apos;s preferences. Any
          analytics used is limited to aggregate, non-identifying traffic
          measurement.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          External links.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          This site links to third-party products and websites, including
          affiliate partners. Once you follow a link, the privacy practices of
          that destination apply, not ours. We encourage you to review their
          policies.
        </p>

        <h2 className="mt-12 font-display text-3xl tracking-tightest text-cream">
          Contact.
        </h2>
        <p className="mt-5 leading-relaxed text-slate-300">
          For any privacy question, email{" "}
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="text-accent hover:underline"
          >
            {siteConfig.contactEmail}
          </a>
          . If this policy changes, the updated version will always be
          available on this page.
        </p>
      </div>
    </article>
  );
}
