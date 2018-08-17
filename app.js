var express = require('express');
var app = express();

// body-parser是中间件，可以拿到req和res
var bodyParser = require('body-parser');

// 设置不需要第三方转字符串为对象
app.use(bodyParser.urlencoded({ extended: false }));

// 配置默认模板
app.set('view engine', 'ejs');
app.set('views', './views');

// 静态资源托管
app.use('/users/node_modules', express.static('node_modules'));

// 导入模块
var indexRouter = require('./router/indexRouter.js');

// 注册路由
app.use(indexRouter);

// 开启一个服务器
app.listen(3030, () => {
    console.log('server are running at http://localhost:3030')
});