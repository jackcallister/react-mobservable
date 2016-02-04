var webpack = require('webpack')
var path = require('path')

module.exports = {

  entry: './src/index.jsx',

  output: {
    filename: './lib/bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel' },
    ]
  }
}
