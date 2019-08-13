import React,{useContext,useEffect} from 'react';
import Menu from "../components/menu/menu"
import Header from "../components/header/header"
import Request from "../components/quotationCard"
import CreateQuotation from "../components/createQuotation";
import {Route,Redirect } from "react-router-dom";
import Profile from "../pages/profile/profile"
import PartnerContext from "../context/partner/partnerContext";
import Appointment from "../components/partner/appointment"
import Quotation from "../components/partner/quotation"
import Metrics from "../components/partner/metrics"






function PartnerLayout(props){
  
      const partnerContext = useContext(PartnerContext);
      const {isAuthenticated}=partnerContext
      
        if(isAuthenticated==false){
          return(<Redirect to="/login"/>)
        }else{
          return(
            <div className="grid-2-menu">
            <Menu/>
            <div className="main_header">
            <Header/>
      
      
            <div className="contentBody">
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
