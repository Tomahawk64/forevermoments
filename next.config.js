const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, '.'),
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    qualities: [60, 70, 75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pub-c41ff4189ff648c5845a1363c6ca266d.r2.dev',
      },
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
  reactStrictMode: true,
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Disable filesystem cache in development on Windows to prevent
      // ENOENT pack.gz race conditions and webpack HMR crashes
      config.cache = false
    }
    return config
  },
}

module.exports = nextConfig
