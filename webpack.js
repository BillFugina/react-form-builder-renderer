const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin')
const webpack = require('webpack')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './public/index.html'
})

const definePlugin = new webpack.DefinePlugin ({ 'process.env.FORMS_BR_ENV' : JSON.stringify(process.env.FORMS_BR_ENV) })

module.exports = {
  entry: './src/demo-index.tsx',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  },
  plugins: [htmlPlugin, definePlugin],
  resolve: {
    extensions: ['.ts', '.tsx', '.json', '.js', '.jsx'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: './tsconfig-webpack.json'
      })
    ]
  }
}
