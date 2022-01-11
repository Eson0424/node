const http = require('http');
let server = http.createServer();
server.on('request', (req, res) => {
    res.end('xxx');
  })
  // IP 找计算机， 端口找程序
server.listen(8888, () => {
  console.log('server running');
});