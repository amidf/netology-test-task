const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./common");

module.exports = merge(common, {
  mode: "production",
  devtool: "nosources-source-map",
  plugins: [...common.plugins, new MiniCssExtractPlugin()],
});
