const http = require('http');
let server = http.createServer();
server.on('request', (req, res) => {
    // req: 只读 -- 包含 头、行、体

    // 读头
    let headers = req.headers;
    console.log(headers);

    // 读行
    let url = req.url;
    console.log(url);
    let method = req.method;
    console.log(method);

    // 读体
    req.on('data', (data) => {
      console.log(data.toString());
    })


    // res: 只写 --- 包含头、行、体

    // 写头 -- 包含 一次性写和多次性写
    res.setHeader('a', 'a');
    res.setHeader('b', 'b');
    res.setHeader('c', 'c');
    res.setHeader('d', 'd');

    // 写行
    res.writeHead(200, {
      'content-type': 'text/html;charset=utf-8'
    });

    // 写体
    res.end('this is response');



  })
  // IP 找计算机， 端口找程序
server.listen(9999, () => {
  console.log('server running');
});