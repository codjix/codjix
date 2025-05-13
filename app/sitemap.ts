import type { MetadataRoute } from "next";
import { CONFIG, PAGES } from "@/features/const";

export const revalidate = 0;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map(page => ({
    url: `${CONFIG.url + page.href}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));
}
