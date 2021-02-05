const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database:"eventdb",    
})

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));


app.get("/api/event/get",(req,res)=>{
    const sqlSelect = "Select * from event;"
    db.query(sqlSelect,(err,result)=>{
        res.send(result);
    })
})

app.get("/api/event/get/:id",(req,res)=>{
    const id = req.params.id;
    const sqlSelect = "Select * from event where id = ?;"
    db.query(sqlSelect,id,(err,result)=>{
        res.send(result);
    })
})

app.post("/api/event/insert",(req,res)=>{
    console.log("body:"+req.body.eventdate);
    const title = req.body.title;
    const eventdate = req.body.eventdate; 
    const description = req.body.description;
    const category = req.body.category;
    const city = req.body.city;
    const address = req.body.address;
    const sqlInsert="insert into event (title,eventdate,description,category,city,address) values (?,?,?,?,?,?);";
    db.query(sqlInsert,[title,eventdate,description,category,city,address],(err,result)=>{
        console.log(err);
    })
});

app.delete("/api/event/update",(req,res)=>{
    console.log("enter update");
    const id = req.body.id;
    const title = req.body.title;
    const eventdate = req.body.eventdate; 
    const description = req.body.description;
    const category = req.body.category;
    const city = req.body.city;
    const address = req.body.address;
    const sqlUpdate="update event set title=?, category=?, address=?, eventdate=?, description=? where id=?";

    db.query(sqlUpdate,[id,title,eventdate,description,category,city,address],(err,result)=>{
        if(err) console.log(err);;
    })
})

app.delete("/api/event/delete/:id",(req,res)=>{
    console.log("enter delete");
    const id=req.params.id;
    const sqlDelete="Delete from event where id = ?;";

    db.query(sqlDelete,id,(err,result)=>{
        if(err) console.log(err);;
    })
})

app.listen(3001,()=>{
    console.log("running on port 3001");
})