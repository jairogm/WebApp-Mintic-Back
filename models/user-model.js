const mongoose = require('mongoose');
const { Schema } = mongoose;

function requiresPassword() {
    // this
    return !this.withGoogle;
}


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: requiresPassword
    },
    rol: {
        type: String,
        default: 'Pending',
        enum: ['Admin', 'Seller', 'Pending']
    },
    withGoogle: {
        type: Boolean,
        required: true,
    },
    DNI: {
        type: Number,
    },
    status: {
        type: String,
        required: true,
    },
}, {
    versionKey: false
});

userSchema.methods.toJSON = function () {
    return { ...this.toObject(), password: undefined };
  }

module.exports = mongoose.model('users', userSchema);