// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
const nextConfig = {
  // output: 'standalone',
  /* config options here */
  images: {
    remotePatterns: [
      {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
          port: '',
          pathname: '/**',
      },
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
