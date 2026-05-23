import Link from "next/link";
import { siteConfig } from "@/site.config";
import { MaraWordmark, VenodeMark } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-hairline">
      <div className="container-page flex flex-wrap items-center justify-between gap-6 py-10">
        <div className="flex items-center gap-3">
          <Link href="/">
            <MaraWordmark
              showGlyph={false}
              className="text-[16px]"
            />
          </Link>
          <span className="text-ink-3">·</span>
          <a
            href={siteConfig.labUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-baseline"
          >
            <VenodeMark className="text-[14px]" />
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-[14px] text-ink-2">
          <Link href="/privacy" className="hover:text-ink">
            Privacy
          </Link>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="hover:text-ink"
          >
            {siteConfig.contactEmail}
          </a>
          <span
            className="font-mono text-[11px] uppercase text-ink-3"
            style={{ letterSpacing: "0.18em" }}
          >
            © {year} venode
          </span>
        </div>
      </div>
    </footer>
  );
}
