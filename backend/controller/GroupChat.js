
const User= require("../models/userModels")

async function GroupChat() {
  try {
    if(!req.body.users || !req.body.name){
        return res.status(400).send({message:"please fill all the field "})
    }
    else {
        var user = JSON.parse(req.body.users);
        if(user.length < 2){
            return res.status(400).send("More than 2 users are required to form a group chat")
        }
        else {
            user.push(req.user)
        }
    }
  } catch (error) {
    
  }
}
module.exports = GroupChat
