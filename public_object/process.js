// process 全局对象： 何时何处都能访问

// process.env是一个对象，我们可以通过它process.env.xxx来获取具体的环境变量值
let processEnv = process.env;
// 设置一个特定的环境变量，以达到简单区分不同的机器，从而针对生产/开发环境运行不同的效果
let result = process.env.MY_TEST; // 自定义的环境变量，区别不同的机器，使用不同的配置
if (result === 'eson') {
  console.log('这是eson的电脑');
} else {
  console.log('这不是eson的电脑');
}

// 应用场景：一般应用于程序开发过程中，目的是让你本机和真实环境上有些许区别
// 比如：在你本地你可以一堆log  但是在真实环境中是不规范的

// process.argv 获取命令行参数
// console.log(process.argv); // 打印[node绝对路径，运行文件的绝对路径，命令行的参数1，命令行的参数2]
let num01 = process.argv[2] - 0;
let num02 = process.argv[3] - 0;
setTimeout(() => {
  console.log(num01 + num02)
}, 1000)