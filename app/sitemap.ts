import type { MetadataRoute } from "next";
import { canonical } from "@/lib/seo";
import { tools } from "@/lib/tools";
import { guides } from "@/lib/guides";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = ["/", "/tools", "/guides", "/about", "/privacy", "/disclosure"];

  return [
    ...staticPaths.map((p) => ({
      url: canonical(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.6,
    })),
    ...tools.map((t) => ({
      url: canonical(`/tools/${t.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...guides.map((g) => ({
      url: canonical(`/guides/${g.slug}`),
      lastModified: new Date(g.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
