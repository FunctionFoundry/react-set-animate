var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

let load = (module) => ['webpack-hot-middleware/client', './src/' + module]

module.exports = {
  devtool: 'eval',
  entry:  {
    vendor: ["react", "react-dom", "pure-flux", "pure-flux-router", "react-set-animate"],
    app: load('index')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
        test: /\.md$/,
        loader: 'raw'
    }]
  }
};
