const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // new line
const ESLintPlugin = require('eslint-webpack-plugin');   // new line!

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {                 // new line
    contentBase: './dist'      // new line
  },                           // new line

  devtool: 'eval-source-map',  // new line
  plugins: [
    new ESLintPlugin(), // new line!
    new CleanWebpackPlugin({
      verbose: true
    }), 
    new HtmlWebpackPlugin({
      title: 'Galactic Age Calculator',
      template: './src/index.html',
      inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
};