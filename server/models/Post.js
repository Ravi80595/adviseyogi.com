import mongoose from 'mongoose'
import { GetCurrentDate,GetCurrentTime } from "../Utils/DateTime.js";

const currentDate=GetCurrentDate()
const currentTime=GetCurrentTime()


const postSchema = mongoose.Schema(
    {
        userId:{type:String,required:true,},
        username:String,
        text:String,
        likes:{type:Array,default:[]},
        approved:{type:Boolean,default:false},
        date:{type:String,default:currentDate},
        time:{type:String,default:currentTime}
    },{
        timestamps:true
    }
)

const Post = mongoose.model("Post",postSchema)

export default Post;