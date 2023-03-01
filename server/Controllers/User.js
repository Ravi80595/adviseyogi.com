import User from "../models/User.js"


export const register = async (req,res)=>{
    try{
        const {fullName} = req.body
        const user= await User.findOne({fullName:fullName})
        if(user){
            res.status(200).send({"msg":"User already exist"})
        }else{
            const newUser = new User({fullName})
            const saveUser = await newUser.save()
            res.status(201).send({"msg":"User Saved Successfully",saveUser})
        }
    }
    catch(err){
        console.log(err)
        res.status(500).json({error:err.message})
    }
}


// *************************  Search User *********************************

export const searchUser=async(req,res)=>{
    const params=req.params.id
    try{
        const users= await User.find({fullName:{$regex:req.params.id}})
        res.send(users)
    }catch (err) {
        console.log(err)
    }
}


// ........................... All User Get Method Admin ...............................

export const AllUser = async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).send(users)
    }catch(err){
        console.log(err)
    }
}