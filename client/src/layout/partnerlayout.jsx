import React,{Fragment,useContext} from 'react';
import Menu from "../components/menu/menu"
import Header from "../components/header/header"
import Request from "../components/quotationCard"
import CreateQuotation from "../components/createQuotation";
import {Route,Redirect } from "react-router-dom";


import PartnerContext from "../context/partner/partnerContext";



function PartnerLayout(props){
  const partnerContext = useContext(PartnerContext);
  
  const {isAuthenticated}=partnerContext;

      if(isAuthenticated){
        return(
          <div className="grid-2-menu">
          <Menu/>
          <div className="main_header">
          <Header/>
    
    
          <div className="contentBody">
            <Route path="/partner/request" component={Request}/>
            <Route path="/partner/createQuote/:id" component={CreateQuotation}/>
          </div>
    
          </div>
        </div>
         )
      }else{
        return(
          <Redirect  to="/login"/>

        )
      }

  

     
}  

export default PartnerLayout
