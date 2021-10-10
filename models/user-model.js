const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    DNI: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
    },
    googleKey: {
        type: String,
        required: true,
    },
    rol: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
}, {
    versionKey: false
});

module.exports = mongoose.model('users', userSchema);