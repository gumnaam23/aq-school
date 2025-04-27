import mongoose from "mongoose";
import validator from 'validator'

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [4, 'Name must contain at least 4 charectors']
    },
    email:{
        type: String,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Please enter a valid email'
        }
    },
    password:{
        type: String,
        required: true,
        minlength: [8, 'Password must contain at least 8 charectors']
    }
}, {timestamps: true}
)
export const User = mongoose.model('user', userSchema);
