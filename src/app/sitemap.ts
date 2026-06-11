import type { MetadataRoute } from "next";

const baseUrl = "https://payom.tj";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/api", "/login", "/register"];
  return routes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
