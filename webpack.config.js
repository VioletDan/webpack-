//cmd输入webpack命令时,webpacj会先去项目的根目录查找自己的配置文件,
//名称是webpack.config.js,找到以后会加载其中配置好的文件
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
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
		new webpack.HotModuleReplacementPlugin() //启动热更新插件
	],
	devServer:{
		//设置webpack-dev-server命令的第二种方式
		contentBase:'src',
		open: true,
		port: 80,//指定打开的端口号
		hot:true,//启用热更新
		openPage: 'index.html'//设置默认显示的页面 ,2.5.0,webpack-dev-server之后需要加入此项,否则显示undefined页面,
	},
	module:{
		//所有的第三方loader,都需要配置在module模块下
		rules:[
			{test:/\.css$/,use:['style-loader','css-loader']},
			{test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
			//处理图片
			{test:/\.(jpg|gif|png|bmp)$/,use:'url-loader?limit=7000&name=[hash:7]-[name].[ext]'},
			{test:/\.(eot|woff2|woff|ttf|svg)$/, use: 'url-loader' },//处理字体图标
			{test:/\.js$/,use:'babel-loader',exclude:/node_modules/}//处理高级语法的loader

			//一个loader用字符串就行
			//loader要顺序装好
		]
	}
}
//webpack默认只能处理js文件,发现一些非js结尾的文件,会去
//配置文件中查找是否有第三方的处理文件loader
//1. 由于webpack默认会转换一部分的高级的ES6语法,但是并不能转换全部的;
//2. 因此需要借助于Babel这个转换器,把高级的语法转换为低级别的,浏览器能识别的语法!


//webpack的发布策略
//1.实际开发中,一般会有两套项目方案:
/*
- 一套是开发期间的项目，包含了测试文件、测试数据、开发工具、测试工具等相关配置，有利于项目的开发和测试，但是这些文件仅用于开发，发布项目时候需要剔除；
- 另一套是部署期间的项目，剔除了那些客户用不到的测试数据测试工具和文件，比较纯净，减少了项目发布后的体积，有利于安装和部署！
为了满足我们的发布策略，需要新建一个配置文件，命名为webpack.publish.config.js，将webpack.config.js的配置拷贝过去，剔除一些开发配置项即可：
具体看文档
*/