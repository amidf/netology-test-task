const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    static: path.resolve(__dirname, "../dist"),
  },
});
