const http = require ("http");
const hostname = '127.0.0.1'; 
const port = 3000;
const server = http.createServer((req,res)=>{
res.statusCode=200;
res.setHeader("Content-Type","text/plain");
res.end ("hello world\n")

});

server.listen(port,hostname,()=>{
    console.log (`Server running at http://${hostname}:${port}/`)
})





const fs= require ("fs");
const content= "hello node";
fs.writeFile('welcome.txt', content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File "welcome.txt" has been created with content:', content);
})




