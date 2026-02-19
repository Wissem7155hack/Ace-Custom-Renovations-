/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isProd = process.env.NODE_ENV === 'production';
// when deploying to GitHub Pages we need the repo name as a prefix
const ghBase = '/Ace-Custom-Renovations-';

const nextConfig = {
    reactStrictMode: true,
    output: 'export', // enable static HTML export for GitHub Pages
    // apply basePath/assetPrefix only in production so localhost works at /
    basePath: isProd ? ghBase : '',
    assetPrefix: isProd ? ghBase : '',
    images: {
        domains: ["images.unsplash.com"],
        // when exporting to static files we cannot use the image optimization API
        // see https://nextjs.org/docs/messages/export-image-api
        unoptimized: true,
    },
    webpack(config) {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
        };
        return config;
    },
};

export default nextConfig;
