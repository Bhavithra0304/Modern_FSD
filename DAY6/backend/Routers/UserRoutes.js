const express=require("express")
const router=express.Router();

const {Signup}=require("../Controllers/UserController");
const{readUser} = require("../Controllers/UserController")

router.post("/signup",Signup);
router.get("/getUsers",readUser);
module.exports=router;