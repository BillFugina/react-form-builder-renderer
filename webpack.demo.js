const merge = require('webpack-merge')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackConfig = require('./webpack.js')

const uglifyPlugin = new UglifyJsPlugin()

module.exports = merge(webpackConfig, {
  mode: 'production',
  optimization: {
    minimizer: [uglifyPlugin]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
})
