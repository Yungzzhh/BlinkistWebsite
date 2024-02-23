/** @type {import('next').NextConfig} */
// const path = require('path');
import path from 'path';
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const nextConfig = {
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
      prependData: `@import "global";`
    },
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
      },
};

export default nextConfig;
