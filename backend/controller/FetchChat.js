

const Chat = require("../models/ChatModels")
const User= require("../models/userModels")
const FetchChat = async(req,res)=>{
    try {
        Chat.find({users:{$elemMatch:{$eq:req.user._id}}})
        .populate("users","-password").populate('groupAdmin',"-password").populate("latestMessage").sort({updatedAt:-1})
        .then(async(results)=>{
            results = await User.populate(results,{
                path:"latestMessage.sender",
                select:"name pic email"
            })
            res.status(200).send(results)
        })
    } catch (error) {
        throw error
    }
}

module.exports = FetchChat;
