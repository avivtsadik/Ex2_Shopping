const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  const mode =
    process.env.NODE_ENV === "production" ? "production" : "development";

  return {
    entry: "./src/index.tsx",
    mode,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        "@components": path.resolve(__dirname, "src/components/"),
        "@services": path.resolve(__dirname, "src/services/"),
      },
    },
    devtool: "inline-source-map",
    output: {
      filename: "bundle.app.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
  };
};
