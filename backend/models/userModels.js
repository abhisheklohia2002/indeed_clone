const mongoose = require("mongoose");
const UserSchemma = mongoose.Schema({
name:{
    type:String,
    required:true,

}
,
email:{
    type:String,
    required:true,  
},
password:{
    type:String,
    required:true,
},
pic:{
    type:String,
   
    default:""
}
},
{
    timestamp:true
}
)


const User = mongoose.model("User",UserSchemma)

module.exports = User