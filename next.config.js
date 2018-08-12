const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const sass = require('@zeit/next-sass');

const nextConfig = {
  distDir: 'build',
  webpack: config => {
    const newConfig = config;
    newConfig.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    };

    return newConfig;
  },
};

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]_[hash:base64:3]',
    },
  }],
  images,
], nextConfig);
