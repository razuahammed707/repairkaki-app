"use strict"
const express=require('express');
const router=express.Router();
const Partner=require("../../models/partnerModel");
const PartnerProfile=require("../../models/partnerProfileModel");
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const passport=require("passport")
const email=require("../../email/emailSetting");
const PartnerController = require("../../controllers/partner/partnerProfile");
const S3 = require("../../config/s3")






/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({status:"Not Implimented"})
});

// UPDATE
router.post('/update', function(req, res, next) {
    console.log(req.body.profile)
    PartnerProfile.findByIdAndUpdate(req.body.id,req.body.profile,(err,data)=>{
        res.send(data)
        console.log(data)
    })
});

// UPDATE
router.post('/upload', S3.upload.array('image', 1),function(req, res, next) {
    console.log()
    PartnerProfile.findByIdAndUpdate(req.body._id,{profileURL:req.files[0].location},(err,data)=>{
        res.send(data)
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
                    var token=`https://${req.hostname}/verify/${profile._id}`;
                    const user={
                        name:profile.username,
                        email:profile.email,
                        token
                    }
                    email.verify(user,"verify")
                    
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

// FORGOT PASSWORD;
router.post("/reset-password",(req,res,next)=>{
    const password=bcrypt.hashSync(req.body.password,bcrypt.genSaltSync(10));
    console.log(req.body)

    Partner.findByIdAndUpdate(req.body._id,{"local.password":password},(err,user)=>{
        if(err) throw err;
        res.send(user)
    })
})

router.post("/forgot",(req,res,next)=>{
    
    console.log(req.body)
    Partner.findOne({"local.email":req.body.email},(err,partner)=>{
        console.log(partner)
        if(partner){
            res.send(partner);
            var token=`http://${req.hostname}/reset-verification/${partner._id}`;

            const user={
                name:partner.local.username,
                email:partner.local.email,
                token
    
            }
            email.verify(user,"reset_password")

        }else{
            res.send({message:"User Not Found"})
        }

    })

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
});

//RESEND EMAIL
router.post("/resend",(req,res,next)=>{
    
        PartnerProfile.findById(req.body._id,(err,profile)=>{
        if(err) throw err;
        res.send(profile)
        if(null){
            res.send({message:"user not found"})
        }
        var token=`http://${req.hostname}/verify/${profile._id}`;
        const user={
            name:profile.username,
            email:profile.email,
            token

        }
        email.verify(user,"verify")

        console.log(profile)
    })
})

// Partner Profile
router.post("/profile",passport.authenticate('jwt', { session : false }),PartnerController.profile)

  




module.exports = router;
