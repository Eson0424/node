const express = require('express');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

// 假数据
let list = [];

// 创建服务器
let app = express();

// 注册一个引擎模板
app.engine('.html', require('express-art-template'));

// 设置配置项，配置默认渲染引擎
app.set('view option', {
  // 配置debug环境
  debug: process.env.NODE_ENV = 'production',
})
app.set('view engine', '.html');

// 获取路由中间件
let router = express.Router();

// 配置路由规则
router.get('/', (req, res) => {
    res.render('index', {
      list,
    });
  })
  .post('/add', (req, res, next) => {
    // 解析文件， 使用包
    const form = formidable({ multiples: true, uploadDir: path.join(__dirname, 'public', 'images'), keepExtensions: true });

    // 修改上传目录
    // form.uploadDir = path.join(__dirname, 'public', 'images');
    // 保持原有后缀名
    // form.keepExtensions  = true;

    // 解析
    form.parse(req, (err, fields, files) => {
      if (err) next(err);
      // console.log(fields); //{ nickname: '1111' } fields.nickname 
      // console.log(files); //  path.parse(路径).base   文件名
      let nickName = fields.nickname;
      let fileName = path.parse(files.avatar.filepath).base;
      // 存储img：网络能请求的路径   img/uploadxxxx.jpg
      let img = 'images/' + fileName;

      // 往list中添加数据
      list.push({
        nickName,
        img
      })

      // 同步提交，浏览器等待页面显示
      res.redirect('/');
    })
  })
  .all('*', (req, res) => { // 404 错误处理
    res.send('<h1>404<a href="/">返回首页</a></h1>')
  })

// 处理图片
app.use(express.static('./public'));

// 使用路由中间件
app.use(router)


// 错误处理
app.use((err, req, res, next) => {
  // res.render('error.html')
  res.send('<h1><a href="/">错误页面，放哪会首页</a></h1>')
})

// 监听端口
app.listen(8888);