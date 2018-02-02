const path = require('path');
const ExtractTextPlugin = require("extract-text-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Webpack = require("webpack");
module.exports = {
	entry:path.join(__dirname,"src/app.js"),
	output:{
		path:path.join(__dirname,"dist"),
		filename:"[name].js"
	},
	module:{
		rules:[{
			{
				test:/\.js$/,
				loader:"babel-loader"
			},
			{
				test:/\.css$/,
				use:["style-loader","css-loader"]
			},
			{
				test:"/\.html$/",
				loader:"html-loader"
			},
			{
				test:/\.(jpg|png|gif)/,
				loader:"file-loader"
			},{
				test:/\.(eot|svg|tif|woff|woff2|otf)/,
				loader:"url-loader"
			}
		}]
	},
	devServer:{
		host:"localhost",
		port:8080,
		constenet:"."
	},
	plugins:[
		new Webpack.HotModuleReplacement(),
		new ExtractTextPlugin("main.css")
		new HtmlWebpackPlugin({
			title:"",
			filename:"index.html;",
			template:"./index.html"
		})
	]
}