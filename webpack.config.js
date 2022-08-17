const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
  entry: {
    index: './src/index.js'
       },
  mode: 'development',
  module: {
    rules: [
        {
            test: /\.(sa|sc|c)ss$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.html$/i,
            loader: 'html-loader',
        }
    ]
},
output: {
  filename: '[name].js',
  path: path.resolve(__dirname, './dist'),
  assetModuleFilename: 'assets/[hash][ext][query]',
},
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, './src/index.html')
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [{ from: path.resolve(__dirname, './src/assets'), to: 'assets' }],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
],
  devServer: {
    static: {
      directory: path.join(__dirname, "./")
    }
  }
};