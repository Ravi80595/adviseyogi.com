import Emails from "../models/Notifier.js"
import Post from "../models/Post.js"
import User from "../models/User.js"
import nodemailer from 'nodemailer'



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
        const r = await Post.findById({_id:postId})
        const text=r.text;
    const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure:true,
            auth: {
                user: 'adviceyogii@gmail.com',
                pass: 'jnrseacpzvuetkyh'
            }
        });
        const receiver =await Emails.findOne()
            const tos = receiver.emails
        
        sendEmail(req.body.username,text)
        function sendEmail(docName) {
            const mailOptions = {
              from: 'adviceyogii@gmail.com', // sender address
              to: 'adviseyogi@gmail.com', // list of receivers
              bcc:tos,
              subject: 'New Comment Added', // Subject line
              text: ` ${docName} Recived a new comment. ${text}` // plain text body
            };
        
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
            console.log(err);
            } else {
            console.log('Email sent: ' + info.response);
            // next()
            }
        });
        }
    }catch(err){
        console.log(err)
    }
}


// ...................... Posts text Update method ............................

export const EditComments = async(req,res)=>{
    try{
        const {id}=req.params
        const {newText}= req.body
        const posts = await Post.findByIdAndUpdate({_id:id},{text:newText})
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


// ........................... Adding Email for Notification ...............................

export const Allmails = async(req,res)=>{
    try{
        const {gmail}=req.body
        const r = new Emails()
        await r.save()
        const email= await Emails.findOne()
        
        if(email.emails.includes(gmail)){
            res.send({"msg":"Notification already enabled for this mail"})
        }else{
            email.emails.push(gmail)
        }
        await email.save()
        res.status(200).json({"msg":"Notification enabled for this mail"})
    }
    catch(err){
        console.log(err)
    }
}