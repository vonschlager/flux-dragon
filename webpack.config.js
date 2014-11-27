'use strict';

var webpack = require( 'webpack' );

module.exports = {
  entry: "./client.js"
, output: {
    path: __dirname + '/build/js'
  , filename: "client.js"
  }
, module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    , { test: /\.jsx$/, loader: 'jsx-loader' }
    ]
  }
, resolve: {
    extensions: [ '', '.js', '.jsx' ]
  }
, plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify( 'development' )
      }
    })
    //new webpack.optimize.UglifyJsPlugin()
  ]
};
