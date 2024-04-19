const mongoose = require('mongoose');
const memSchema = new mongoose.Schema(
    {
        name: String,
        id: Number
    }
)

module.exports = mongoose.model('Member', memSchema);