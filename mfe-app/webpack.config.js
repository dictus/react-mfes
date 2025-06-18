const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.js",
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
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"], // ← Add this
    }
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
        react: { singleton: true },
        "react-dom": { singleton: true },
        "@salt-ds/core": { singleton: true },
        "@salt-ds/theme": { singleton: true },
        "@salt-ds/icons": { singleton: true }
      }
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ],
};
