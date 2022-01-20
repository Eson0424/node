// express 和 koa的比较


// express

// 1.引入对象
const express = require('express');
// 2.创建服务器
let app = express();
// 3.处理响应
app.use(function(req, res, next) {
    // express中保持了原生node中的api
    res.send('express ok');
  })
  // 4.监听端口
app.listen(9999, () => {
  console.log('express running');
});



// koa

// 1.引入对象
const Koa = require('koa')
  // 2.创建服务器对象
let server = new Koa();
// 3.处理响应
server.use(function(ctx) {
  ctx.body = 'koa ok'
});
// 4.监听端口
server.listen(7777, () => {
  console.log('koa running');
});