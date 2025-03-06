const http = require("http");
const express =require ("express");

const app= express();
    app.get("/",(req,res)=>{
        return res.send("helow");
    });
    app.get("/about",(req,res)=>{
        return res.send("helow gg" + `${req.query.name}`)
    });

//     if(req.method=== "GET" && req.url==="/"){
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("welcome to homepage")
//     }
//     else if 
//       (req.method === "GET" && req.url === "/about") {
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end("welcome to aboutpage")
//     }
//     else {
//         res.end("404 not found")
//     }
// });
const Server=http.createServer(app);
  const port = 8000;
app.listen(port, ()=> console.log("listening on port",port))
