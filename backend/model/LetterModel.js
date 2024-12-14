const mongoose=require('mongoose');

const LetterSchema=new mongoose.Schema(
    {
        userid:{
            type:String,
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        letterid:{
            type:String,
            required:true,
        },
        body:{
            type:String,
            required:true,
        },
        time:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            required:true,
        },
        imageurl:{
            type:String,
            default: "",
        },
        fileurl:{
            type:String,
            default: "",
        }

    }
)

const LetterModel=mongoose.model('Letter',LetterSchema);
module.exports=LetterModel;