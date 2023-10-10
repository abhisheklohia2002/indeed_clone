const express = require("express");
const app = express();
const cors  = require("cors");
const mongoose = require("mongoose");
const route= require("./routes/Allroutes")
const port = 8080
app.use(cors())
app.use(express.json());
app.use("/api",route)
mongoose.connect(`mongodb+srv://home:home@cluster0.sulz4do.mongodb.net/indeed?retryWrites=true&w=majority`,{

}).then((res)=>console.log("db is connected")).catch((err)=>console.log(`not connected db`))

app.listen(port,()=>{
    console.log(`server is ready at ${port}`)
})