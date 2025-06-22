import type { NextConfig } from "next";

const nextConfig: NextConfig = {
eslint: {
    ignoreDuringBuilds: true, // ✅ This disables ESLint during production build
  },
 

};

export default nextConfig;
