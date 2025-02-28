const http= require("http")
const fs= require("fs")
const url= require("url");

const myServer=http.createServer((req ,res) => {
const log=`${Date.now()}:${req.url} New req recieved\n`;
const myUrl=url.parse(req.url,true);
fs.appendFile("log.txt", log ,(err,data) =>{
switch (myUrl.pathname) {
case"/":
res.end("homepage");
break;
case "/about":
res.end ("i am amna");
break;
case "/signup":
if ( req.method===GET)res.end("this is a signup form");
    else (req.method===POST){
res.end("success")};
default:
    res.end("not found");}
});
});



// const http = require ("http")
// const myServer =http.createServer((req,res)=>{
// console.log(req);
// res.end("okay thanks")});
// const port=8000;
// console.log(port);
// myServer.listen (port,()=> console.log("started port no.",port));



// const myServer = http.createServer((req, res) => {
//     if ( req.url==="/"){
//         res.end("homepage")
//     }
//     else if(req.url==="/about"){
//         res.end("i am about page")
//     }else
//     {
//         res.end("404 error not found")
//     }})
//     const port=8000;
//  myServer.listen (port,()=> console.log("started port no.",port));

    
    
//  const log = `${Date.now()}:${req.url} New req recieved\n`;
//   const myUrl = url.parse(req.url, true);
//   fs.appendFile("log.txt", log, (err, data) => {
//     switch (url.pathname) {
//       case "/":
//         res.end("homepage");
//         break;
//       case "/about":
//         res.end("i am amna");
//         break;
//       default:
//         res.end("not found");
//     }
//   });
// });
// const port=8000;
// myServer.listen(port, () => console.log("started port no.", port));


if (req.url === "/favicon.ico ")return res.end();
const log=`${Date.now()}:${req.url} New req recieved\n`;
const myUrl=url.parse(req.url,true);
console.log(myUrl)
fs.appendFile("log.txt", log ,(err,data) =>{
switch (myUrl.pathname) {
    case"/":
    if ( req.method===GET)res.end("homepage");
break;
case "/about":
    const myusername= myUrl.query.myname;
    res.end ("i am amna");
break;
case "/signup":
    if ( req.method===GET){
        res.end("this is a signup form")
    }
    else if (req.method===POST){
        res.end("success")
    }else{
        res.end("not found")
    }
}
})
})
