

const Chat = require("../models/ChatModels")


const AccessChat = async(req,res)=>{
    const {userId} = req.body;


try {
    
    if(!userId)
    {
        res.status(401)
        console.log("UserId not Present")
    }
    else
    {
      let isChat = await Chat.find({
        isGroupChat:false,
        $and:[
            {
                users:{$elemMatch:{$eq:req.user._id}}
            }
        ]
      })
    }
} catch (error) {
   console.log(error) 
}


}

module.exports = AccessChat;
