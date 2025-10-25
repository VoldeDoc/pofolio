/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
    ],
    unoptimized: true,
  },
  output: 'standalone',
}

export default nextConfig
