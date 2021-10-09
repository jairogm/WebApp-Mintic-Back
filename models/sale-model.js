const mongoose = require('mongoose');
const { Schema } = mongoose;

const saleSchema = new Schema({
    sellerid: {
        type: String,
        required: true,
    },
    sellername: {
        type: String,
        required: true,
    },
    site: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    detail: {
        type: Array,
        required: true,
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('sales', saleSchema);