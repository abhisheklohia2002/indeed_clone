const mongoose = require("mongoose");
const MessageModels = mongoose.Schema({
Sender:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
},
content:{
    type:String,
    trim:true
},
chat:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Chat"
}
},

{
    timestamps:true
}
)

const Message = mongoose.model("Message",MessageModels);
module.exports = Message