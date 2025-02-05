/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    loader: "custom",
    loaderFile: "./src/utils/image-loader.js",
  },
};

export default nextConfig;
