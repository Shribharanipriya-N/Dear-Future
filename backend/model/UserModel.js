const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true,
    }
});
UserSchema.pre('save',async  function(next){
     if(!this.isModified('password')){
        return next();
     }
     const salt=await bcrypt.genSalt(10);
     this.password= bcrypt.hash(this.password,salt);
})

const UserModel=mongoose.model('User',UserSchema);
module.exports=UserModel;