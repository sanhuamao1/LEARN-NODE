const MongoClient=require('mongodb').MongoClient
const test=require('assert')
const url='mongodb://127.0.0.1:27017'
const dbName='mydata'

MongoClient.connect(url, function(err, client) {
    test.equal(null, err);
    const adminDb = client.db(dbName)
    console.log('链接数据库成功')
    adminDb.collection("posts").find({tag:"study"}).toArray((err,docs)=>{
        test.equal(null, err);
        console.log(docs)
        client.close()
    })
});