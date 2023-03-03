import nodemailer from 'nodemailer'
import Emails from '../models/Notifier.js';



export const Mailer=async(req,res,next)=>{
console.log(res)
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
      to: tos, // list of receivers
      subject: 'New Comment Added', // Subject line
      text: ` ${docName} Added a new wonderfull Comment.` // plain text body
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