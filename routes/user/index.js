var express = require('express');
var router = express.Router();
const Quote = require("../../models/quotes");

const S3 = require("../../config/s3")



router.post("/get_quotes",(req,res,next)=>{
    Quote.find({},(err,quote)=>{
        if(err) throw err;
        res.send(quote)
    })
});


router.post("/user_quote",(req,res,next)=>{
    console.log(req.body)

    Quote.find({userId:req.body.id},(err,quote)=>{
        if(err) throw err;
        res.send(quote);
        console.log(quote)
    })
});

router.post("/find_quote",(req,res,next)=>{

    Quote.findById(req.body.id,(err,quote)=>{
        if(err) throw err;
        res.send(quote);
        // console.log(quote)
    })
});


router.post('/multiphoto',S3.quote.array('pictures', 5),function(req, res, next) {

    res.send(req.files)
    // res.end(req.body)
    // console.log(req.body.pictures.Files)


});

router.post('/create_quote', S3.quote.array('pictures', 10),function(req, res, next) {

    // res.send(req.files[0].location)
    const userData={
        userId:req.body.userId,
        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
        problemType:req.body.problemType,
        description:req.body.description,
        pictures:req.files,
        carModel:req.body.carModel
    }

    Quote.create(userData,(err,quote)=>{
        if(err) throw err;
        res.send(quote)

    })
});


module.exports = router;
