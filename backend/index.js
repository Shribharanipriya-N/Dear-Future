const mongoose=require('mongoose');
const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
require('dotenv').config();
const UserRoutes=require('./routes/UserRoute');


const app=express();
app.use(bodyparser.json());
app.use(cors());

mongoose.connect(process.env.Mongo_url).then(()=>{
    console.log("MongoDB connected...");
}).catch(e=>{
    console.log("Can't connect MongoDB...",e);
})

app.use('/',UserRoutes);


const PORT=5000;
app.listen(process.env.PORT||PORT,()=>{
    console.log(`Port running on...${PORT}`);
})

module.exports=app;