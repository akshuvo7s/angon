/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static export for Netlify
  images: {
    unoptimized: true, // required: Netlify's static hosting can't run next/image's optimizer
  },
  trailingSlash: true, // avoids Netlify routing issues with static export folders
};

export default nextConfig;
