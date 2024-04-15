const express = require('express');
const bodyParser = require('body-parser');
const {body , validationResult} = require('express-validator');
const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/home' , (req,res)=>{
    res.render('formvalid', {errors:null})
});


app.post('/submit',[
    body('name').isLength({min:5}).withMessage('Name is required with min 5 chars'),
    body('email').isEmail().withMessage('Invalid email')
],(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.render('formvalid' , {errors: errors.array()})
    }
    const {name , email } = req.body;
    res.render('submissionform' , {name , email});
})

app.post('/submit' , (req,res)=>{
    const {name, email} =req.body;
    res.render('submissionform',  {name, email});
})
const port = 4000;
app.listen(port , ()=>{
    console.log(`Server running on port ${port}....`);
})