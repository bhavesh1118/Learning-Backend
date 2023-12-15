const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello Peeps");
})

app.listen(3000,()=>{
    console.log("server is listening at port no. 3000")
});