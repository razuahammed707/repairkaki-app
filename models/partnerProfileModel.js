"use strict"
const mongoose = require('mongoose');
const Schema=mongoose.Schema;

const partnerProfileSchema=Schema({
    authencationId:{
        type:Schema.Types.ObjectId,
        ref:"Partner"
    },
    profileURL:{
        type:String,
        default:"https://repairkaki.s3-ap-southeast-1.amazonaws.com/public/blank-profile-picture-973460__340.png"
    },
    username:{
        type:String,
        default:""
    },
    workshopName:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    country:{
        type:String,
        default:""
    },
    role:String,
    mobile:{
        type:String,
        default:""
    },
    allowEmailSMS:{
        type:String,
        default:"off"
    },
    phone:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    description:{
        type:String,
        default:""
    },
    emailVerified:{
        type:Boolean,
        default:false
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



module.exports=mongoose.model("partnerProfile",partnerProfileSchema)