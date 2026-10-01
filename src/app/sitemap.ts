import type { MetadataRoute } from "next";
import { siteUrl, navLinks, legalLinks } from "@/content/academy";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/apply", ...navLinks.map((l) => l.href), ...legalLinks.map((l) => l.href)];
  const now = new Date();
  return routes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : path === "/apply" ? 0.9 : 0.7,
  }));
}
