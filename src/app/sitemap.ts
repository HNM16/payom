import type { MetadataRoute } from "next";

const baseUrl = "https://payom.tj";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/about",
    "/integrations",
    "/pricing",
    "/blog",
    "/faq",
    "/contacts",
    "/api",
    "/login",
    "/register",
    "/legal/offer",
    "/legal/privacy",
  ];
  return routes.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
