import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { absoluteUrl } from "@/lib/asset";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return site.nav.map(({ href }) => ({
    url: absoluteUrl(href === "/" ? "/" : `${href}/`),
    changeFrequency: "monthly",
    priority: href === "/" ? 1 : 0.7,
  }));
}
