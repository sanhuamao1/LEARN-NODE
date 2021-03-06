const http=require('http');
const fs=require('fs')

//__dirname：当前文件所在目录
const server=http.createServer((req,res)=>{
    fs.readFile(__dirname+'/index.html','utf-8',(err,data)=>{
        if(err){
            res.setHeader('Content-Type','text/plain');//纯文本
            res.statusCode=404;
            res.end('404 Not Founded!')
        }else{
            res.setHeader('Content-Type','text/html');//html
            res.statusCode=200;
            res.end(data)
        }
    })
})

const hostname='127.0.0.1';
const port=3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})