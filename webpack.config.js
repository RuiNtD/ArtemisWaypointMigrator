const path = require("path");

module.exports = {
  entry: "./web/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "web"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "web"),
    },
    compress: true,
  },
};
