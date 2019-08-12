//import only Schema from mongose using destructoring
const mongoose = require('mongoose');

const itemsSchema = require('./items')

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 100,
        require: true
    },
    date: {
        type: Date,
        require: true
    },
    items: {
        type: [itemsSchema]
    },
    location: {
        type: String,
        minlength: 5,
        maxlength: 120,
        require: true
    }
})

module.exports = mongoose.model('Event', eventSchema)