const mongoose = require('mongoose');
const petsSchema = new mongoose.Schema({
    name: { 
        type: String,
         required: true 
        },
    species: { 
        type: String, 
        required: true },
    age: { 
        type: Number,
         required: true,
         minAge:0,
         maxAge:100
         },
    gender: { 
        type: String,
         required: true 
        },
    adoptionStatus: { 
        type: String,
         default: 'available'
         },
    vaccinated: {
         type: Boolean, 
        default: false 
    },
    description: {
         type: String 

    },
    image: {
         type: String 
        },

});
const pets=mongoose.model('pets',petsSchema);
module.exports=pets;