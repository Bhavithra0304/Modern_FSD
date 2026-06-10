const User = require("../Models/UserModel");

const Signup = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;
    const NewUser = new User({
      firstname,
      lastname,
      email,
      phone,
      password,
    });
    const savedUser = await NewUser.save();
    res.status(201).json({
      savedUser,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const readUser=async (req,res)=>{
    try{
        const Users = await User.find();
        res.status(200).json({
            Users
        })
    }
    catch(err)
    {
        res.status(404).json({
            error:err.message
        })
    }
}

module.exports = { Signup,readUser };