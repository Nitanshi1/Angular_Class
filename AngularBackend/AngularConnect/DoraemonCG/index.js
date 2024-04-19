const express = require('express');

const mongoose = require('mongoose');
const bodyparser=require('body-parser')
const cors = require('cors');

require('dotenv').config();
const app = express();
const character_route=require('./routes/character');
const gadget_route=require('./routes/gadget');
app.use(cors()); 

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', () => {
    console.log('MongoDb connection error.....');
});
// const charSchema = new mongoose.Schema({
//     name: String,
//     talent: String,
//     char_id: Number
// });
// const gadSchema = new mongoose.Schema({
//     name: String,
//     work: String,
//     gad_id: Number
// });
// const Character = mongoose.model('Character', charSchema);
// const Gadget = mongoose.model('Gadget', gadSchema);
app.use(express.json());



app.use('/characters',character_route)
app.use('/gadgets',gadget_route)
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}....`);
});
