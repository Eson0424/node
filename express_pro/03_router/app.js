const express = require('express');
let app = express();

// 获取路由中间件 
let router = express.Router();

// 配置路由规则
router.get('/login', (req, res) => {
  res.end('login page');
}).get('/register', (req, res) => {
  res.end('register page');
})

app.use(router);
app.listen(8888);