//import only Schema from mongose using destructoring
const { Schema } = require('mongoose');

const itemSchema = require('./item.js')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 100
    },
    date: {
        type: Date,
    },
    items: {
        type: [itemSchema]
    }
})

module.exports = eventSchema;