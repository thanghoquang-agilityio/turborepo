/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Optimized device sizes for common breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Optimized image sizes for components (removed very small sizes)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Image optimization settings
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    dangerouslyAllowSVG: false,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Remote patterns for external images
    remotePatterns: [
      // Production API
      {
        protocol: 'https',
        hostname: 'next-js-p6iu.onrender.com',
        port: '',
        pathname: '/**',
      },
      // E-commerce API
      {
        protocol: 'https',
        hostname: 'e-commerce-api-2t2h.onrender.com',
        port: '',
        pathname: '/**',
      },
      // Development API - Strapi default
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/products',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
