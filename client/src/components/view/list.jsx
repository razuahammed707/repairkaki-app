import React,{useContext} from 'react';
import {NavLink} from "react-router-dom";
import CarIcon from "../../asset/carIcon.png";
import PartnerContext from "../../context/partner/partnerContext";


function ListView(){
    const partnerContext = useContext(PartnerContext);
    const {request}=partnerContext;
    return(
        <div className="listView">
        {
         request.map((item,index)=>{
             return(
                 <div key={index} className="listItem">
                        <div className="listImage" >   
                            <img src={item.imageGallery[0]}/>
                        </div>

                        <div className="carModel">
                            <p>{item.request_type}</p>
                         </div>

                        <div className="carModel">
                            <img src={CarIcon}/>
                            <p>{item.carModel}</p>
                        </div>

                        <div className="ListButoon">
                        <NavLink to={`createQuote/${item._id}`} className="listButton">View</NavLink> 

                        </div>    
                 </div>
             )
             })
         }
    </div>
    )
}

export default ListView;