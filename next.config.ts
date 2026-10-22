import type { NextConfig } from "next";

const region = process.env.NEXT_PUBLIC_POSTHOG_REGION === "eu" ? "eu" : "us";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/ingest/static/:path*", destination: `https://${region}-assets.i.posthog.com/static/:path*` },
      { source: "/ingest/:path*", destination: `https://${region}.i.posthog.com/:path*` },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
