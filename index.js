const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const db = require('./config/db').database;
const ChatsRoute = require('./routes/api/message');
const ProvincesRoute = require('./routes/api/province');
const CitiesRoute = require('./routes/api/city');
const UsersRoute = require('./routes/api/user');
const ConversationRoute = require('./routes/api/conversation');
const InboxRoute = require('./routes/api/chat');
const DriverRoute = require('./routes/api/driver');

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

app.use('/api/chats',ChatsRoute);
app.use('/api/provinces',ProvincesRoute);
app.use('/api/Cities',CitiesRoute);
app.use('/api/users',UsersRoute);
app.use('/api/conversations',ConversationRoute);
app.use('/api/inbox',InboxRoute);
app.use('/api/drivers',DriverRoute);

app.listen(port,()=>{
    console.log("Server started...");
});