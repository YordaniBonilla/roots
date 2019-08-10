//import only Schema from mongose using destructoring
const mongoose = require('mongoose');

const itemsSchema = require('./items')

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
        type: [itemsSchema]
    },
    location: {
        type: String,
        minlength: 5,
        maxlength: 120
    }
})

module.exports = mongoose.model('Event', eventSchema)