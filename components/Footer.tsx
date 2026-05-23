import Link from "next/link";
import { siteConfig } from "@/site.config";
import { VenodeMark, MaraWordmark } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-hairline bg-black">
      <div className="container-page py-20">
        <div className="grid items-end gap-12 md:grid-cols-2">
          <div>
            <MaraWordmark className="text-[64px] sm:text-[88px]" />
            <p className="mt-6 max-w-md text-[15.5px] leading-[1.6] text-ink-2">
              A cybersecurity intelligence model by venode. Built for the
              people defending things.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 md:justify-self-end">
            <FooterCol title="Mara">
              <FooterLink href={siteConfig.appUrl} external>Open Mara</FooterLink>
              <FooterLink href="#capabilities">Capabilities</FooterLink>
              <FooterLink href="#pricing">Pricing</FooterLink>
              <FooterLink href="#safety">Safety</FooterLink>
            </FooterCol>
            <FooterCol title="Venode">
              <FooterLink href={siteConfig.labUrl} external>venode.ai</FooterLink>
              <FooterLink href={`mailto:${siteConfig.contactEmail}`}>Contact</FooterLink>
              <FooterLink href="/privacy">Privacy</FooterLink>
            </FooterCol>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-3 border-t border-hairline pt-6">
          <div className="flex items-center gap-3">
            <VenodeMark className="text-[16px]" />
            <span
              className="font-mono text-[11px] uppercase text-ink-3"
              style={{ letterSpacing: "0.22em" }}
            >
              · A research lab
            </span>
          </div>
          <span
            className="font-mono text-[11px] uppercase text-ink-3"
            style={{ letterSpacing: "0.10em" }}
          >
            © {year} venode · all rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4
        className="font-mono text-[11px] uppercase text-ink-3"
        style={{ letterSpacing: "0.22em" }}
      >
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  if (external) {
    return (
      <li>
        <a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener" : undefined}
          className="text-[14.5px] text-ink-2 transition hover:text-ink"
        >
          {children}
        </a>
      </li>
    );
  }
  return (
    <li>
      <Link
        href={href}
        className="text-[14.5px] text-ink-2 transition hover:text-ink"
      >
        {children}
      </Link>
    </li>
  );
}
