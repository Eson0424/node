// 文件的读写--IO
/*
  I input 对计算机来说就是输入
  O output 对计算机来说，展现/写入数据就是输出
*/
// 引入核心对象fs
const fs = require('fs')

// 读取文件
fs.readFile('./read_write_file.js', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data); // <Buffer 2f 2f 20 e6 96 87 e4 bb b6 e7 9a 84 e8 af bb e5 86 99 2d 2d 49 4f 0d 0a 2f 2f 20 e5 bc 95 e5 85 a5 e6 a0 b8 e5 bf 83 e5 af b9 e8 b1 a1 66 73 0d 0a 63 ... 128 more bytes>
  // 需要获取数据可以调用buffer中的toString(编码)
  // console.log(data.toString('utf8')); //在方法中写 utf8 表示默认遵循的编码格式
})


//写入文件

fs.writeFile('./a.txt', 'this is mini space', (err) => {
  if (err) throw err;
  console.log('done');
})

// 文件追加
// 方式1：fs.appendFile
fs.appendFile('./a.txt', '追加', (err) => {
    if (err) throw err;
    console.log('追加成功');
  })
  // 方式2：
fs.writeFile('./b.txt', 'this is mini space11111111111', { flag: 'a' }, (err) => { //flag: a  a代表appendFile()
  if (err) throw err;
  console.log('done');
})