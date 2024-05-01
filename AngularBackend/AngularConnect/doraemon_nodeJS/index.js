const express = require('express');
const charRoute = require('./charRoute')


const app = express();
const PORT = 6000;

app.use(express.json());
app.use("/character", charRoute)

app.listen(PORT, ()=>{
    console.log("Server is running at the port" +PORT)
})


