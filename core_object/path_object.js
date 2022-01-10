// 引入核心对象 path
const path = require('path');

// path.join:拼接路径    3段来自不同用户的输入  //one// two  ///three///

const myPath = path.join(__dirname, '//one//', 'two', '///three///');
console.log(myPath);

// path.resolve:根绝相对路径，返回绝对路径

const str = './abc/efg.js';
let temp = path.resolve(str)
console.log(temp);

// path.parse: 接收一段字符串路径,解析这个路径为对象，更易于操作

let strPath = path.join(__dirname, 'jack', 'abc', 'dddd.txt');
// 解析这个路径为对象，更易于操作
let pathObj = path.parse(strPath);
console.log(pathObj);
/*
{
  root: 'C:\\',
  dir: 'C:\\Users\\NINGMEI\\Desktop\\node-start\\core_object\\jack\\abc',
  base: 'dddd.txt',
  ext: 'dddd',
  name: 'dddd'
}
*/

// base可以作为修改文件名或者后缀名的方式
pathObj.base = 'aaaa.ddd';


// path.format:接收路径对象，转换成路径字符串

let pathStr = path.format(pathObj);
console.log(pathStr);