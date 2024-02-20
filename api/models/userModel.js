const { timeStamp } = require("console");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username:{
       type:String,
       required:true,
       unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        default:"https://g.co/kgs/DZnw1f6"
    },
},
{timeStamp:true}
)

module.exports = mongoose.model('User',userSchema )