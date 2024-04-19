const express=require('express');
const router=express.Router();
const Mem=require('../models/members');
router.get('/', async (req, res) => {
    try {
        const members = await Mem.find({});
        res.send(members);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.get('/search',async(req,res)=>{
    try{

        const members = await Mem.find({'name':{$regex:req.query.term,$options:'i'}})

        res.send(members);

    }catch(err){

        res.status(500).send(err);

    }
})
router.get('/:id', async (req, res) => {
    try {
        const member = await Mem.findOne({ id: req.params.id }); 
        console.log(member);
        if (!member) {
            return res.status(404).send('Member not found');
        }
        res.send(member);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const maxMemberId = await Mem.findOne({}, {}, { sort: { 'id': -1 } });
        const newMemberId = maxMemberId ? maxMemberId.id + 1 : 1;
        req.body.id=newMemberId
        const member = new Mem(req.body); 
        await member.save();
        res.send(member);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const member = await Mem.findOneAndUpdate({ id: req.params.id }, req.body, { new: true }); // Find and update by id
        if (!member) {
            return res.status(404).send('Member not found');
        }
        res.send(member);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const member = await Mem.findOneAndDelete({ id: req.params.id }); 
        if (!member) {
            return res.status(404).send('Member not found');
        }
        res.send(member);
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports=router
