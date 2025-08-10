import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.PAGES_BASE_PATH,
  // Ensure static asset URLs are correctly prefixed on GitHub Pages
  assetPrefix: process.env.PAGES_BASE_PATH,
};

export default nextConfig;
