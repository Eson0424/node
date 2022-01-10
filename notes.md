node notes

# node是什么：后台语言 + 服务器的环境
  比如：php语言我们一般放在apache里面去跑，而node不需要管服务器

  # 应用场景：webpack、gulp、npm、http-server、json-server

  # 为什么说node是基于chrome V8：
    因为node移植了chrome V8引擎，解析和执行代码的机制和浏览器js一致
  
  # V8引擎，单线程，非阻塞IO，事件驱动：

  # 内置对象的介绍
    全局对象：何时何处都能访问
    核心对象：向系统所要，引入即可使用
    自定义对象：按路径引入即可使用