const express= require ("express");
const users= require("./MOCK_DATA.json");
const fs= require ("fs");
const app= express();
const mongoose=require ("mongoose");
const port=8001;

app.get("/api/users",(req,res)=>{
    console.log("idhar kia ho ra hai ",users);
    return res.json(users )
});
app.get("/api/users", (req, res) => {
    console.log("idhar kia ho raha hai:", users); // Logging users
    return res.json(users); // Sending users as JSON response
});

// app.get("/users",(req,res)=>{
//     return res.json(users)
// });
//  app.get("/api/users/:id",(req,res)=>{
//      const id=number(req.params.id);
//      const user= users.find((user)=> user.id ===id);
//      return res.json(user );
//  });

 app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id); // Convert ID to a number
    const user = users.find((user) => user.id === id); // Find user by ID

    // if (!user) {
    //     return res.status(404).json({ message: "User not found" });
    // }

    return res.json(user); // Return the found user
});

mongoose.connect("mongodb://127.0.0.1:27017/,youtube_app")
.then (()=> console.log("mongo connected"))
.catch((err)=> console.log("mongo error"));


const userSchema = new mongoose.Schema({
    first_name:{ type:"string",
        required:"true"
    },
    last_name:{ type:"string",
        
    },
    email:{ type:"string",
        required:"true",
        unique:true,
    },
    gender:{ type:"string",
        
    },
    job_title:{ type:"string",
        required:"true"
    }

});

const User = mongoose.model("user",userSchema);

app.post ("/api/users"),(async(req,res)=>{
    const body=res.body;
    if(
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title 
)
    
   { return res.status(400).json({msg:"all fields are required"});}
   const result = await User.create({
    firstName:body.first_name,
    lastName:body.last_name,
    email:body.email,
    gender:body.gender,
    job_title: body.job_title,
   })
   return res.status(201).json({msg:"success"});
   console.log(result);
});

// app.route("/api/users/:id")
// .get((req, res) => {
//     const id = Number(req.params.id); // Convert ID to a number
//     const user = users.find((user) => user.id === id);
    
//     return res.json(user); // Return the found user
// });
// .patch((req, res) => {
//     const id = Number(req.params.id); // Convert ID to a number
//     const user = users.find((user) => user.id === id);
    
//     return res.json(user); // Return the found user
// });

// middleware plugin
app.use(express.urlencoded({extented:false}));

app.use((req,res,next)=>{
console.log("hello malware");
return response.json({msg: "helo malware"});
});

app.listen (port,()=>console.log("listening on port",port));
