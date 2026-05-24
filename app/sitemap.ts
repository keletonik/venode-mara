import type { MetadataRoute } from "next";
import { canonical } from "@/lib/seo";
import { notes } from "@/lib/research";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    { path: "/", priority: 1 },
    { path: "/mara", priority: 0.9 },
    { path: "/join", priority: 0.8 },
    { path: "/research", priority: 0.7 },
    { path: "/about", priority: 0.5 },
    { path: "/safety", priority: 0.5 },
    { path: "/contact", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
  ];

  return [
    ...staticPaths.map((p) => ({
      url: canonical(p.path),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p.priority,
    })),
    ...notes.map((n) => ({
      url: canonical(`/research/${n.slug}`),
      lastModified: new Date(n.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
