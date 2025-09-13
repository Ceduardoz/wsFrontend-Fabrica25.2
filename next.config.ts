import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|png|webp|ico|css|js)", // aplica em imagens e CSS/JS
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate", // impede cache
          },
        ],
      },
    ];
  },
};

export default nextConfig;
