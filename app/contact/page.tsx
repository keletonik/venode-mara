import { siteConfig } from "@/site.config";
import { pageMetadata } from "@/lib/seo";
import { ArrowRight } from "@/components/Icons";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Talk to Venode Labs about Hugo, custom builds, partnerships, safety, or anything else.",
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
    <article className="container-page pt-20 pb-24 sm:pt-28">
      <p className="label">Connect</p>
      <h1 className="mt-8 max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] tracking-tightest">
        <span className="font-medium">Talk to us.</span>{" "}
        <span className="text-ink-500">
          We read everything. We answer most of it.
        </span>
      </h1>

      <ul className="mt-16 max-w-2xl divide-y divide-rule border-y border-rule">
        {channels.map((c) => (
          <li key={c.label}>
            <a
              href={`mailto:${c.address}?subject=${encodeURIComponent(c.subject)}`}
              className="group grid items-baseline gap-6 py-7 md:grid-cols-[1fr_auto]"
            >
              <div>
                <p className="text-[17px] tracking-tightest text-ink-900 group-hover:underline">
                  {c.label}
                </p>
                <p className="mt-1.5 font-mono text-[13px] text-ink-500">
                  {c.address}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-[14px] text-ink-700">
                Write
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-14 max-w-prose text-[15px] leading-relaxed text-ink-500">
        Prefer something less direct? We post research notes regularly — the
        slow lane is{" "}
        <a
          href="/research"
          className="text-ink-800 underline-offset-4 hover:underline"
        >
          /research
        </a>
        .
      </p>
    </article>
  );
}
