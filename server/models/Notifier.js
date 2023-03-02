import mongoose from 'mongoose'
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()


const notifySchema = mongoose.Schema(
    {
        emails:[],
        date:{type:String,default:currentDate},
        time:{type:String,default:currentTime}
    },{
        timestamps:true
    }
)

const Emails = mongoose.model("Email",notifySchema)

export default Emails;