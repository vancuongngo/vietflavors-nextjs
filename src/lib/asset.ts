const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prefix a /public asset path with the configured basePath. */
export const asset = (path: string) => `${basePath}${path}`;

/** Absolute URL for a site path, used for metadata, sitemap and JSON-LD. */
export const absoluteUrl = (path = "/") => {
  const origin = process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://vancuongngo.github.io";
  return `${origin}${basePath}${path === "/" ? "/" : path}`;
};
