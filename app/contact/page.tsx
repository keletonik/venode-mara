import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to venode about Hugo, custom builds, partnerships, safety, or anything else.",
  path: "/contact",
});

const channels = [
  {
    label: "Hugo, custom builds, partnerships",
    address: siteConfig.contactEmail,
    subject: "Hugo",
  },
  {
    label: "Safety reports & responsible disclosure",
    address: siteConfig.contactEmail,
    subject: "Safety report",
  },
  {
    label: "Press & research enquiries",
    address: siteConfig.contactEmail,
    subject: "Press",
  },
];

export default function ContactPage() {
  return (
    <article className="container-page py-24 sm:py-32">
      <span className="eyebrow">Connect</span>
      <h1 className="display mt-7 max-w-3xl text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.04]">
        Talk to us. <em>We read everything.</em>
      </h1>

      <ol className="mt-16 max-w-3xl divide-y divide-hairline border-y border-hairline">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={`mailto:${c.address}?subject=${encodeURIComponent(c.subject)}`}
              className="group grid items-baseline gap-6 py-8 md:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="font-display text-[20px] font-bold tracking-display text-ink group-hover:underline">
                  {c.label}
                </p>
                <p className="mt-1.5 font-mono text-[13px] uppercase text-ink-2" style={{ letterSpacing: "0.10em" }}>
                  {c.address}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 font-mono text-[12px] uppercase text-ink" style={{ letterSpacing: "0.10em" }}>
                Write
                <ArrowRight className="h-3 w-3 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ol>

      <p className="mt-14 max-w-prose text-[16px] leading-[1.65] text-ink-2">
        Prefer the slow lane? We post research notes regularly at{" "}
        <a href="/research" className="text-ink underline-offset-4 hover:underline">
          /research
        </a>
        .
      </p>
    </article>
  );
}
