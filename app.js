//import express from 'express'
const express = require('express')
// import mongoose from 'mongoose'
const mongoose = require('mongoose')
const taskRoutes = require('./routes/taskRoutes')

const app = express();

const port = 3000

// Middleware
app.use(express.json())

//connection string = mongodb+srv://youssefsaleh64:<password>@todolistdatabase.asdpxj4.mongodb.net/?retryWrites=true&w=majority

const uri = "mongodb+srv://<username>:<password>@todolistdatabase.asdpxj4.mongodb.net/?retryWrites=true&w=majority";

// DB connection
mongoose.connect(uri);

const db = mongoose.connection;

db.on('error' , () =>{
    console.log('connection error!');
})

db.once('open' , () => {
    console.log('Connected succesfully to DB');
})

app.use(taskRoutes);

app.listen(port , () => {
    console.log('Server started on port 3000');
})
