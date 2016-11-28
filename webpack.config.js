var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: './public', 
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    hot: true,
    contentBase: 'public',
    inline: true,
    clientLogLevel: 'none'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
