import cors from 'cors'
import express from 'express'
import userRoutes from "./routes/users.js"
import dotenv from "dotenv"
import mongoose from 'mongoose'
import postRoutes from "./routes/posts.js"


dotenv.config()
const app=express()
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("Welcome to our adviseyogi project.")
})

app.use("/user",userRoutes)
app.use("/post",postRoutes)


            // Database connection

const PORT = process.env.PORT || 3001
let connections = mongoose.connect(process.env.MONGO_URL)

app.listen(PORT,async()=>{
    try{
        await connections
        console.log("Server Connected With DataBase")
    }
    catch(err){
    console.log("Somethning Wents Wrong",err)
    }
    })
        