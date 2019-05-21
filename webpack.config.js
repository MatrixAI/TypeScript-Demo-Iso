const process = require('process');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  devtool: "source-map",
  devServer: {
    host: process.env.HOST,
    port: process.env.PORT,
    historyApiFallback: true,
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin([
      'HOST',
      'PORT'
    ])
  ]
};
