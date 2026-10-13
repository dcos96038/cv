import type { NextConfig } from "next";

const CANONICAL = "https://cv.diegocoscolla.dev";
// Legacy hosts that must 308 to the canonical host in a single hop.
// cv.diegocoscolla.dev, *.vercel.app previews and localhost are not listed, so they are unaffected.
const LEGACY_HOSTS = ["diegocoscolla.dev", "www.diegocoscolla.dev", "cv.diegocos.tech"];
const host = (h: string) => ({ type: "host" as const, value: `^${h.replace(/\./g, "\\.")}$` });

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    const hostRedirects = LEGACY_HOSTS.flatMap((h) => [
      // Resolve legacy language URLs directly on the canonical host (one hop instead of two).
      { source: "/", has: [host(h), { type: "query" as const, key: "language", value: "es" }], destination: `${CANONICAL}/es`, permanent: true },
      { source: "/en", has: [host(h)], destination: `${CANONICAL}/`, permanent: true },
      { source: "/:path*", has: [host(h)], destination: `${CANONICAL}/:path*`, permanent: true },
    ]);
    return [
      ...hostRedirects,
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
