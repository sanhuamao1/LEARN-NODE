//mongodb客户端
const MongoClient=require('mongodb').MongoClient

// 判断某两值是否相等的库
const test=require('assert')

// mongodb的连接地址
const url='mongodb://127.0.0.1:27017'

// 数据库名称-指定数据库名称
const dbName='admin'

// 连接使用客户端
MongoClient.connect(url, function(err, client) {
    test.equal(null, err);//判断错误对象是否为空，为空说明成功
    const adminDb = client.db(dbName)// 打开数据库进行操作
    console.log('链接数据库成功')
    client.close();
});
