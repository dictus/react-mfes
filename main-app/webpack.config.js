const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devServer: {
    port: 3000,
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
      name: "main-app",
      
      remotes: { mfe_app: "mfe_app@http://localhost:3001/remoteEntry.js" },
      
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
