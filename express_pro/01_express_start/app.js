// 1.引入express第三方对象
const express = require('express'); // 自动逐级向上查找node_modules/express文件夹->package.json(main属性) 或者 express的文件夹/index.js

// 2.构建一个服务器 let server = http.crateServer();
let server = express();

// 3.开启服务器监听端口
server.listen(8888);

// 4.处理响应
server.use((req, res) => {
  res.send('hello world');
})