import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `How ${siteConfig.name} handles your data — in short, it does not collect what you type into its tools.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="container-wide max-w-2xl py-12">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-slate-500">
        Plain-language summary of how this site treats your data.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">
        What the tools collect: nothing
      </h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        Every tool on {siteConfig.name} runs entirely in your browser.
        Passwords, links, text and any other input you provide are processed on
        your own device and are never transmitted to or stored on our servers.
        We could not show you what you typed even if we wanted to.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">
        The one external request
      </h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        The Password Breach Checker is the only tool that contacts the
        internet. It hashes your password locally with SHA-1 and sends just the
        first five characters of that hash to the Have I Been Pwned Pwned
        Passwords API. That fragment cannot be reversed into your password, and
        your password itself never leaves your device. This is the standard
        k-anonymity model.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">
        Cookies and analytics
      </h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        The site sets no tracking cookies of its own. If advertising is enabled,
        third-party ad partners (such as Google AdSense) may set cookies to
        display and measure ads; you can control these through your browser
        settings and your ad provider&apos;s preferences. Any analytics used is
        limited to aggregate, non-identifying traffic measurement.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">External links</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        This site links to third-party products and websites, including
        affiliate partners. Once you follow a link, the privacy practices of
        that destination apply, not ours. We encourage you to review their
        policies.
      </p>

      <h2 className="mt-10 text-xl font-bold text-white">Contact</h2>
      <p className="mt-4 leading-relaxed text-slate-300">
        For any privacy question, email{" "}
        <a
          href={`mailto:${siteConfig.contactEmail}`}
          className="text-accent hover:underline"
        >
          {siteConfig.contactEmail}
        </a>
        . If this policy changes, the updated version will always be available
        on this page.
      </p>
    </div>
  );
}
