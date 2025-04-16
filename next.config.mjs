/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Re-enable for build
  basePath: "/profile",
  assetPrefix: "/profile/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
