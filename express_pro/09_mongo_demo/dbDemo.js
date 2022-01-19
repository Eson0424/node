const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'myProject';

//  客户端连接服务器
MongoClient.connect(url, function(err, client) {

  // 连接异常
  if (err) throw err;

  // 获取db对象，再获取集合对象（操作数据）
  const col = client.db(dbName).collection('createIndexExample1');
  col.insertMany([{ a: 1, b: 1 }, { a: 2, b: 2 }, { a: 3, b: 3 }, { a: 4, b: 4 }], { w: 1 }, function(err, result) {
    if (err) throw err; // 插入异常
    col.find().toArray(function(err, docs) {
      if (err) throw err; // 查询异常
      console.log(docs);
      client.close(); // 关闭连接（放回mongodb的连接池）
    })
  })
})