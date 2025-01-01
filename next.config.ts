import type { NextConfig } from "next";
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: "export", // Generates static HTML/CSS/JS files
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === "production" ? "/next-portfolio" : "", // Important for GitHub Pages
  assetPrefix: process.env.NODE_ENV === "production" ? "/next-portfolio/" : "", // Important for GitHub Pages
};

export default nextConfig;
