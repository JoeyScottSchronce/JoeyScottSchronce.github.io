/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static export
    trailingSlash: true, // Adds trailing slashes to URLs (recommended for GitHub Pages)
    basePath: '',
    assetPrefix: '',
};

export default nextConfig;
