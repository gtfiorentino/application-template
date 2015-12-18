var path              = require('path');
var webpack           = require('webpack');
var node_modules_dir  = path.join(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = {
  module : {
    preLoaders: [
      {
        test   : /\.(js|jsx)$/,
        include: path.join(__dirname, 'src'),
        loader : "eslint-loader"
      }
    ],
    loaders   : [
      {
        test   : /\.(js|jsx)$/,
        loader : 'react-hot',
        include: path.join(__dirname, 'src')
      },
      {
        test   : /\.(js|jsx)$/,
        loader : 'babel',
        include: path.join(__dirname, 'src')
      },
      {
        test  : /\.scss$/,
        loader: "style-loader!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass!"
      },
      {
        test  : /\.css$/,
        loader: "style-loader!css"
      },
      {test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000'},
      {test: /\.json/, loader: "json"},
    ]
  },
  devtool: 'eval',
  entry  : [
    'webpack-dev-server/client?http://0.0.0.0:3333',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output : {
    path      : path.join(__dirname, 'dist'),
    filename  : 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    definePlugin,
    new webpack.optimize.DedupePlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    root      : path.resolve('./src'),
    extensions: ['', '.js', '.jsx'],
    alias     : {
      'components': path.join(__dirname, 'src/components/'),
      'state'     : path.join(__dirname, 'src/state/'),
      'views'     : path.join(__dirname, 'src/views/'),
    }
  }
};
