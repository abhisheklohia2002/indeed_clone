
const Registermodels = require("../models/userModels")
const jwt = require("jsonwebtoken")

 async function LoginActions(req,res) {
    const {email,password} = req.body;
    
 try {
    if(email !== "" || password !== ""){
const UserExits= await Registermodels.findOne({email});
if(UserExits){
    if(UserExits.password === password){
res.status(200).json({
    msg:"Successfully Login",
auth:true
})
    }
    else {
res.status(401).send({msg:"Invalid Password"})
    }
}
else {
res.status(401).send({msg:"User not found"})
}
    }
    else {

    }
 } catch (error) {
   console.log(error) 
 }
}

module.exports = LoginActions