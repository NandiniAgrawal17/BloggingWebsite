const mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/mantechnical").then(()=>{
    console.log("connection succesful");
}).catch((error)=>{
    console.log(error);
})