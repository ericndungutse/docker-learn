import express from "express";
import mongoose from "mongoose";

import User from "./models/user.model.js";

const app  = express();

mongoose.connect("mongodb+srv://eric_ndungutse:f9lvMMnMVGixPqjO@cluster0.dqpybc4.mongodb.net/docker_db?retryWrites=true&w=majority").then(()=>{
  console.log("DB connected")
}).catch((error)=> console.log(error.message))

app.get('/', function (req, res) {
  res.send('Hello World Again!')
});
app.get('/users', async (req,res)=>{
  try {
    const users = await User.find()

    console.log(users)

    res.status(200).json({
      status: "success",
      data: users
    })
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Interna server errror"
    })
    
  }
})

app.listen(3000);