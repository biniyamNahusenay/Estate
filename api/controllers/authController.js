const User = require("../models/userModel")
const bcrypt = require("bcryptjs")

const signUp = async (req,res)=>{
    const {username,email,password} = req.body
    const hashedPassword = bcrypt.hashSync(password,10)
    const newUser = new User({username,email,password:hashedPassword})
    try{
        const user = await newUser.save()
        res.status(201).json(user)
    }catch(error){
        res.status(201).json(error.message)
    }
}

module.exports = {
    signUp
}