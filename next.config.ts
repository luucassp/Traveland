import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "d2i7eq829tbbje.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "d3hrj27b4bz3ky.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
