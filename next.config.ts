import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // /services was merged back into /advisory (v1 scope decision: one
  // strategic + practical advisory page, not two near-duplicate ones).
  // Permanent redirect since this is a durable structural decision, not a
  // temporary migration.
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/advisory#capabilities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
