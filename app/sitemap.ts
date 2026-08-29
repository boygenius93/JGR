import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const ROUTES = [
  "",
  "/fractional-recruiting",
  "/talent-projects",
  "/who-we-help",
  "/about",
  "/faq",
  "/contact",
];

const LOW_PRIORITY_ROUTES = ["/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [...ROUTES, ...LOW_PRIORITY_ROUTES].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : LOW_PRIORITY_ROUTES.includes(route) ? 0.3 : 0.8,
  }));
}
