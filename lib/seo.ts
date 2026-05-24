import type { Metadata } from "next";
import { siteConfig } from "@/site.config";

export function canonical(path: string): string {
  return siteConfig.url.replace(/\/$/, "") + path;
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = canonical(opts.path);
  const isHome = opts.path === "/";
  const fullTitle = isHome
    ? `${siteConfig.displayName} · ${siteConfig.tagline}`
    : `${opts.title} · ${siteConfig.displayName}`;

  return {
    title: { absolute: fullTitle },
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: opts.description,
      url,
      siteName: siteConfig.displayName,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
    },
  };
}
