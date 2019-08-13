"use strict"
const express=require('express');
const router=express.Router();
const Partner=require("../../models/partnerModel");
const PartnerProfile=require("../../models/partnerProfileModel");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const passport=require("passport")
var email=require("../../email/emailSetting");

const PartnerController = require("../../controllers/partner/partnerProfile")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status:"Not Implimented"})
});

// UPDATE
router.post('/update', function(req, res, next) {
    PartnerProfile.findByIdAndUpdate(req.body.id,req.body.profile,(err,data)=>{
        res.send(data)
        console.log(data)
    })
});

// SIGN UP
router.post("/signup",(req,res,next)=>{
    var partnerData={
        local:{
            "username":req.body.username,
            "email":req.body.email,
            "role":req.body.role,
            "country":req.body.country,
            "password":bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10))
        }
    }
    console.log(partnerData)

    Partner.findOne({"local.email":req.body.email},(err,partner)=>{
        if(err) throw err;
        console.log(partner)
        if(!partner){
            Partner.create(partnerData,(err,partner)=>{
                if(err) throw err;
                // Profile creationg;
                let Profile={
                    "authencationId":partner._id,
                    "username":partner.local.username,
                    "email":partner.local.email,
                    "role":partner.local.role,
                    "country":partner.local.country
                }
                PartnerProfile.create(Profile,(err,profile)=>{
                    console.log("Profile is created for"+profile.username);
                    var token=`http://localhost:3000/verify/${profile._id}`;
                    email.verify(profile.email,profile.username,token)
                    
                })
                res.send(partner)
            })
        }else{
            res.send({message:"User already exists"})
        }
    })
});

//LOGOUT
router.get("/logout",(req,res,next)=>{
    req.logout();
    res.send({message:"Logout"})
})



//LOGIN 
router.post('/login',(req, res, next) => {
    
    passport.authenticate('login', async (err, user, info) => {     try {
        if(err || !user){
        //   const error = new Error('An Error occured')
        //   return next(error);
             return res.json(info)
        }
        req.login(user, { session : false }, async (error) => {
          if( error ) return next(error)
          //We don't want to store the sensitive information such as the
          //user password in the token so we pick only the email and id
          const body = { _id : user._id, user : user.email };
          //Sign the JWT token and populate the payload with the user email and id
          const token = jwt.sign({ user : body },'top_secret');
          //Send back the token to the user
          return res.json({ token });
        });     } catch (error) {
        return next(error);
      }
    })(req, res, next);

});

//VERIFY EMAIL
router.post("/verify",(req,res,next)=>{
    PartnerProfile.findByIdAndUpdate(req.body._id,{emailVerified:true},(err,user)=>{
        if(err) throw err;
        res.send(user)
        console.log(user)
    })
})

//RESEND EMAIL
router.post("/resend",(req,res,next)=>{
    var token=`http://localhost:3000/verify/${req.body._id}`;
    PartnerProfile.findById(req.body._id,(err,profile)=>{
        if(err) throw err;
        res.send(profile)
        var token=`http://localhost:3000/verify/${profile._id}`;
        email.verify(profile.email,profile.username,token)

        console.log(profile)
    })
})

// Partner Profile
router.post("/profile",passport.authenticate('jwt', { session : false }),PartnerController.profile)

  




module.exports = router;
