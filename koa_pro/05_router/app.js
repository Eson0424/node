const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
// 引入
const Router = require('koa-router');

let app = new Koa();

// 配置路由对象
let router = new Router();

// 具体规则
router.get('/', async ctx => {
    ctx.body = 'HOME'
  })
  .post('/post', async ctx => {
    ctx.body = ctx.request.body;
  })
app.use(bodyParser());

// 产生关联
app.use(router.routes()); // 将路由与实例挂钩

app.use(router.allowedMethods()) // 优化状态码的处理；405 有该方式的url请求但是没有写该方式的响应处理  501：服务器不支持该请求方式

app.listen(8888);