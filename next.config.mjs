/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ibb.co" },
    ],
  },
  output: 'standalone',
  // Suppress hydration warnings caused by browser extensions
  reactStrictMode: true,
}

export default nextConfig
