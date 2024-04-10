// const http = require('http');

// const helloMsg = function(req, res){
//     res.writeHead(200); //status code done successfully
//     res.end("Hello Everyome........")
// }

// const port = 8080;
// const server = 





const express = require('express');
const routes = require('./myRoute')


const app = express();
const PORT = 6000;

app.use(express.json());
app.use("/angular", routes)

app.listen(PORT, ()=>{
    console.log("Server is running at the port" +PORT)
})


