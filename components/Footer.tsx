import Link from "next/link";
import { siteConfig } from "@/site.config";
import { tools } from "@/lib/tools";
import { guides } from "@/lib/guides";
import { Logo } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-ink-700/70 bg-ink-950">
      <div className="mx-auto grid max-w-content gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <Logo className="h-7 w-7" />
            <span className="font-semibold text-white">{siteConfig.name}</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">{siteConfig.tagline}</p>
          <p className="mt-3 text-xs text-slate-500">
            Every tool runs entirely in your browser. We never see or store
            what you type.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Tools</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {tools.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/tools/${t.slug}`}
                  className="text-slate-400 transition hover:text-accent"
                >
                  {t.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Guides</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link
                  href={`/guides/${g.slug}`}
                  className="text-slate-400 transition hover:text-accent"
                >
                  {g.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Site</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-slate-400 hover:text-accent">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-slate-400 hover:text-accent">
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/disclosure"
                className="text-slate-400 hover:text-accent"
              >
                Affiliate disclosure
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-700/70">
        <div className="mx-auto max-w-content px-4 py-6 text-xs text-slate-500 sm:px-6">
          <p>
            &copy; {year} {siteConfig.name}. Educational security tools — no
            warranty. Always use your own judgement.
          </p>
          <p className="mt-2">
            Some links on this site are affiliate links; we may earn a
            commission at no extra cost to you. See our{" "}
            <Link href="/disclosure" className="underline hover:text-accent">
              affiliate disclosure
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
