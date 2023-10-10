const mongoose = require('mongoose');
const currentDate = new Date();
const PostJob_Schemma = new mongoose.Schema({
    profile:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,  
    },
    location:{
        type:String,
        required:true,
    },
    package:{
        type:String,
        required:true,
    },
    date:{
        type:String,
     
        default:currentDate.getDate()
    },
    role:{
        type:String,
        required:true,
    }
},
{
    timestamps:true
})

const PostModel = new mongoose.model('postjob',PostJob_Schemma);
module.exports = PostModel