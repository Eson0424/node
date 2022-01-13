const express = require('express');
let app = express();

// 注册一个引擎模板
app.engine('.html', require('express-art-template'));

// 配置默认渲染引擎

app.set('view options', {
  debug: process.env.NODE_ENV !== 'production',
  // debug: 不压缩，不混合，实时保持最新的数据
  // 非debug： 压缩/混合，list.html 静态数据不会实时更新--只有服务器重启才更新
  imports: {
    // 数据的导入，和过滤显示的操作
    num: 1,
    reverse: function(str) {
      return '^_^' + str + '^_^';
    }
  }
});

app.set('view engine', '.html');

// 获取路由中间件 
let router = express.Router();

// 配置路由规则
router.get('/list', (req, res) => {
  res.render('list.html', {
    heros: [{ name: '张三' }, { name: '李四' }, { name: '王五' }]
  })
})

app.use(router);
app.listen(8888);