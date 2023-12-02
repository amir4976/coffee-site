const mongoose = require("mongoose")


const schema = mongoose.Schema({
        username:{
            type:String,
            required:true,
            // minLength,maxLength
        },
        email:{
            type:String,
            required:true,
            // pattern 
        },
        password:{
            type:any,
            required:true,
            minLength:8 ,
        },
})


const model = mongoose.model('User',schema)

export default model




