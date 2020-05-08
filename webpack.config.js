const process = require('process');
const path = require('path');
const webpack = require('webpack');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const nodeExternals = require('webpack-node-externals');

const styledComponentsTransformer = createStyledComponentsTransformer();

const clientConfig = {
  entry: './src/client/index.tsx',
  devtool: "source-map",
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist/public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      }
    ]
  },
  plugins: [
    // use RUNTIME_TYPE to change between client/server code in shared isomorphic code
    new webpack.DefinePlugin({
      RUNTIME_TYPE: JSON.stringify('client'),
    }),
  ],
  // do not watch for changes to node_modules, requires restart when installing new dependencies
  watchOptions: {
    ignored: /node_modules/
  }
};

const serverConfig = {
  target: 'node',
  entry: './src/server/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    plugins: [new TsconfigPathsPlugin()]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
        },
      }
    ]
  },
  plugins: [
    // use RUNTIME_TYPE to change between client/server code in shared isomorphic code
    new webpack.DefinePlugin({
      RUNTIME_TYPE: JSON.stringify('server'),
    }),
  ],
  // avoid bundling node_modules
  externals: [nodeExternals()],
  // do not watch for changes to node_modules, requires restart when installing new dependencies
  watchOptions: {
    ignored: /node_modules/
  }
};

module.exports = [clientConfig, serverConfig];
