const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('styles.css');
const webpack = require('webpack');

module.exports = {
  entry:  {
    app: './src/main.js'
  },
  output: {
    path: './dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
	devServer: {
  inline: true,
  contentBase: './',
  port: 3000
	},
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      },
      {
        test:  /\.scss$/,
        loader: extractCSS.extract('style-loader', 'css-loader!sass-loader')
      },
      {
        test:  /\.css$/,
        loader: extractCSS.extract('style-loader', 'css-loader')
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.vue$/,
        loader: 'vue'
      }
    ]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  resolve: {
    alias: { vue: 'vue/dist/vue.js' },
    modulesDirectories: [
      __dirname,
      'node_modules'
    ],
  },
  vue: {
    loaders: {
      js: 'babel!eslint',
      scss: 'style-loader!css-loader!sass-loader'
    }
  },
  plugins: [
    extractCSS
  ]
}
