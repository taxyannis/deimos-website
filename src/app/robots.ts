import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/site";

// Allow-all crawl with a sitemap pointer. No route is disallowed — every
// public route is intended to be indexable; removed/redirected paths
// (/services, /jurisdictions, /experience, /situations, /sectors) simply
// aren't listed in the sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
