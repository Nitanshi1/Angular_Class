const express = require('express');
const mongoose = require('mongoose');
const bodyparser=require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const member_route=require('./routes/member');
app.use(cors());

mongoose.connect(process.env.MONGODB_URI); 
const db = mongoose.connection;

db.on('error', () => {
    console.log('MongoDb connection error.....');
});

// const memSchema = new mongoose.Schema({
//     name: String,
//     id: Number, 
// });

// const Mem = mongoose.model('Mem', memSchema);
app.use(express.json());


app.use('/members',member_route)
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}....`);
});
