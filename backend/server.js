const mongoose = require("mongoose");
const express = require("express");
const routes = require('./Routes/routes');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URL,{useNewUrlParser:true});

const db = mongoose.connection;
db.on('error',()=>{console.log('error has occured')});
db.on('open',()=>{console.log('Connection established')});

app.use('/StationaryProducts/',routes)

app.listen(process.env.PORT,()=>{console.log("Welcome to Backend Server ;)")})