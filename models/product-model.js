const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
        match: new RegExp('^[0-9]{4}$') 
    },
    editorial: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true,
    },
}, {
    versionKey: false 
});

module.exports = mongoose.model('products', productSchema);