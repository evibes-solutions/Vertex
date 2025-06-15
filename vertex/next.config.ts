/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Set to true because Next export does not support optimized images
    domains: [],       // No external image domains needed for static export
  },
  output: 'export',     // This enables static export
};

export default nextConfig;
