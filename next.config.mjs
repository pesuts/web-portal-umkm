// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
          port: '',
          pathname: '/**',
      },
      {
          protocol: 'https',
          hostname: 'example.com',
          port: '',
          pathname: '/**',
      },
  ],
},
};

export default nextConfig;
