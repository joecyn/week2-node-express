const express = require("express");

const app= express();
//const PORT = process.env.PORT ;
const path = require('path');
require('dotenv').config();


app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next(); // Pass control to the next middleware
});


app.get("/",(req,res)=>{
    //res.send("My Week 2 API!");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));

});

app.post("/user",(req,res)=>{
    const {name, email}= req.body;

    if (!name || !email){
        res.status(400).send("Missing Name or Email!")   
    }
    res.send(`Hello ${name}`);

});

app.get("/user/:id",(req,res)=>{
    const id = req.params.id;
    res.send(`User ${id} profile`);

});


app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on Port: ${process.env.PORT}`);

});