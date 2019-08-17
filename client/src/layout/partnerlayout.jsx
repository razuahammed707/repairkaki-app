import React,{useContext,useState,useEffect} from 'react';
import Menu from "../components/menu/menu"
import Header from "../components/header/header"
import RequestGrid from "../components/quotationGrid"


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
      const {profile}=partnerContext;
      const [email,setEmail]=useState("")
      const [profileUpdate,setProfileUpdate]=useState(true);

      const checkProfile=()=>{
        var count=0;
        const {
          workshopName,
          phone,
          mobile,
          allowEmailSMS,
          address
        }=profile;

        if(address===""){
          count++;
        }
     
        if(workshopName===""){
          count++;
        }
        if(mobile===""){
          count++;
        }
        if(phone===""){
          count++;
        }
        if(allowEmailSMS==="OFF"){
          count++;
        }

        return count;
      }
      
      
      useEffect(()=>{
        
        if(checkProfile()===0){
          setProfileUpdate(false)
        }

      })
     

      const {isAuthenticated}=authContext

  
      useEffect(()=>{
        partnerContext.LOAD_PROFILE()

      },[])
      

      if(isAuthenticated){
      }
      

      
   


      var resendEmail=async()=>{
        const resend= await axios.post("/v1/partner/resend",{_id:profile._id});
        setEmail("Email sent")
        return(resend)

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
            <Header css={{name:"desktopView"}}/>
      
      
            <div className="contentBody">
            {(!profileUpdate?null:(<Alert variant="danger">Please <NavLink to="/partner/profile">update</NavLink> your profile</Alert>))}

            {(profile.emailVerified?null:(<Alert variant="danger">Please check your inbox/spam folder to verify your email address. <NavLink to="/partner/request" onClick={resendEmail}>Resend</NavLink> {email}</Alert>))}


              <Route path="/partner/request" component={RequestGrid}/>
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
