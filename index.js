const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message: "ket noi server thanh cong",
        data:" hello Nguyen Van Thanh"
    })
})

app.listen(3000,()=>{
    console.log("server dang chay cong 3000");
});