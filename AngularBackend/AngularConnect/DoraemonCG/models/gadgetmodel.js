const mongoose = require('mongoose');
const gadSchema = new mongoose.Schema({
    name: String,
    work: String,
    gad_id: Number
});
module.exports = mongoose.model('Gadget', gadSchema);