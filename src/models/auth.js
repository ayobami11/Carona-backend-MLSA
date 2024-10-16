import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },

    lastName: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    isVerified: {
        type: Boolean,
        default: false
    },
    role : {
        type: String,
        enum: ['admin', 'user'],
        default : 'user'
    }

})

const User = mongoose.model('users', userSchema)
export default User
