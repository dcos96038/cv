import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy query-string URLs → static language routes.
      { source: "/", has: [{ type: "query", key: "language", value: "es" }], destination: "/es", permanent: true },
      { source: "/en", destination: "/", permanent: true },
    ];
  },
  async rewrites() {
    // English is served at "/" from the statically generated /en page.
    return { beforeFiles: [{ source: "/", destination: "/en" }] };
  },
};

export default nextConfig;
