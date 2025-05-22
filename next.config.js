/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "./",  // Ensures assets load correctly on GitHub Pages
    trailingSlash: true, // Helps with file path resolution
};

module.exports = nextConfig;
