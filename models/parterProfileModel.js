"use strict"
const mongoose=require("mongoose");
const Schema=mongoose.Schema;



const partnerSchema=Schema({
    fullname:String,
    email:String,
    password:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    modifiedAt:Date,
    
})

module.exports=mongoose.model("Partner",partnerSchema)