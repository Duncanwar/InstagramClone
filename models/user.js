const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    photo:{type:String,
    default:"https://res.cloudinary.com/semugeshi/image/upload/v1590387633/sample.jpg"
    },
    followers:[
        {type:ObjectId,
    ref:"user"}],
    following:[{type:ObjectId,
        ref:"user"}]
})

mongoose.model("user",userSchema)