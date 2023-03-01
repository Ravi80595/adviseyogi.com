import mongoose from 'mongoose'
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()


const adminSchema = mongoose.Schema(
    {
        userId:{
            type:String,
            required:true,
        }
    },{
        timestamps:true
    }
)

const Admin = mongoose.model("Admin",adminSchema)

export default Admin;