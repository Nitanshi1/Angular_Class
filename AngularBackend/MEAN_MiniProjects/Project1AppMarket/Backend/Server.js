const express= require('express');
const mongoose=require('mongoose');

const bodyparser=require('body-parser');

require('dotenv').config()
const appRoutes = require('./src/Routes/appRoutes');



const app=express();

app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})



app.use('/applications', appRoutes)


const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})