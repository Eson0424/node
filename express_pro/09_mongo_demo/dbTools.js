const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';

const dbName = 'myPro';

let obj = {};

// 增删改查，每次都需要拿连接，增删改查调用连接函数，获取对象

// 单独封装连接函数
function _connect(callback) {
  //  客户端连接服务器
  MongoClient.connect(url, function(err, client) {
    // 连接异常
    if (err) throw err;

    callback(client);
  })
}

// 封装插入数据
obj.insert = function(cname, arrData, fn) {
  _connect(function(client) {
    // 获取db对象，再获取集合对象（操作数据）
    const col = client.db(dbName).collection(cname);
    col.insertMany(arrData, function(err, result) {
      // if (err) throw err; // 插入异常
      // 将数据和错误，交给外部处理
      fn(err, result);
      // 关闭连接
      client.close();
    })
  })
}

// test fn
// obj.insert('test01', [{ name: 'eson' }, { name: 'jay' }], function(err, result) {
//   if (err) return next(err);
//   console.log(result);
// })

// 查询数据
obj.find = function(cname, filter, fn) {
  _connect(function(client) {
    // 获取db对象，再获取集合对象（操作数据）
    const col = client.db(dbName).collection(cname);
    col.find(filter).toArray(function(err, docs) {
      // if (err) throw err; // 插入异常
      // 将数据和错误，交给外部处理
      fn(err, docs);
      // 关闭连接
      client.close();
    })
  })
}

// test fn
// obj.find('test01', { name: 'eson' }, function(err, docs) {
//   if (err) return next(err);
//   console.log(docs);
// })

// 更新数据
obj.update = function(cname, filter, updateFilter, fn) {
  _connect(function(client) {
    // 获取db对象，再获取集合对象（操作数据）
    const col = client.db(dbName).collection(cname);
    col.updateMany(filter, { $set: updateFilter }, function(err, result) {
      // 将数据和错误，交给外部处理
      fn(err, result);
      // 关闭连接
      client.close();
    })
  })
}

// test fn
// obj.update('test01', { name: 'leo' }, { name: 'eson' }, function(err, result) {
//   if (err) return next(err);
//   console.log(result);
// })


// 删除数据
obj.delete = function(cname, filter, fn) {
  _connect(function(client) {
    // 获取db对象，再获取集合对象（操作数据）
    const col = client.db(dbName).collection(cname);
    col.deleteMany(filter, function(err, result) {
      // 将数据和错误，交给外部处理
      fn(err, result);
      // 关闭连接
      client.close();
    })
  })
}

// test fn
// obj.delete('test01', { name: 'eson' }, function(err, result) {
//   if (err) return next(err);
//   console.log(result);
// })


// 到处对象

module.exports = obj;