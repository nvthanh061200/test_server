const express = require('express');
const app = express();

const db = require('./config/connect');
db.connect();

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
function _query(sql) {
    return new Promise((resolve, reject) => {
        db.connection.query(sql, (err, result) => {
            if (err) {
                return reject(err)
            }
            return resolve(result);
        });
    })
}
app.get("/taobang", async (req, res) => {
    let sql = `CREATE TABLE bangne ( id int AUTO_INCREMENT primary key, name text )`

    let create_table = await _query(sql);
    if (create_table) {
        res.json({
            method: "thanh cong",
        })
    } else {
        res.json({
            message: "tao bao that bai"
        })
    }
})
app.listen(3000,()=>{
    console.log("server dang chay cong 3000");
});