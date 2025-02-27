const withContentlayer = require("next-contentlayer2").withContentlayer;

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@nextui-org/react", "@nextui-org/theme"],
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  redirects: require("./next-redirect.js"),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // ignoreBuildErrors: process.env.IS_VERCEL_ENV === "true",
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "opencollective-production.s3.us-west-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "logo.clearbit.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "nextui.org",
      },
      {
        protocol: "https",
        hostname: "heroui-assets.nyc3.cdn.digitaloceanspaces.com",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
