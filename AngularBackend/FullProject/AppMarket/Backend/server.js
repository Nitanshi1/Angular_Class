const express= require('express');
const mongoose=require('mongoose');
const session = require('express-session');
const bodyparser=require('body-parser');
const userRoutes=require('./routes/userRoutes')
require('dotenv').config()
const applicationRoutes=require('./routes/applicationRoutes');
const favoritesAppRoutes = require('./routes/favoritesAppRoutes');
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

const authRoutes = require('./routes/authRoutes')
const {authenticate, authorize} = require('./middleware/authMiddleware')
app.use('/auth', authRoutes);
app.use('/user',authenticate,authorize('admin'),userRoutes);
app.use('/applications',authenticate, applicationRoutes)
app.use('/user/favorites', authenticate, authorize('user'), favoritesAppRoutes)
const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})