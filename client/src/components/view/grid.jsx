import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import CarIcon from "../../asset/carIcon.png";
import PartnerContext from "../../context/partner/partnerContext";


function GridView(){
    const partnerContext = useContext(PartnerContext);
    const {request}=partnerContext;
    return(
        <div className="grid-4"> 
             {
                 request.map((item,index)=>{
                     return(
                         <div key={index}>
                         <div className="Quotation">
                         <div className="cardImages" >   
                             <img src={item.imageGallery[0]}/>
                             <div className="Quotation_type">
                                 <p>{item.request_type}</p>
                             </div>
                         </div>
                         <div className="cardContent">
                             <h3>{item.title}</h3>
                             <p>{item.description}</p>
                         </div>
                         <hr/>
                         <div className="carModel">
                             <img src={CarIcon}/>
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