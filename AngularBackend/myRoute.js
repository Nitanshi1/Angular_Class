const express = require('express');
const router = express.Router();



let members = [
    {
        firstname : "Vansh",
        lastname : "Misra",
        email : "vansh1@gmail.com",
        age : 22
    },
    {
        firstname : "Nitanshi",
        lastname : "Agarwal",
        email : "nitanshiagarwal2@gmail.com",
        age : 22
    },
    {
        firstname : "Disha ",
        lastname : "Sachdeva",
        email : "disha3@gmail.com",
        age : 22
    },
    {
        firstname : "Ankit",
        lastname : "Gupta",
        email : "ankit4@gmail.com",
        age : 22
    }
]

router.get("/", (req,res)=>{
    res.send(members);
});

router.get("/:email", (req,res)=>{
    const email = req.params.email;
    let filtered_members = members.filter(member => member.email === email);
    res.send(filtered_members);
});

// deleting the member
router.delete("/:email" , (req,res)=>{
    const email = req.params.email;
    members = members.filter(member => member.email != email);
    res.send(`Member with email ${email} deleted ........`);
});

// add a member
router.post("/" , (req,res)=>{
    members.push({
        "firstname": req.query.firstname,
        "lastname": req.query.lastname,
        "email": req.query.email,
        "age": req.query.age
    });

    res.send(`Member ${req.query.firstname} has been Created.....`);
});

//update a member
router.put("/:email", (req,res)=>{
    const email = req.params.email;
    let filtered_members = members.filter(member => member.email === email);
    if(filtered_members.length>0){
        let filter_member = filtered_members[0];
        let age = req.query.age;
        let firstname = req.query.firstname;
        let lastname = req.query.lastname;
        if(age){
            filter_member.age = age;
        }
        if(firstname){
            filter_member.firstname = firstname;
        }
        if(lastname){
            filter_member.lastname = lastname;
        }
       
        members = members.filter(member => member.email != email);
        members.push(filter_member);
        res.send(`Member with email ${email} updated.......`);
    }else{
        res.send("Unable to find the Member.....")
    }
})



module.exports = router;


