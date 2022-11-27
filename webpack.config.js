const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/pages/main/main.ts",
    dictionary: "./src/pages/dictionary/dictionary.ts",
    games: "./src/pages/games/games.ts",
    login: "./src/pages/login/login.ts",
    statistics: "./src/pages/statistics/statistics.ts",
    sprint: "./src/pages/games/sprint/sprint.ts",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "./src/pages/main/main.html"),
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      filename: "dictionary.html",
      template: path.resolve(
        __dirname,
        "./src/pages/dictionary/dictionary.html"
      ),
      chunks: ["dictionary"],
    }),
    new HtmlWebpackPlugin({
      filename: "games.html",
      template: path.resolve(__dirname, "./src/pages/games/games.html"),
      chunks: ["games"],
    }),
    new HtmlWebpackPlugin({
      filename: "login.html",
      template: path.resolve(__dirname, "./src/pages/login/login.html"),
      chunks: ["login"],
    }),
    new HtmlWebpackPlugin({
      filename: "statistics.html",
      template: path.resolve(
        __dirname,
        "./src/pages/statistics/statistics.html"
      ),
      chunks: ["statistics"],
    }),
    new HtmlWebpackPlugin({
      filename: "sprint.html",
      template: path.resolve(__dirname, "./src/pages/games/sprint/sprint.html"),
      chunks: ["sprint"],
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./src/assets"),
          to: path.resolve(__dirname, "./dist/assets"),
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devtool: "inline-source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.ts$/i,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
