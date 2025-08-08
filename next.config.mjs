/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',          // enables `next export`
    images: { unoptimized: true }, // required for GH Pages
    trailingSlash: true,       // nicer static URLs (optional)
  
    // ONLY if this is a *project page* (repo like user/yoga-cloud)
    basePath: '/yoga-cloud',
    assetPrefix: '/yoga-cloud/',
  };
  export default nextConfig;
  