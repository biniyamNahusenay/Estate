const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const ErrorHandler = require("../utils/error")
const jwt = require("jsonwebtoken")

const signUp = async (req,res,next)=>{
    const {username,email,password} = req.body
    const hashedPassword = bcrypt.hashSync(password,10)
    const newUser = new User({username,email,password:hashedPassword})
    try{
         await newUser.save()
        res.status(201).json("user created success")
    }catch(error){
        next(error)
    }
}

const signIn = async (req,res,next) => {
    const {email, password} = req.body
    try {
        const validUser = await User.findOne({email})
    if(!validUser) return next(ErrorHandler(404,'User not found'))
    const validPassword = await bcrypt.compareSync(password, validUser.password)
    if(!validPassword) return next(ErrorHandler(401,'Wrong Credentials'))
    const token = jwt.sign({id:validUser._id},process.env.JWT_SECRET)
    const {password:pass, ...rest} = validUser._doc
    res.cookie('access_token',token,{httpOnly:true}).status(200).json(rest)

    } catch (error) {
        next(error)
    }
}

module.exports = {
    signUp,
    signIn
}