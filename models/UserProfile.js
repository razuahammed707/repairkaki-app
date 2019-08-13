"use strict"
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const UserProfileSchema=Schema({
    authencationId:{
        type:Schema.Types.ObjectId,
        ref:String
    },
    profileURL:{
        type:String,
        default:""
    },
    username:{
        type:String,
        default:" "
    },
    address:{
        type:String,
        default:" "
    },
    mobile:{
        type:String,
        default:" "
    },
    phone:{
        type:String,
        default:" "
    },
    email:{
        type:String,
        default:" "
    },
    description:{
        type:String,
        default:" "
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    modifiedAt:{
        type:Date,
        default:Date.now()
    }
});



module.exports=mongoose.model("partnerProfile",UserProfileSchema)