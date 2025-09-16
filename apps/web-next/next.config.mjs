/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [440, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [14, 16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'next-js-p6iu.onrender.com',
        port: '',
        pathname: '/**',
      },
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
