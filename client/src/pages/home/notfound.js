import React from "react";
import MainNav from "./mainNav";
import axios from 'axios';


function VerifyEmail({match}){

    const verifyEmail=async()=>{
        const verifiedResponse= await axios.post("/v1/partner/verify",{_id:match.params.id});
        return(verifiedResponse)
    }
    verifyEmail();
    return(<div>
        <MainNav/>
        <div className="verifyMessage">
        <h1>404</h1>
        <p>Sorry, This page or file could not be found </p>
        <a href="/">Explore More</a>

        </div>
    </div>)
}

export default VerifyEmail;