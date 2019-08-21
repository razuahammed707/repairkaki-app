var express = require('express');
var router = express.Router();
const Quote = require("../../models/quotes");

const S3 = require("../../config/s3")


// router.post("/",(req,res,next)=>{


    
// })

router.post("/get_quotes",(req,res,next)=>{
    Quote.find({},(err,quote)=>{
        if(err) throw err;
        res.send(quote)
    })
});



router.post('/create_quote', S3.quote.array('pictures', 1),function(req, res, next) {

    // res.send(req.files[0].location)
    const userData={
        userId:req.body.userId,
        address:req.body.address,
        mobile:req.body.mobile,
        email:req.body.email,
        problemType:req.body.problemType,
        description:req.body.description,
        pictures:[req.files[0].location],
        carModel:req.body.carModel
    }

    Quote.create(userData,(err,quote)=>{
        if(err) throw err;
        res.send(quote)

    })
});


module.exports = router;
