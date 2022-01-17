const express = require('express');
const fs = require('fs')

let app = express();

app.engine('.html', require('express-art-template'));

app.set('view options', {
  debug: process.env.NODE_ENV = 'production',
})

app.set('view engine', '.html');

let router = express.Router();

router.get('/', (req, res, next) => {
    // 获取文件时
    let errorPath = './asdf/a.txt';
    fs.readFile(errorPath, (err) => {
      // if (err) throw err; //用户看到了异常， 体验不好
      if (err) next(err)

    })

    res.render('index')
  })
  .all('*', (req, res) => { // 404处理
    res.send('<a href="/">404 去首页</a>')
  })

// 要把public下的js文件暴露出来
app.use('/public', express.static('./public'));
// 当虚拟目录/public被匹配以后，未来url都会去除掉/public

app.use(router);

// 处理错误(参数位置错误优先)
app.use((err, req, res, next) => {
  res.send('<h1>出现错误，<a href="/">返回首页</a></h1>')
})

app.listen(8888);