import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer";

// next.config.ts
const nextConfig: NextConfig = {
  output: "standalone",
  reactStrictMode: true,
  transpilePackages: ["@everydaymoney/pro-blocks"],
};

export default withContentlayer(nextConfig);

