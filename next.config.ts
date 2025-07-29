import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
    ignoreBuildErrors: true,
  },
   images: {
    domains: ['images.unsplash.com','api.builder.io'],
  },

};

export default nextConfig;
