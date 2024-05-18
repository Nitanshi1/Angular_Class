const express= require('express');
const mongoose=require('mongoose');

const bodyparser=require('body-parser');

require('dotenv').config()
const playlistRoutes = require('./src/routes/playlistRoutes')

const songRoutes = require('./src/routes/songRoutes');

const authRoutes=require('./src/routes/authRoutes')
const {authenticateUser,authorizeUser,authorizeCreator}=require('./src/middleware/authMiddleware')
const app=express();

app.use(bodyparser.json());
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})


app.use('/playlists', authenticateUser, playlistRoutes);
app.use('/auth',authenticateUser, authRoutes);
app.use('/songs',authenticateUser, songRoutes);

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})