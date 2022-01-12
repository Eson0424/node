const http = require('http');
const fs = require('fs');

// 设计两个接口    /返回index.html
//  /test 只用write 不用end  => 默认来讲 页面会一直加载中
// 但是当使用ajax
http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data) => {
      if (err) throw err;
      res.end(data)
    })
  } else if (req.url === '/test' && req.method === 'GET') {
    // setInterval(function() { //当不使用end()返回数据时，服务器会认为请求没有结束一直在处理中，不会响应
    //   res.write("" + Date.now())
    // }, 1000)

    // 通知客户端，可以一点一点的显示
    res.writeHead(200, { 'content-type': 'application/octet-stream' });

    setInterval(function() {
      res.write("" + Date.now() + '|');
    }, 1000)
  }
}).listen(8888);