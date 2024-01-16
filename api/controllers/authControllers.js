const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const { errorHandler } = require("../utils/err")
const jwt = require("jsonwebtoken")

const Signup = async (req,res,next)=>{
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
    next(error)
  }
}

const Signin = async (req,res,next)=>{
  const {email,password} = req.body
  try{
    const validUser = await User.findOne({email})
    if(!validUser) return next(errorHandler(404,"User not found"))
    const validPassword = await bcrypt.compareSync(password,validUser.password)
    if(!validPassword) return next(errorHandler(401,"wrong credentials"))
    const token = await jwt.sign({id:validUser._id},process.env.JWT_SECRET)
   const {password:pass, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  }catch(err){
    next(err)
  }
}

const google = async (req,res)=>{
  try {
    const user = await User.findOne({email:req.body.email})
    if(user){
      const token = await jwt.sign({id:user._id},process.env.JWT_SECRET)
      const {password:pass, ...rest } = user._doc;
      res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
    }else{
       const password = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8)
       const hashedPassword = bcrypt.hashSync(password, 10)
       const newUser = new User({
        username:req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4),
        email:req.body.email,
        password:hashedPassword,
        avatar:req.body.photo
       })
       await newUser.save()
       const token = await jwt.sign({id:newUser._id},process.env.JWT_SECRET)
       const {password:pass, ...rest } = user._doc;
      res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);

    }
  }catch (error){
    next(error)
  }
}
module.exports = {
    Signup,
    Signin,
    google
}