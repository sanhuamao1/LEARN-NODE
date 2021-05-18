const http=require('http');
const fs=require('fs')
const ejs=require('ejs')
var template=fs.readFileSync(__dirname+'/helo.ejs','utf-8'); //相当于./helo.ejg

const server=http.createServer((req,res)=>{
    //模板渲染
    var data=ejs.render(template,{
        title:'helo ejs',
        content:'<strong>big helo ejs.</strong>'
    })
    res.setHeader('Content-Type','text/html');
    res.statusCode=200;
    res.end(data)
})

const hostname='127.0.0.1';
const port=3000;
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})