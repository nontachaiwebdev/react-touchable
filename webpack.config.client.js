var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: path.join(__dirname,"src","app","index.js"),
  output: { 
    publicPath: '/',
    path: path.join(__dirname,"static"), 
    filename: 'bundle.js' 
  },
  devtool: "#eval-source-map",
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader", // translates CSS into CommonJS
          query: {
            sourceMap: true,
            module: true,
            localIdentName: '[local]___[hash:base64:5]'
          }
        },
        {
          loader: "resolve-url-loader"
        }, 
        {
          loader: "sass-loader?sourceMap" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      },
      { 
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "url-loader?limit=10000&mimetype=application/font-woff" 
      },
      { 
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, 
        loader: "file-loader" 
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    })
  ]
};
