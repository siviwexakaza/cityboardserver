const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const db = require('./config/db').database;
const route = require('./routes/api/message');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect(db,{useNewUrlParser:true}).then(()=>{
    console.log("Connected to database");
}).catch((err)=>{
    console.log(err);
});

app.get('/',(req,res)=>{
    res.send("api running...");
});

app.use('/api/chats',route);

app.listen(port,()=>{
    console.log("Server started...");
});