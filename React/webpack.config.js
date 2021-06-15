const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const webpack = require("webpack");

const isDev = process.env.NODE_ENV !== "production";

const config = {
  name: "Tmon ToDoList",
  mode: isDev ? "development" : "production",
  devtool: !isDev ? "hidden-source-map" : "eval",
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    alias: {
      "@hooks": path.resolve(__dirname, "hooks"),
      "@components": path.resolve(__dirname, "components"),
      "@layouts": path.resolve(__dirname, "layouts"),
      "@pages": path.resolve(__dirname, "pages"),
      "@reducers": path.resolve(__dirname, "reducers"),
      "@utils": path.resolve(__dirname, "utils"),
      "@data": path.resolve(__dirname, "mockData"),
    },
  },
  entry: {
    app: "./client",
  },
  target: ["web", "es5"],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: { browsers: ["IE 10"] },
                debug: isDev,
              },
            ],
            "@babel/preset-react",
          ],
          env: {
            development: {
              plugins: [
                ["@emotion", { sourceMap: true }],
                require.resolve("react-refresh/babel"),
              ],
            },
            production: {
              plugins: ["@emotion"],
            },
          },
        },
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: isDev ? "development" : "production",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        useURLPolyfill: true,
      },
    }),
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    publicPath: "/dist/",
  },
  devServer: {
    historyApiFallback: true,
    port: 3090,
  },
};

module.exports = config;
