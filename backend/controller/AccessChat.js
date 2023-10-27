

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
            },
            {
                users:{$elemMatch:{$eq:userId}}
            }
        ]
      }).populate("users","-password").populate("latestMessage");

      isChat = await Chat.populate(isChat,{
        path:"latestMessage.sender",
        select:"name pic email",

      });

      if(isChat.length>0){
        res.send(isChat[0]);

      }else{
        var chatData  = {
            chatName : "sender",
            isGroupChat:false,
            users:[req.user._id,userId]
        }
      }

const createdchat  = await Chat.create(chatData)
const fullChat = await Chat.findOne({_id:createdchat._id}).populate("users","-password")
res.status(220).send(fullChat)


    }
} catch (error) {
    res.status(400)
   console.log(error) 
}


}

module.exports = AccessChat;
