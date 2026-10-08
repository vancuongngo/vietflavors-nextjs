import type { NextConfig } from "next";

// Set NEXT_PUBLIC_BASE_PATH (e.g. "/vietflavors-nextjs") when hosting on a
// GitHub Pages project site. Leave empty for a custom domain or user site.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
