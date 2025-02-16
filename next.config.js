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
