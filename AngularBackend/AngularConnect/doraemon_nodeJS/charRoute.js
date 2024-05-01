const express = require('express');
const router = express.Router();

let characters = [
    {
        name : "doraemon",
        color : "blue",
        favfood : "doracake",
        id : 1

    },
    {
        name : "nobita",
        color : "yellow",
        favfood : "coffee",
        id : 2
    },
    {
        name : "geeyan",
        color : "orange",
        favfood : "all",
        id : 3
    },
    {
        name : "shizuka",
        color : "pink",
        favfood : "pancake",
        id : 4
    }
]

router.get("/", (req,res)=>{
    res.send(characters);
});

router.get("/:id", (req,res)=>{
    const id = req.params.id;
    let filtered_characters= characters.filter(character => character.id === id);
    res.send(filtered_characters);
});


router.delete("/:id" , (req,res)=>{
    const id = req.params.id;
    characters = characters.filter(character => character.id != id);
    res.send(`Member with id ${id} deleted ........`);
});

// add a member
router.post("/" , (req,res)=>{
   characters.push({
        "name": req.query.name,
        "color": req.query.color,
        "favfood": req.query.favfood,
        "id": req.query.id
    });

    res.send(`Character ${req.query.name} has been Created.....`);
});

//update a member
router.put("/:id", (req,res)=>{
    const id = req.params.id;
    let filtered_characters = characters.filter(character => character.id === id);
    if(filtered_characters.length>0){
        let filtered_character = filtered_characters[0];
        let id = req.query.id;
        let name = req.query.name;
        let color = req.query.color;
        let favfood = req.query.favfood
        if(id){
            filtered_character.id = id;
        }
        if(name){
            filter_charcter.name = name;
        }
        if(color){
            filter_character.favfood = favfood;
        }
       
        characters =characters.filter(character => character.id != id);
        characters.push(filter_character);
        res.send(`Character with id ${id} updated.......`);
    }else{
        res.send("Unable to find the Character.....")
    }
})



module.exports = router;



