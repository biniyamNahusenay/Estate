const express = require("express")
const env = require("dotenv").config() 
const mongoose = require("mongoose")
const userRoutes = require("./routes/userRoutes")
const authRoutes = require("./routes/authRoutes")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json({limit:"10mb"}))
app.use("/api/user",userRoutes)
app.use("/api/auth",authRoutes)

try{
    mongoose.connect(process.env.mongo_url)
  console.log("mongodb connected")
}catch(err){
   console.log(err)
   process.exit(1)
}

app.listen(3000,()=>{
    console.log("server started")
})