const PostModel = require("../models/PostJob")



const PostJob = async(req,res)=>{
    const {profile,company,location,package,role} = req.body
try {
    if(profile !== "" || company !== "" || location !== "" || package !== "" || role !== ""){
const CheckModel = new PostModel({
    profile,company,location,package,role
});
await CheckModel.save();
res.send({msg:"Job Successfully",status:200})
    }
    else {
        res.send({msg:'fill all field',status:401})
    }
    
} catch (error) {
   res.status(400).send(error) 
}
}
const ShowAll_job = async(req,res)=>{
    try {
        const showAll_job = await PostModel.find({});
        res.send({msg:showAll_job,status:200})
    } catch (error) {
        console.log(error)
        res.send({msg:error,server:"show All Job Error"})
    }
}

//searching System 
const Searching_system = async(req,res)=>{
    const { query } = req.query
console.log(query)
 
    try {
        const searchResults = await PostModel.find({ location: { $regex: `\\b${query}\\b`, $options: 'i' } });
        
    const anotherFieldResults = await PostModel.find({
        profile: { $regex: `\\b${query}\\b`, $options: 'i' },
      });
  
      const alladd = [...searchResults,...anotherFieldResults]
      res.json({ alladd});
      
    } catch (error) {
        res.status(500).json({ error: 'Error performing search' });
    }
}




module.exports = {
    PostJob,ShowAll_job,Searching_system
}