const mongoose = require('mongoose');
const charSchema = new mongoose.Schema({
    name: String,
    talent: String,
    char_id: Number
});


module.exports = mongoose.model('Character', charSchema);
