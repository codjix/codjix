import path from "node:path";
import { NextConfig } from "next";

const bundle = process.env.BUNDLE;
const mantine = path.join(process.cwd(), "assets/scss/_mantine");

const nextConfig: NextConfig = {
  output: bundle == "1" ? "standalone" : undefined,
  experimental: {
    optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    serverSourceMaps: false,
  },
  sassOptions: {
    implementation: "sass-embedded",
    additionalData: `@use "${mantine.replace(/\\/g, "/")}" as mantine;`,
  },
};

export default nextConfig;
