import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import CarIcon from "../../asset/carIcon.png";
import PartnerContext from "../../context/partner/partnerContext";


function GridView(){
    const partnerContext = useContext(PartnerContext);
    const {request}=partnerContext;

    console.log(request)
    return(
        <div className="grid-4"> 
             {
                 request.map((item,index)=>{
                     return(
                         <div key={index}>
                         <div className="Quotation">
                         <div className="cardImages" >   
                             <img src={item.pictures[0].location} alt="item-gallery"/>
                             <div className="Quotation_type">
                                 <p>{item.problemType}</p>
                             </div>
                         </div>
                         <div className="cardContent">
                            <p>{item.description}</p>
                         </div>
                         <hr/>
                         <div className="carModel">
                             <img src={CarIcon} alt="car Icon"/>
                             <p>{item.carModel}</p>
                         </div>
                         <NavLink to={`createQuote/${item._id}`} className="viewButton">View</NavLink>   </div>
                         </div>
                     )
                 })
             }
             </div>
    )
}

export default GridView;