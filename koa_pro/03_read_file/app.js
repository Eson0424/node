// 读取一个html文件，展示给用户显示
const fs = require('fs');
const Koa = require('koa');

let app = new Koa();

function asyncReadFile() {
  return new Promise((resolve, reject) => {
    fs.readFile('./index.html', (err, data) => {
      // 两个状态： 1.成功-fulfilled：resolve 结合data   2.失败-rejected： reject 结合 err
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    })
  })
}

// async --- 声明函数中有异步操作
// await --- 等待返回结果
app.use(async(ctx, next) => {
  if (ctx.url === '/') {
    // 响应首页
    let data = await asyncReadFile();
    // 设置响应头
    ctx.set('content-type', 'text/html;charset=utf-8');
    ctx.body = data;
  } else {
    // ok
    ctx.body = 'ok' // 二进制数据 buffer 作为下载处理
  }
});

app.listen(8888);

// 注意： 在koa中不支持api中的异步操作的，所以要使用async 和 await 结合 promise去解决