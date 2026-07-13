import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Approved public routes only. Deliberately excludes /jurisdictions (308 →
// /coverage) and /services (308 → /advisory#capabilities), and the removed
// /experience, /situations, /sectors and Insights.
const ROUTES = ["", "/firm", "/advisory", "/coverage", "/contact", "/legal", "/privacy"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
