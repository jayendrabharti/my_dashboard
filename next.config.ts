import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mzafhevsxqsvnyuukypu.supabase.co",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
