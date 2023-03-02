import Post from "../models/Post.js"
import User from "../models/User.js"



// ........................... Post Create Method ...............................

export const createPost = async(req,res)=>{
    try{
        const {userId,text,username}= req.body
        const user = await User.findById(userId)
        const newPost = new Post({
            userId,
            text,
            username,
            likes:[],
        })
        console.log(newPost)
        await newPost.save()
        const post = await Post.find()
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}


// ........................... Single User all posts ...............................


export const getUserPosts = async(req,res)=>{
    const {id}=req.params
    try{
        console.log(id)
        const post = await Post.find({$and:[{userId:id},{approved:true}]})
        res.status(200).json(post)
    }
    catch(err){
        console.log(err)
    }
}

// ...................... All aproved Posts Get Method Admin ............................

export const allApprovedComments = async(req,res)=>{
    try{
        const posts = await Post.find({approved:true})
        res.status(200).send(posts)
    }catch(err){
        console.log(err)
    }
}

// ...................... All unaproved Posts Get Method Admin ............................

export const allUnApprovedComments = async(req,res)=>{
    try{
        const posts = await Post.find({approved:false})
        res.status(200).send(posts)
    }catch(err){
        console.log(err)
    }
}

// ...................... Approve Posts put Method Admin ............................

export const ApproveComments = async(req,res)=>{
    try{
        const {postId}= req.body
        const posts = await Post.findByIdAndUpdate({_id:postId},{approved:true})
        res.status(200).send(posts)
    }catch(err){
        console.log(err)
    }
}

// ........................... Post Like Method ...............................

export const likePost = async(req,res)=>{
    try{
        const {id} = req.params;
        const {userId}=req.body;
        const post = await Post.findById(id)
        
        if(post.likes.includes(userId)){
            post.likes=post.likes.filter((id)=>id!==userId)
        }else{
            post.likes.push(userId)
        }
        await post.save()
        const posts = await Post.find()
        res.status(200).json(posts)
    }
    catch(err){
        console.log(err)
    }
}