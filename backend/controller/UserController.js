const User=require('../model/UserModel')
const {v4}=require('uuid');
const bcrypt=require('bcryptjs');


//New User
const register = async (req, res) => {
    const { email, name, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
             res.status(401).json({ message: "User Already Found.." });
        } else {
            const newuser = new User({ id: v4(), email, name, password });
            await newuser.save();
            res.status(200).json({ newuser,message: "Register success",status:"Success" });
        }
    } catch (e) {
        res.status(400).send({ message: "Try again later.." });
    }
}


//Login User
const login=async(req,res)=>{
    const {email,password}=req.body;
    console.log("login",req.body);
    try{
        const user=await User.findOne({email});
        if(!user){
          return res.status(401).json({message:"User not found"});
        }
        const isvalidPassword= await bcrypt.compare(password,user.password);
        if(!isvalidPassword){
           return res.status(401).json({message:"Invalid password"});
        }
        return res.json({ message: "Login success",status:"Success" });
    }
    catch(e){
        res.status(404).json({error:e});
        console.log(e);
    }
}

module.exports={register,login};