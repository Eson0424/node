const express = require('express');
const path = require('path');
const formidable = require('formidable');
const db = require('./dbTools');

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
    // 获取数据库数据
    db.find('demo01', {}, function(err, list) {
      if (err) return next(err);
      res.render('index', {
        list,
      });
    })
  })
  .post('/add', (req, res, next) => {
    // 解析文件， 使用包
    const form = formidable({ multiples: true, uploadDir: path.join(__dirname, 'public', 'images'), keepExtensions: true });

    // 解析
    form.parse(req, (err, fields, files) => {
      if (err) next(err);
      let nickname = fields.nickname;
      let fileName = path.parse(files.avatar.filepath).base;
      let img = 'images/' + fileName;
      // 数据存入数据库
      db.insert('demo01', [{ nickname, img }], function(err, result) {
        if (err) return next(err);
        // 同步提交，浏览器等待页面显示
        res.redirect('/');
      })
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
  res.send('<h1><a href="/">错误页面，返回首页</a></h1>')
})

// 监听端口
app.listen(8888);