import type { MetadataRoute } from "next";
import { CONFIG } from "@/features/const";

export default function robots(): MetadataRoute.Robots {
  return {
    sitemap: CONFIG.url + "/sitemap.xml",
    rules: {
      userAgent: "*",
      disallow: ["/api/", "/admin/"],
      allow: ["/"],
    },
  };
}
