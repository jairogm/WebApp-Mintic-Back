const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    sku: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
}, {
    versionKey: false 
});

module.exports = mongoose.model('products', productSchema);