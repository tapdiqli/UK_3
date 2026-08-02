import type { MetadataRoute } from "next";
import { site, getGuides } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/casinos",
    "/guides",
    "/about",
    "/contact",
    "/responsible-gambling",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const guideRoutes = getGuides().map((guide) => ({
    url: `${site.url}/guides/${guide.slug}`,
    lastModified: new Date(guide.updated),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...guideRoutes];
}
