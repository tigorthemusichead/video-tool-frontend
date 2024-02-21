const API_URL = process.env.NEXT_PUBLIC_API_URL
const FILES_URL = process.env.NEXT_PUBLIC_FILES_URL

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${API_URL}/:path*`,
      },
      {
        source: '/files/:path*',
        destination: `${FILES_URL}/:path*`,
      }
    ]
  },
};

export default nextConfig;
