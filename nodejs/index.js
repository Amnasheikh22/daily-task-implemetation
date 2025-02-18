const http = require ("http")
const myServer =http.createServer((req,res)=>{
console.log(req);
res.end("okay thanks")});
const port=8000;
console.log(port);
myServer.listen (port,()=> console.log("started port no.",port));