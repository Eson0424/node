// 需求：接收命令行参数，根据该目录，读取该目录下的所有文件并输出---遍历文件夹

// 步骤：
// 1.接收命令行参数 --- node dem01.js  .//xx//xx//xxxx
// 2.修正该路径 --- path.resolve(process.argv[2])
// 3.判断该路径是否存在 --- fs.access(fs.constants.F_OK)
// 4.判断是否是文件夹 --- fs.state()
// 4.1 如果是文件夹 --- 遍历 ---重复步骤4
// 4.2 如果是文件 --- 直接输出


const path = require('path');
const fs = require('fs');

//接收命令行参数，并修正路径
let inputPath = path.resolve(process.argv[2]);

function testFile(dir) {
  // 判断该路径是否存在
  fs.access(dir, fs.constants.F_OK, (err) => {
    if (err) throw err;
    fs.statSync(dir);
    // 获取状态
    fs.stat(dir, (err, state) => {
      if (err) throw err;
      // 判断是否是文件夹
      if (state.isFile()) { // 文件
        console.log(dir);
      } else if (state.isDirectory()) { // 文件夹
        // 获取子文件
        fs.readdir(dir, (err, files) => {
          if (err) throw err;
          files.forEach(item => {
            testFile(path.join(dir, item));
          })
        })
      }
    })
  })
}
testFile(inputPath)