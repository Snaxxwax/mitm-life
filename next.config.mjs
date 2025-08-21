import { withContentlayer } from 'next-contentlayer';
// Simplified config without next-safe for now
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    mdxRs: true,
  },
  // Disable server-side features for static export
  swcMinify: true,
  
  // Configure paths for static export
  distDir: 'out',
  
  // Ensure all pages are generated at build time
  generateEtags: false,
  
  // Disable features that require server runtime
  compress: false,
  
  // Headers for security (handled by next-safe)
  async headers() {
    return [];
  },
};

// Simplified without security headers for now
const safeConfig = (config) => config;

export default withBundleAnalyzer(withContentlayer(nextConfig));