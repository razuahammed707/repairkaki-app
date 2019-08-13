
const PartnerProfile=require("../../models/partnerProfileModel");
const Partner=require("../../models/partnerModel")

exports.profile=(req,res,next)=>{

    console.log(req.user._id)


        Partner.findById(req.user._id,(err,user)=>{
            if(err) throw err;
            PartnerProfile.findOne({email:user.local.email},(err,profile)=>{
                res.send(profile)
            })
        
        });
    

    


}
