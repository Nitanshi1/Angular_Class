const express= require('express');
const mongoose=require('mongoose');
const session = require('express-session');
const bodyparser=require('body-parser');

require('dotenv').config()
const appRoutes = require('./Routes/appRoutes');
const commRoutes = require('./Routes/commRoutes');
const downloadRoutes = require('./Routes/downloadRoutes');

const app=express();
app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})
app.use(session({
    secret: 'secret_key',
    resave:true,
    saveUninitialized:true
}))
const authRoutes = require('./Routes/authRoutes');
const {authenticate, authorize} = require('./Middleware/authMiddleware');
app.use('/auth', authRoutes);


app.use('/applications',authenticate, appRoutes)
app.use('/comments', commRoutes)
app.use('/user/download', authenticate, authorize('user'), downloadRoutes)
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})