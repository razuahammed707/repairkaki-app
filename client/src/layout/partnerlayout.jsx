import React,{useContext,useState,useEffect} from 'react';
import Menu from "../components/menu/menu"
import Header from "../components/header/header"
import Request from "../components/quotationCard"
import CreateQuotation from "../components/createQuotation";
import {Route,Redirect,NavLink } from "react-router-dom";
import Profile from "../pages/profile/profile"
import PartnerContext from "../context/partner/partnerContext";
import Appointment from "../components/partner/appointment"
import Quotation from "../components/partner/quotation"
import Metrics from "../components/partner/metrics"
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';
import AuthContext from "../context/auth/authContex"




function PartnerLayout(props){
      
      const partnerContext = useContext(PartnerContext);
      const authContext = useContext(AuthContext);
      
    
  
      const {isAuthenticated}=authContext

      useEffect(()=>{
        partnerContext.LOAD_PROFILE()

      },[])

      if(isAuthenticated){
      }

      
      const {profile}=partnerContext;
      const [email,setEmail]=useState("")


      var resendEmail=async()=>{
        const resend= await axios.post("/v1/partner/resend",{_id:profile._id});
        setEmail("Email sent")

      }
      //remove setEmail
      setTimeout(()=>{
        setEmail("")

      },2000)

        console.log(isAuthenticated)
        if(!isAuthenticated){
          return(<Redirect to="/login"/>)
        }else{
          return(
            <div className="grid-2-menu">
            <Menu/>
            <div className="main_header">
            <Header/>
      
      
            <div className="contentBody">
            {(profile.emailVerified?null:(<Alert variant="danger">Please check inbox to verify email. if not found <NavLink onClick={resendEmail}>Resend</NavLink> {email}</Alert>))}

            {/* {(profile.emailVerified?null:(<Alert variant="danger">Please update your profile <NavLink to="/partner/profile">go to profile</NavLink></Alert>))} */}

              <Route path="/partner/request" component={Request}/>
              <Route path="/partner/profile" component={Profile}/>
              <Route path="/partner/submitted_quotation" component={Quotation}/>
              <Route path="/partner/appointment" component={Appointment}/>
              <Route path="/partner/metrics" component={Metrics}/>

              <Route path="/partner/createQuote/:id" component={CreateQuotation}/>
            </div>
      
            </div>
          </div>
           )
        }
   
      

  

     
}  

export default PartnerLayout
