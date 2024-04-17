const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb://localhost:27017/my_products');
const db = mongoose.connection;

db.on('error' , ()=>{

    console.log('MongoDb connection error.....');

})
const proSchema = new mongoose.Schema({
    name: String,
    price : Number,
    description:String
})

 
const Pro = mongoose.model('Pro',proSchema);
app.use(express.json());
app.get('/products' , async (req,res)=>{
    try{
        const products = await Pro.find();
        res.send(products);
    }catch(err){
        res.status(500).send(err);
    }
})

app.get('/products/:id' , async (req,res)=>{
    try{
        const product = await Pro.findById(req.params.id);
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.send(product);
    }catch(err){
        res.status(500).send(err);
    }

})
app.post('/products' , async (req,res)=>{
    try{
        const product = new Pro(req.body);
        await product.save();
        res.send(product);
    }catch(err){
        res.status(500).send(err);
    }

})
app.put('/products/:id' , async (req,res)=>{
    try{
        const product = await Pro.findByIdAndUpdate(req.params.id , req.body, {new:true});
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.send(product);
    }catch(err){
        res.status(500).send(err);
    }

})
app.delete('/products/:id' , async (req,res)=>{
    try{
        const product = await Pro.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).send('product not found');
        }
        res.send(product);
    }catch(err){
        res.status(500).send(err);
    }
})
const port = 3000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}....`);

})