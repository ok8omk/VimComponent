const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "docs/src/index.html"),
  filename: "docs/index.html"
});

module.exports = {
  devtool: "source-map",
  entry: {
    dist: path.join(__dirname, "/src/index.tsx"),
    docs: path.join(__dirname, "/docs/src/index.tsx")
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader"
          }
        ]
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  },
  plugins: [htmlWebpackPlugin],
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    compress: true,
    port: 9000
  },
  output: {
    path: __dirname,
    filename: "[name]/index.js"
  }
};
