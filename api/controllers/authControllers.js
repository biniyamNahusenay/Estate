const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

const Signup = async (req,res)=>{
  const {username,email,password} = req.body
  const hashedPassword = bcrypt.hashSync(password, 10)

  const newUser = new User({
    username,
    email,
    password:hashedPassword
  })
  try {
    await newUser.save()
    res.status(201).json("user created success")
  } catch (error) {
    res.status(500).json({message:error.message})
  }
}

module.exports = {
    Signup
}