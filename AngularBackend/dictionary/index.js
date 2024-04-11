const express = require('express');

const routes = require('./myRoute2')

const jwt = require('jsonwebtoken');

const session = require('express-session');

const app = express();
const PORT = 6000;
app.use(express.json());
app.listen(PORT , ()=>{
    console.log("Server is running at port "+PORT)
})

app.use(session({secret:"SomeComplexString" } , resave = true , saveUnitialized=true));
app.use("/members" , (req,res,next)=>{

    if(req.session.authorization){

        token = req.session.authorization['accessToken'];

        jwt.verify(token , 'access' , (err,user)=>{

            if(!err){

                req.user = user;

                next();

            }else{

                return res.status(403).json({message:"User not authenticated"})

            }

        })

    }else{

        return res.status(403).json({message:"User not logged In"})

    }

})

app.use("/members",routes)

 

let users = []
const doesExist = (username)=>{

    let userWithUsername = users.filter(user => user.username === username);

    if(userWithUsername.length >0 ){

        return true;

    }else{

        return false;

    }

}
const authenticatedUser = (username , password)=>{

    let validUser = users.filter(user => (user.username === username && user.password === password));

    if(validUser.length >0){

        return true;

    }else{

        false;

    }

}
app.post("/login" , (req,res)=>{

    const username = req.body.username;

    const password = req.body.password;

    if(!username || !password){

        return res.status(404).json({message:"Error Loggin In........."});

    }

 

    if(authenticatedUser(username , password)){

        let accessToken = jwt.sign({

            data:password

        },'access',{expiresIn:60*60})

 

        req.session.authorization = {

            accessToken , username

        }

        return res.status(200).json({message:"User Logged In Successfully........."})

    }else{

        return res.status(400).json({message:"Invalid Login .... Check Username and Password"})

    }

})
app.post("/register" , (req,res)=>{

    let username = req.body.username;

    let password = req.body.password;

    if(username && password){

        if(!doesExist(username)){

            users.push({"username":username , "password":password});

            return res.status(200).json({message:"User successfullt Register......"})

        }else{

            return res.status(404).json({message:"User already Exists...."})

        }

    }
    return res.status(404).json({message:"Unable to Register........"});
})