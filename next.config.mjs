/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https', // singular: protocol
        hostname: 'i.bb.co',
      },
    ],
  },
};

export default nextConfig;
