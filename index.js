const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message: "connection server sucessfully",
        data:" hello các bạn"
    })
})
app.get("/ahi",(req,res)=>{
    res.json({
        message: "connection server sucessfully",
        data:"helo Nguyễn Thị Lan Anh"
    })
})
app.listen(3000,()=>{
    console.log("server dang chay cong 3000");
});