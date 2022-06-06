const mongoose=require("mongoose");
const validator=require("validator");
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        },
    phone:{
            type:Number,
            required:true,
            min:10
          },
    message:{
            type:String,
            required:true,
            minLength:3
          }
})

// we need a collection
const User=mongoose.model("User",userSchema);
module.exports=User;
              