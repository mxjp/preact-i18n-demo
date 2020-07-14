const HtmlWebpackPlugin = require("html-webpack-plugin");
const { static } = require("express");

module.exports = ({ prod } = {}) => ({
	context: __dirname,
	mode: prod ? "production" : "development",
	entry: "./src",
	resolve: {
		extensions: [".js", ".json", ".ts", ".tsx"]
	},
	module: {
		rules: [
			{ test: /\.tsx?$/, use: "ts-loader" }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "head",
			minify: { collapseWhitespace: !!prod }
		})
	],
	optimization: {
		usedExports: true
	},
	devServer: {
		before: app => app.use("/lang", static(`${__dirname}/dist/lang`))
	},
	output: {
		path: `${__dirname}/dist`,
		publicPath: "/"
	}
});
