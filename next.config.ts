import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // libera domínios externos para next/image
  images: {
    domains: ["raw.githubusercontent.com"],
  },

  // mantém seu header personalizado
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|ico|css|js)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
