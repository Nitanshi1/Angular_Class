const express=require('express');
const mongoose=require('mongoose');

const bodyparser=require('body-parser');
const appRoutes=require('./src/Routes/appRoutes')
const authRoutes=require('./src/Routes/authRoutes')
const downloadRoutes = require('./src/Routes/downloadRoutes')
const {authenticateUser,authorizeUser,authorizeCreator}=require('./src/Middleware/authMiddleware');
require('dotenv').config()
const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to database");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use('/applications',authenticateUser,appRoutes);
app.use('/auth',authRoutes);
app.use('/downloads', authenticateUser,authorizeUser('user'), downloadRoutes);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})