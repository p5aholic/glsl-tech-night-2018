const path = require('path');

const SRC_PATH    = path.resolve(__dirname, '../src');
const PUBLIC_PATH = path.resolve(__dirname, '../public');

module.exports = {
  entry: {
    demo1: SRC_PATH + '/demo1/main.js'
  },

  output: {
    filename: '[name].js',
    path: PUBLIC_PATH + '/assets/js/'
  },

  resolve: {
    alias: {
      Libs: SRC_PATH + '/libs/'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env']
            ]
          }
        }
      },
      {
        test: /\.glsl$/,
        use: {
          loader: 'webpack-glsl-loader'
        }
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'initial',
          enforce: true
        }
      }
    }
  }
};
