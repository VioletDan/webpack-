
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry:path.join(__dirname,'./src/js/main.js'),//入口文件
	//配置和输出一系列的参数
	output:{
		path:path.join(__dirname,'./dist'),
		filename:'bundle.js'
	},
	plugins:[
		new htmlWebpackPlugin({
			template:path.join(__dirname,'./src/index.html'),
			filename:'index.html'
		}),
		new cleanWebpackPlugin(['dist'])
	],
	module:{
		//所有的第三方loader,都需要配置在module模块下
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			//处理图片
			{test:/\.(jpg|gif|png|bmp)$/,use:'url-loader?limit=7000&name=images/img-[hash:7].[ext]'},
			{test:/\.(eot|woff2|woff|ttf|svg)$/, use: 'url-loader' },//处理字体图标
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}//处理高级语法的loader

			//一个loader用字符串就行
			//loader要顺序装好
		]
	}
}
