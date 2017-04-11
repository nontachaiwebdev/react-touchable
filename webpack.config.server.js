var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.join(__dirname,"src","server","index.js"),
  output: { path: path.join(__dirname,"public"), filename: 'server_bundle.js' },
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      { 
        test:  /\.json$/, 
        loader: 'json-loader' 
      }
    ]
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ],
  node: {
    __filename: true,
    __dirname: true
  },
  target: 'node',
};
