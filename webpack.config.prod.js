var path = require('path');
var webpack = require('webpack');
var webpackNotifierPlugin = require('webpack-notifier');
var port = '7770';

module.exports = {
  entry: [
    //`webpack-hot-middleware/client?path=http://localhost:${port}/__webpack_hmr&reload=true`,
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'), //Seems to create dist dir on load with bundle.js
    filename: 'bundle.js',
    publicPath: '/'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    loaders: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'.
      {test: /\.tsx?$/, loader: "ts-loader"},
      {
        test: /\.scss$/,
        loader: "style!css?sourceMap!sass?sourceMap",
        include: path.join(__dirname, "src/styles")
      }

    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      {test: /\.js$/, loader: "source-map-loader"},
      {test: /\.tsx?$/, loader: "tslint"}
    ]
  },

  tslint: {emitErrors: false, failOnHint: false},

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpackNotifierPlugin({title: 'Webpack built', alwaysNotify: true}),

    new webpack.optimize.DedupePlugin(),
    /*new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),*/
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  // Was having issues recognizing React, possibly because of typescript or hot reloading
  /*externals: {
   "react": "React",
   "react-dom": "ReactDOM"
   },*/
};
