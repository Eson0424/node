/*
  1.request --- 接收
    ctx.request.url ---首行中的url
    ctx.request.method --- 首行中的请求方式
    ctx.request.headers --- 请求头
  2.response --- 响应
    ctx.response.set(key, value) --- 响应头 key-value
    ctx.response.status = 200 --- 状态码
    ctx.response.body = '<h1>KOA</h1>' --- 响应体

*/

// 1.引入对象
const Koa = require('koa');
let app = new Koa();
app.use((ctx, next) => {
  // 中间件的操作 --- 第一件事
  // console.log(ctx.request.url);
  // console.log(ctx.request.method);
  // console.log(ctx.request.headers);
  next();
});
app.use((ctx, next) => {
  // 第二件事
  console.log('开始做第二件事');

  ctx.response.set('myTest', '12345');
  ctx.response.status = 200;
  ctx.response.body = '<h1>KOA</h1>'

})
app.listen(8888, () => {
  console.log('running');
});


// 注意： 当接收请求，但是最后没有响应数据给页面（客户端）时，页面会报404 错误