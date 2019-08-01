const Partner=require("../../models/partnerModel");

exports.registration=((req,res,next)=>{
    Partner.create((req.body),(err,data)=>{
        res.send(data)
    })
})