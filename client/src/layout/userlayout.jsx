import React,{useContext,useState,useEffect} from 'react';
import Header from "../components/header/header"
import {Route,Redirect,NavLink } from "react-router-dom";
import AuthContext from "../context/auth/authContex"
import PartnerContext from "../context/partner/partnerContext";
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

import createQuote from "../components/user/create_quote"

import Menu from "../components/menu/menu"


function UserLayout(){

    const partnerContext = useContext(PartnerContext);
    const authContext = useContext(AuthContext);
    const {profile}=partnerContext;
    const {isAuthenticated,role}=authContext
    const [email,setEmail]=useState("")

    useEffect(()=>{
        partnerContext.LOAD_PROFILE()

      },[])
  

    

    var MenuItem=[{
        name:"Request a Quote",
        url:"/user/create_quote"
    },
    {
        name:"Quotes Received",
        url:"/user/quote_received"
    },
    {
        name:"Appoinment",
        url:"/user/appoinment"
    }
    ];

    var resendEmail=async()=>{
        const resend= await axios.post("/v1/partner/resend",{_id:profile._id});
        setEmail("Email sent")
        return(resend)
      }
    if(role=="partner"){
        return(<Redirect to="/partner/request"/>)
    }  

    if(role=="user"){
        return(
            <div>
                <div className="grid-2-menu">
                    <Menu menuData={MenuItem}/>
                    <div className="main_header">
                    <Header css={{name:"desktopView"}}/>
              
              
                    <div className="contentBody">
        
                        
                     {/* {(!profileUpdate?null:(<Alert variant="danger">Please <NavLink to="/partner/profile">update</NavLink> your profile</Alert>))}  */}
                    {(profile.emailVerified?null:(<Alert variant="danger">Please check your inbox/spam folder to verify your email address. <NavLink to="/partner/request" onClick={resendEmail}>Resend</NavLink> {email}</Alert>))}
                    
                    <Route path="/user/create_quote" component={createQuote}/>

        
{/*         
                      <Route path="/partner/request" component={RequestGrid}/>
                      <Route path="/partner/profile" component={Profile}/>
                      <Route path="/partner/submitted_quotation" component={Quotation}/>
                      <Route path="/partner/appointment" component={Appointment}/>
                      <Route path="/partner/metrics" component={Metrics}/>
        
                      <Route path="/partner/createQuote/:id" component={CreateQuotation}/> */} 
                    </div>
              
                    </div>
                  </div>
        
            </div>)
    }
    
}

export default UserLayout