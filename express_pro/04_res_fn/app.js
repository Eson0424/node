const express = require('express');
let app = express();

// 获取路由中间件 
let router = express.Router();

// 配置路由规则
router.get('/json', (req, res) => {
    res.json([{ name: 'json' }])
  })
  .get('/redirect', (req, res) => {
    res.redirect('https://www.baidu.com');
  })
  .get('/jsonp', (req, res) => {
    res.jsonp('jack rose');
  })
  .get('/download', (req, res) => {
    res.download('./app.js');
  })

app.use(router);
app.listen(8888);