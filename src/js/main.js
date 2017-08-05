import $ from 'jquery'
import '../css/index.css'
import '../css/main.scss'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../../node_modules/bootstrap/dist/js/bootstrap.js'
$(function(){
	$('#list>li:odd').css('backgroundColor','yellow')
	$('#list>li:even').css('backgroundColor','lightblue')
	// $('body').css('background','pink');
	// alert(1);
	console.log(1);
})
//代码已更新,会自动打包,需要安装的额插件为webpack-dev-server
//webpack-dev-server 帮我们生成的bundle.js并没有存入到dist磁盘中,
//而是托管到了内存中,这样访问的时候会很快
// 定义了一个类
class Person {
  // 静态的属性   可以直接通过 类名去访问
  static info = { name: 'zs', age: 20 }
}
class Student {
	static info = { name:'haozi',age: 20}
}
console.log(Person.info,Student.info);
//Object {name: "zs", age: 20} 
//Object {name: "haozi", age: 20}
