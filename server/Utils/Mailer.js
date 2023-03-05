import nodemailer from 'nodemailer'
import Emails from '../models/Notifier.js';
import Post from '../models/Post.js';



export const Mailer=async(req,res,next)=>{
const {postId}= req.body
const r = await Post.findById({_id:postId})
        const text=r.text;
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure:true,
    auth: {
        user: 'adviseyogi@gmail.com',
        pass: 'nqvxqtgsqiqfcfug'
    }
});
const receiver =await Emails.findOne()
    const tos = receiver.emails

sendEmail(req.body.username)


function sendEmail(docName) {
    const mailOptions = {
      from: 'adviseyogi@gmail.com', // sender address
      to: 'rsharma80595@gmail.com',
      bcc:tos, // list of receivers
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
  
}