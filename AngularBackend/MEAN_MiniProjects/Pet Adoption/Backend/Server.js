const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
require('dotenv').config()

const PetsRoute = require('./src/Routes/PetsRoute');
const app = express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})


app.use('/pets', PetsRoute);



const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})