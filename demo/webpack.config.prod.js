var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var moment = require('moment')

let load = (module) => ['./src/' + module]

module.exports = {
  entry: {
    vendor: ["react", "react-dom", "pure-flux", "pure-flux-router", "react-set-animate"],
    app: load('index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: '[name]-' + moment().format('YYYY-MM-DD') + '.js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        // 'API_SERVER': JSON.stringify('https://api.andymoresi.com')
        'API_SERVER': JSON.stringify('https://api-dev.andymoresi.com')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
   }),
    new ExtractTextPlugin('app-' + moment().format('YYYY-MM-DD') + '.css')
  ],
  node: {
    Buffer: false
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(
        "style",
        "css!sass")
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
        test: /\.md$/,
        loader: 'raw'
    }]
  }
};
