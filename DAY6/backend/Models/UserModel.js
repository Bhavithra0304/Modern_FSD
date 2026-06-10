const mongoose=require("mongoose");

const User = new mongoose.Schema({

    firstname:String,
    lastname:String,
    email:String,
    phone:String,
    password:String,
    // role:"user"
})

module.exports=mongoose.model("User",User);