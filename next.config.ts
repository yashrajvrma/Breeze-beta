import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["prisma", "../node_modules/generated"],
  },
};

export default nextConfig;
