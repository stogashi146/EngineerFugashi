/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.figma.com',
        pathname: '/api/mcp/asset/**',
      },
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
      {
        protocol: 'https',
        hostname: 'cheepday.com',
      },
      {
        protocol: 'https',
        hostname: '*.cheepday.com',
      },
      {
        protocol: 'https',
        hostname: 'note.com',
      },
      {
        protocol: 'https',
        hostname: '*.note.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.st-note.com',
      },
    ],
  },
}

module.exports = nextConfig
