const mongoose=require('mongoose');
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
const UserRoutes=require('./routes/UserRoute');
const LetterRoutes=require('./routes/LetterRoute');
const nodemailer=require('nodemailer');


const app=express();
app.use(bodyparser.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dearfuture2k24@gmail.com',
    pass: process.env.pass,
  },
});
async function sendMail(){
const mailOptions = {
                  from: 'dearfuture2k24@gmail.com',
                  to: 'dearfuture2k24@gmail.com',
                  subject: 'Sample Letter',
                  text: `Dear ,This is a reminder for your task (DearFuture)`
                };
    
                transporter.sendMail(mailOptions, function (error, info) {
                  if (error) {
                    console.log(`Error sending email for task :`, error);
                  } else {
                    console.log(`Email sent for task`, info.response);
                  }
                });
            }
    mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log("MongoDB connected...");
}).catch(e=>{
    console.log("Can't connect MongoDB...",e);
})
// sendMail();




app.use('/',UserRoutes);
app.use('/',LetterRoutes);


const PORT=5000;
app.listen(PORT,()=>{
    console.log(`Port running on...${PORT}`);
})

module.exports=app;