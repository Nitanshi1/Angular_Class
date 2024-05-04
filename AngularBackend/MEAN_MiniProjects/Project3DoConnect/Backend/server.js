const express=require('express');
const mongoose=require('mongoose');


const bodyparser=require('body-parser');
const QuestionRoute=require('./src/routes/QuestionRoute');
const AnswerRoute=require('./src/routes/AnswerRoute')
const CommentRoute=require('./src/routes/CommentRoute')
const authRoute=require('./src/routes/authRoute')
const {authenticateUser}=require('./src/middleware/authMiddleware')
require('dotenv').config()
const app=express();
app.use(bodyparser.json());


 mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((error)=>{
    console.log("failed to connect to mongodb",error);
})


app.use('/question/answer',authenticateUser,AnswerRoute);
app.use('/question/answers/comment',authenticateUser,CommentRoute);
app.use('/question',authenticateUser,QuestionRoute);
app.use('/auth',authRoute);
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})