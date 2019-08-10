let mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 30,
        required: true
    },
    quantity: {
        type: Number,
        minlength: 1,
        default: 1
    },

    carrier: {
        type: String,
        
    }
})


module.exports = itemsSchema;