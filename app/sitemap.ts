import type { MetadataRoute } from "next";
import { canonical } from "@/lib/seo";
import { notes } from "@/lib/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "/",
    "/mara",
    "/research",
    "/safety",
    "/about",
    "/contact",
    "/privacy",
  ];

  return [
    ...staticPaths.map((p) => ({
      url: canonical(p),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "/" ? 1 : 0.7,
    })),
    ...notes.map((n) => ({
      url: canonical(`/research/${n.slug}`),
      lastModified: new Date(n.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
