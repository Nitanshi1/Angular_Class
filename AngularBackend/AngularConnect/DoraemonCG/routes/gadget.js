const express=require('express');
const router=express.Router();
const Gadget=require('../models/gadgetmodel');
router.get('/', async (req, res) => {
    try {
       
        const gadgets = await Gadget.find();
        
        res.send(gadgets);

    } catch (err) {
        res.status(500).send(err);
    }
});
router.get('/search',async(req,res)=>{
    try{

        const gadgets= await Gad.find({'name':{$regex:req.query.term,$options:'i'}})

        res.send(gadgets);

    }catch(err){

        res.status(500).send(err);

    }
})
router.get('/:id', async (req, res) => {
    try {
        const gadget = await Gadget.findOne({ gad_id: req.params.id });
        console.log(gadget);
        if (!gadget) {
            return res.status(404).send('Gadget not found'); 
        }
        res.send(gadget);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.post('/', async (req, res) => {
    try {
        const maxgadId = await Gadget.findOne({}, {}, { sort: { 'gad_id': -1 } });
        const newgadId = maxgadId ? maxgadId.gad_id + 1 : 1;
        req.body.gad_id = newgadId;
        const gadget = new Gadget(req.body);
        await gadget.save();
        res.send(gadget);

    } catch (err) {
        res.status(500).send(err);
    }
});
router.put('/:id', async (req, res) => {
    try {
        const gadget = await Gadget.findOneAndUpdate({ gad_id: req.params.id }, req.body, { new: true });
        if (!gadget) {
            return res.status(404).send('Gadget not found'); 
        }
        res.send(gadget);
    } catch (err) {
        res.status(500).send(err);
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const gadget = await Gadget.findOneAndDelete({ gad_id: req.params.id });
        if (!gadget) {
            return res.status(404).send('Gadget not found'); 
        }
        res.send(gadget);
    } catch (err) {

        res.status(500).send(err);
    }
});

module.exports=router