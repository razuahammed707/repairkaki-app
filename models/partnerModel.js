"use strict"
const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const bcrypt=require("bcrypt-nodejs")



const partnerSchema=Schema({
    local:{
        fullname:String,
        email:String,
        password:String,
        createdAt:{
            type:Date,
            default:Date.now()
        },
        modifiedAt:Date,
    }
    
    
})
// Generating a has

partnerSchema.methods.generateHash=function(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(8), null)
};

// checking if password is valid 
partnerSchema.methods.validPassword=function(password){
    return bcrypt.compare(password,this.local.password)
}

module.exports=mongoose.model("Partner",partnerSchema)