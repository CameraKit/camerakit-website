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
    newConfig.module.rules.push(
      {
        test: /\.css$/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext].js',
        },
      },
      {
        test: /\.css$/,
        use: ['raw-loader', 'postcss-loader'],
      },
    );
    return newConfig;
  },
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
