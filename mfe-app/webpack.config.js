const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/bootstrap.js",
  mode: "development",
  devServer: {
    port: 3001,
    historyApiFallback: true,
  },
  output: {
    publicPath: "auto",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "mfe_app",
      filename: "remoteEntry.js",
      
      exposes: { "./App": "./src/App" },
      shared: {
        react: { singleton: true ,requiredVersion: false },
               "react-dom": { singleton: true ,requiredVersion: false}
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};
