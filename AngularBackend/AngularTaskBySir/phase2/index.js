const express = require('express');
const mongoose = require('mongoose');
const { body , validationResult } = require('express-validator');

const methodOverride = require('method-override');

const multer = require('multer');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}))

app.use('/uploads' , express.static('uploads'));
const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'uploads/')
    },
    filename: function(req,file,cb){
        cb(null,Date.now()+path.extname(file.originalname));
    }
})
const uploads = multer({storage:storage});
mongoose.connect('mongodb://localhost:27017/my_products');


const db = mongoose.connection;
db.on('error' , ()=>{
    console.log('MongoDb connection error.....');
})
const proSchema = new mongoose.Schema({

    name: String,
    price:Number,
    description:String,
    imgpath:String

})

const Pro = mongoose.model('Pro',proSchema);
app.use(methodOverride('_method'))
app.set('view engine','ejs');
app.get('/products/new' , (req,res)=>{

    res.render('new-product' , {errors:null});

})
app.get('/products/:id/edit' ,async (req,res)=>{  
    try{
        const product = await Pro.findById(req.params.id);
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.render('edit-product' , {product , errors:null});
    }catch(err){

        res.status(500).send(err);
    }

})
app.get('/products' , async (req,res)=>{
    try{
        const products = await Pro.find();
        res.render('product-list' , {products})
    }catch(err){
        res.status(500).send(err);
    }
})
app.post('/products',uploads.single('imgpath') ,[
    body('name').isLength({min:5}).withMessage('Name is required with min 5 chars'),
    body('price').isInt({min:10000,max:50000}).withMessage('Price must be greater than 10000 and less than 50000'),
    body('description').isLength({min:3}).withMessage('description is required with min 3 chars')
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.render('new-product',{errors:errors.array()});
    }
    try{
        req.body.imgpath= req.file.path;
        console.log(req.body);
        const product = new Pro(req.body);
        await product.save();
        res.redirect('/products');
    }catch(err){
        res.status(500).send(err);
    }

})
app.put('/products/:id' ,uploads.single('imgpath'),[
    body('name').isLength({min:5}).withMessage('Name is required with min 5 chars'),
    body('price').isInt({min:10000 , max:50000}).withMessage('Price must be greater than 10000 and less than 50000'),
    body('description').isLength({min:3}).withMessage('description is required with min 3 chars')
], async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const product = await Pro.findById(req.params.id);
        return res.render('edit-product',{product , errors:errors.array()});
    }

    try{
        if(req.file){
            req.body.imgpath= req.file.path;
        }
        const product = await Pro.findByIdAndUpdate(req.params.id , req.body, {new:true});
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.redirect('/products');
    }catch(err){
        res.status(500).send(err);
    }
})
app.delete('/products/:id' , async (req,res)=>{
    try{
        const product = await Pro.findByIdAndDelete(req.params.id);
        if(!product){
            return res.status(404).send('Product not found');
        }
        res.redirect('/products');
    }catch(err){
        res.status(500).send(err);
    }
})

const port = 3000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}....`);
})