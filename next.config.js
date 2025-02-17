/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
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
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
    ];
  },
  // Augmenter la taille maximale des requêtes
  api: {
    bodyParser: {
      sizeLimit: '10mb',
    },
    responseLimit: '10mb',
  },
}

module.exports = nextConfig
