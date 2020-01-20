const merge = require('webpack-merge')
const webpackConfig = require('./webpack.js')
const webpack = require('webpack')

module.exports = merge(webpackConfig, {
  devtool: 'source-map',
  mode: 'development',
  plugins:[
    new webpack.DefinePlugin ({ 'process.env.FORMS_BR_ENV' : `'dev'` })
  ]
})
