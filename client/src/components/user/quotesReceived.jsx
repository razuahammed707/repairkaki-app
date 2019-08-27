import React,{useContext,useEffect,useState} from "react";
import Axios from "axios"
import PartnerContext from "../../context/partner/partnerContext";
import QuoteView from "./quotesView";





function Quotes(){

    const partnerContext =useContext(PartnerContext);

    const {getListQuote,quoteList}=partnerContext; 
    console.log(quoteList)


    useEffect(()=>{
        getListQuote()
    },[])
 
   

    return(
       <div>
           <QuoteView data={quoteList}/>
       </div>
    )
}

export default Quotes;