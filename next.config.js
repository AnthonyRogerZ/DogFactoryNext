/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['maps.googleapis.com', 'localhost'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3002',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/galerie-photos-ancien',
        destination: '/galerie',
        permanent: true,
      },
      {
        source: '/gallery-old',
        destination: '/galerie',
        permanent: true,
      },
      {
        source: '/photos-ancien',
        destination: '/galerie',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
