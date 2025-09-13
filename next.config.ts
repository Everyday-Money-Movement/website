import type { NextConfig } from "next";

// next.config.ts
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@everydaymoney/pro-blocks"],
};

export default nextConfig;

