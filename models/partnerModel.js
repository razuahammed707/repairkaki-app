"use strict"
const mongoose = require('mongoose');
const Schema=mongoose.Schema;
const bcrypt   = require('bcryptjs');


// var salt = bcrypt.genSaltSync(saltRounds);

const PartnerSchema=Schema({
    local:{
        email:{
            type:String,
        },
        password:{
            type:String,
        },
        username:{
            type:String,
        },
        role:{
            type:String
        },
        country:{
            type:String
        }
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



PartnerSchema.methods.comparePassword=function(password){ 
    console.log(password,this.local.password)
    return bcrypt.compareSync(password,this.local.password)
}



module.exports=mongoose.model("Partner",PartnerSchema)