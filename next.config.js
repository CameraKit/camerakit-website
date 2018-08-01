
const path = require('path');

// FitBit's [webpack-config](https://fitbit.github.io/webpack-config/) lib for
// breaking down complex configurations into multiple files for easier
// extensibility
const Config =  require('webpack-config');
const { environment } =  require('webpack-config');
// Project paths configuration
const PATHS = require('./config/paths');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
/* eslint-disable import/no-dynamic-require, no-console */

// Webpack entry point.  Note the .babel.js extension-- this will be parsed
// through babel, using the `.babelrc` settings to transpile to your current
// version of Node

// ----------------------
// IMPORTS

/* Node */
// ----------------------

// Helper function that'll take the name of the config file, and throw back an
// array of Webpack objects to use for the final config
function load(file) {
  // Resolve the config file
  let wp;

  try {
    wp = require(path.resolve(PATHS.webpack, file)).default;
  } catch (e) {
    console.error(`Error: ${file}.js not found or has errors:`);
    console.error(e);
    process.exit();
  }

  // If the config isn't already an array, add it to a new one, map over each
  // `webpack-config`, and create a 'regular' Webpack-compatible object
  return (Array.isArray(wp) ? wp : [wp]).map(config => (
    new Config().merge(config).toObject()
  ));
}

// Set the 'root' path to the 'webpack' dir in this folder
environment.setAll({
  root: () => PATHS.webpack,
});

// Spawning webpack will be done through an `npm run ...` command, so we'll
// map those npm options here to know which webpack config file to use
const toExport = [];

for (const build of (process.env.WEBPACK_CONFIG || '').trim().split(',')) {
  // Unwind the array into the final export
  if (build) toExport.push(...load(build));
}

// If we don't have any configs to export, yell!
if (!toExport.length) {
  console.error('Error: WEBPACK_CONFIG files not given');
  process.exit();
}

module.exports = {
  webpack: function (config, { isServer }) {
    Object.assign(config, toExport);
    console.log('dingo\n\n\n\n\n\n')
    config.node = {"fs":'empty', "net":'empty'};
    config.module.loaders = [
        {
          test: /.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
      ];

    return {}
  }
}