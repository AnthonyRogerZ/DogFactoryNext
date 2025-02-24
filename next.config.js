/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; img-src * data: blob:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.google.com https://www.gstatic.com https://tagmanager.google.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'",
          },
          
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), microphone=(), camera=()',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Redirection des anciens liens WordPress
      {
        source: '/index.php/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/wp-content/uploads/:path*',
        destination: '/images/:path*',
        permanent: true,
      },
      {
        source: '/category/:slug',
        destination: '/categories/:slug',
        permanent: true,
      },
      {
        source: '/tag/:slug',
        destination: '/tags/:slug',
        permanent: true,
      },
      {
        source: '/author/:slug',
        destination: '/team/:slug',
        permanent: true,
      },
      {
        source: '/ou-nous-trouver/',
        destination: '/nous-trouver/',
        permanent: true,
      },
      {
        source: '/conditions-generales-de-vente/',
        destination: '/cgv/',
        permanent: true,
      },
      // Nouvelle redirection pour /contactez-nous
      {
        source: '/contactez-nous',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
  // Optimisations SEO
  poweredByHeader: false, // Supprime l'en-tête X-Powered-By
  compress: true,         // Active la compression Gzip
  reactStrictMode: true,
  swcMinify: true,        // Utilise SWC pour la minification
};

module.exports = nextConfig;
