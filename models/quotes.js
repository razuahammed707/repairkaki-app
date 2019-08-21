"use strict"
const mongoose = require('mongoose');
const Schema=mongoose.Schema;



const QuoteSchema=Schema({
    userId:{
        type:Schema.Types.ObjectId,
        ref:"Partner"
    },
    address:String,
    mobile:String,
    email:String,
    problemType:String,
    description:String,
    pictures:Array,
    carModel:String,
    createdAt:{
        type:Date,
        default:Date.now()
    },
    modifiedAt:{
        type:Date,
        default:Date.now()
    }
});


module.exports=mongoose.model("Quotes",QuoteSchema)