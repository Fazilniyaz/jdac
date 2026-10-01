import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static frontend: export to plain HTML/CSS/JS. Works on Vercel and any static host.
  output: "export",
  images: {
    // next/image optimization is a server feature; disable for static export.
    unoptimized: true,
  },
  // Emit /about/index.html etc. so static hosts resolve routes cleanly.
  trailingSlash: true,
};

export default nextConfig;
