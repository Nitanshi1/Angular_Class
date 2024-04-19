const express=require('express');
const router=express.Router();
const Character=require('../models/charactermodel');
router.get('/', async (req, res) => {
    try {
       
        const characters = await Character.find();
        

        res.send(characters);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.get('/search',async(req,res)=>{
    try{

        const characters= await Character.find({'name':{$regex:req.query.term,$options:'i'}})

        res.send(characters);

    }catch(err){

        res.status(500).send(err);

    }
})

router.get('/:id', async (req, res) => {
    try {
        const character = await Character.findOne({ char_id: req.params.id });
        console.log(character);
        if (!character) {
            return res.status(404).send('Character not found');
        }
        res.send(character);
    } catch (err) {
        res.status(500).send(err);
    }
});



router.post('/', async (req, res) => {
    try {
        const maxcharId = await Character.findOne({}, {}, { sort: { 'char_id': -1 } });
        const newcharId = maxcharId ? maxcharId.char_id + 1 : 1;
        req.body.char_id = newcharId;
        const character = new Character(req.body);
        await character.save();
        res.send(character);
    } catch (err) {
        res.status(500).send(err);
    }

});


router.put('/:id', async (req, res) => {
    try {
        const character = await Character.findOneAndUpdate({ char_id: req.params.id }, req.body, { new: true });

        if (!character) {
            return res.status(404).send('Character not found'); 
        }
        res.send(character);
    } catch (err) {
        res.status(500).send(err);

    }
});



router.delete('/:id', async (req, res) => {
    try {
        const character = await Character.findOneAndDelete({ char_id: req.params.id });
        if (!character) {
            return res.status(404).send('Character not found'); 
        }
        res.send(character);

    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports=router
