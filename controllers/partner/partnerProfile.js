
const PartnerProfile=require("../../models/partnerProfileModel");
const Partner=require("../../models/partnerModel")

exports.profile=(req,res,next)=>{

        console.log(req.user._id)

        PartnerProfile.findOne({authencationId:req.user._id},(err,profile)=>{
            if(err) throw er
            res.send(profile)
        })
    
   


}
