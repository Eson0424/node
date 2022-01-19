// mongodb 命令

// db;                          查看当前的数据库
// show dbs;                    展示所有数据库--所有集合
// use 数据库名;                进入/切换到某一个数据库
// show collections;           查询当前集合中的数据列
// db.数据库名.find();         查看所有的数据

// 添加数据---增

// db.数据库名.save({name: '1111', age: 11})   
// db.数据库名.save({ "_id" : ObjectId("61e7802e72f4d5ceacdd7fe3"),name: '2222', age: 12})   
// 当写入的数据中带着已存在的_id时，表示更新数据，否则就是插入数据

// db.数据库名.insert({name: '1111', age: 11})   插入数据
// 当insert函数唯一id冲突时会报错

// 删除数据 --- 删 

// db.数据库名.remove({name: '1111', age: 11})


// 更新数据 --- 改
// db.数据库名.update({name: 'on'},{name: 'jay', age: '33'})


// 查看数据 --- 查


// db.数据库名.find()               查找全部数据
// 按条件查找
// db.数据库名.find({条件名: {条件规则}})
// db.users.find({name: '小明'});      查询名字叫做小明的数据
// db.users.find({score: {$gt: 77}})   查询分数大于77的数据  $gt: 表示大于   $gte: 表示大于等于  $lt:小于   $lte： 小于等于

// 分页

// db.users.find().skip(3)                  调到第三条
// db.users.find().limit(3)                只显示3条数据
// db.users.find().skip(3).limit(3)         从第三条数据开始显示，只显示三条数据

// 排序

// db.users.find().sort(key: {排序方式})
// db.users.find().sort({score: 1})   按照分数进行排序，1代表升序，-1代表降序

// 模糊查询

// db.users.find(key: /正则/) 
// db.users.find(name: /^小/)


// 聚合函数

// db.users.aggregate({$group: {_id: 1, sum:{$avg: '$score'}}})


// 联合查询

/*  
  两集合查询

  db.users.aggregate([
    {
      $lookup: //管道中加入一次查找操作
      {
        form: 'orders',  // 和哪一个集合关联查询
        localField: 'name', // 自身集合中要关联的字段
        foreignField: 'sku', // 关联的集合中要关联的字段
        as: 'orders_docs' //生成新数据后，对关联集合中的数据的描述的别名
      }
    }
  ])
*/

/*
  三表查询

    db.users.aggregate([
    {
      $lookup: //管道中加入一次查找操作
      {
        form: 'orders',  // 和哪一个集合关联查询
        localField: 'name', // 自身集合中要关联的字段
        foreignField: 'sku', // 关联的集合中要关联的字段
        as: 'orders_docs' //生成新数据后，对关联集合中的数据的描述的别名
      },
    },
    {
      $lookup: 
      {
        form: 'orders',  // 和哪一个集合关联查询
        localField: 'name', // 自身集合中要关联的字段
        foreignField: 'sku', // 关联的集合中要关联的字段
        as: 'orders_docs' //生成新数据后，对关联集合中的数据的描述的别名
      }
    }
  ])

*/