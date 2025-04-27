import mongoose from "mongoose";
// import validator from 'validator'

const contectSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minlength: [3, 'Name must contain at least 3 cherectors']
    },

    message:{
        type: String,
        required: true,
    }

})

export const Contect = mongoose.model('contect', contectSchema)