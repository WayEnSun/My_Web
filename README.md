# My_Web
欢迎各位参观代码,在正确运行之前，请先做好环境配置
node.js官网下载：https://nodejs.org/en/
基于node.js平台的express框架，安装教程：http://www.runoob.com/nodejs/nodejs-express-framework.html
mysql安装教程：http://www.runoob.com/nodejs/nodejs-mysql.html
打开目录下的ajaxjs.js,找到：
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});
打开基于mysql的xampp(没有的话，再去下载一个)，找到相应的host,user,password,database,修改相应函数
