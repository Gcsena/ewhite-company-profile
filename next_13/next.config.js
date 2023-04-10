/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/landingdev',
  trailingSlash: true,
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  output: "export" 
}

module.exports = nextConfig

