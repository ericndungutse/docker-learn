import express from "express";

import dotenv from 'dotenv'
dotenv.config()

const app = express();
// mongoose.connect("mongodb+srv://eric_ndungutse:f9lvMMnMVGixPqjO@cluster0.dqpybc4.mongodb.net/docker_db?retryWrites=true&w=majority").then(()=>{
//   console.log("DB connected")
// }).catch((error)=> console.log(error.message))

app.get('/', function (req, res) {
  res.send('Hello World Again!')
});
console.log(process.env.NODE_ENV)

app.get('/users', async (req, res) => {
  try {
    console.log(process.env.SECRET_KEY)

    res.status(200).json({
      status: "success",
      data: "Users"
    })
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Interna server errror"
    })

  }
})

app.listen(3000);