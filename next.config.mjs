/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: { unoptimized: true },
    basePath: '/yoga-cloud',
    assetPrefix: '/yoga-cloud/',
    trailingSlash: true
  };
  
  export default nextConfig;
  