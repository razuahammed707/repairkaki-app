import React from "react";
import MainNav from "./mainNav";
import axios from 'axios';


function VerifyEmail({match}){

    const verifyEmail=async()=>{
        const verifiedResponse= await axios.post("/v1/partner/verify",{_id:match.params.id});
        return
    }
    verifyEmail();
    return(<div>
        <MainNav/>
        <div className="verifyMessage">
        <h1>Thank you</h1>
        <p>Your email has been verified . </p>

        </div>
    </div>)
}

export default VerifyEmail;