const express = require('express');
let app = express();
app.listen(9999, () => {
  console.log('running server');
});

// 1.app.use是请求到响应过程中执行的一件事，按代码顺序实行
// 2.next() 是放行到下一个事件的开关
// 3.如果全部都next，最终没有end页面数据，框架自动帮我们处理为 404

// 用户选择性url开头的部分，选择性调用对应的事

// 布置操作任务
app.use('/sucai', (req, res, next) => {
  console.log('白菜');
  next();
});
app.use('/sucai', (req, res, next) => {
  console.log('萝卜');
  next();
});
app.use('/huncai', (req, res, next) => {
  console.log('牛肉');
  next();
});
app.use('/huncai', (req, res, next) => {
  console.log('羊肉');
  next();
});
app.use('/zaocan', (req, res, next) => {
  console.log('油条');
  next();
});