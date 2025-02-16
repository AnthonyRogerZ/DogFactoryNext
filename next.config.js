/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['maps.googleapis.com'],
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/galerie',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/photos',
        destination: '/',
        permanent: true,
      }
    ]
  },
}

module.exports = nextConfig
