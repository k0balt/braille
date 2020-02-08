const merge = require("webpack-merge");
const common = require("./webpack.common.js");
var webpack = require("webpack");

module.exports = merge(common, {
  mode: "production",
  devtool: "#source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
