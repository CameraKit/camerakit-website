const withPlugins = require('next-compose-plugins');
const images = require('next-images');
const sass = require('@zeit/next-sass');
const postcss = require('postcss-loader');

const nextConfig = {
  distDir: 'build',
  webpack: (config, options) => {
      config.node = {
          fs: 'empty',
          net: 'empty',
          tls: 'empty'
      }
      config.module.rules.push(
        {
          test: /\.css$/,
          loader: "emit-file-loader",
          options: {
            name: "dist/[path][name].[ext].js"
          }
        },
        {
          test: /\.css$/,
          use: ["raw-loader", "postcss-loader"]
        }
      );
      return config;
  }
};

module.exports = withPlugins([
  [sass, {
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: '[local]___[hash:base64:5]',
    },
  }],
  images,
], nextConfig);