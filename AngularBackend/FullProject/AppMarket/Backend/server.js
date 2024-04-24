const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const app = express();
const port = 3000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/appStore1')
.then(()=>{
    console.log('Connected to MongoDB...')
})
.catch((error)=>{
    console.log('Failed to connect to mongodb',error)
})

const applicationRoutes = require('./routes/applicationRoutes')
app.use('/applications' , applicationRoutes);
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}......`);

})