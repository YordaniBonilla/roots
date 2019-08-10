

const itemSchema = new Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 30
    },
    quantity: {
        type: Number,
        minlength: 1,
        default: 1
    },

    carrier: {
        type: String
    }
})


module.exports = itemsSchema;