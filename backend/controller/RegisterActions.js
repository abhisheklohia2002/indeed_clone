const Registermodels = require("../models/userModels")
const jwt = require("jsonwebtoken")

//Generate Token 
const Generate_Token = (id)=>{
let token = jwt.sign({id},"hahchac",{expiresIn:"5h"});
return token
}




async function RegisterActions(req,res) {
    const {name,email,password,pic} = req.body;

    try {
       if(name!== "" || email !== "" || password !== ""){
const UserExits = await Registermodels.findOne({
    email:email
});
if(!UserExits){
const StoreUser = await Registermodels({
    name,email,password
});
res.status(201).send({
    msg:"successfully Register",
    status:201,
    token:Generate_Token()
})
await StoreUser.save();
}
else {
    res.send({msg:"User Already Present",status:400})
}

       }
       else {
res.send({msg:"fill all field"})
       }

    } catch (error) {
       console.log(error)
    }
   }
   
   module.exports = RegisterActions