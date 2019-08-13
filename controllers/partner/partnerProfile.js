
const PartnerProfile=require("../../models/partnerProfileModel");

exports.profile=(req,res,next)=>{

        console.log(req.hostname)

        PartnerProfile.findOne({authencationId:req.user._id},(err,profile)=>{
            if(err) throw er
            res.send(profile)
        })
    
   


}
