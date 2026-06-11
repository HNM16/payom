import type { MetadataRoute } from "next";
import { NAV_ITEMS } from "@/lib/data";

const baseUrl = "https://veltra.pay";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...NAV_ITEMS.map((n) => n.href), "/dashboard"];
  const unique = Array.from(new Set(routes));

  return unique.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
