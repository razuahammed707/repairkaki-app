import React from 'react';
import "../component.css"
import {NavLink} from "react-router-dom";
import CarIcon from "../../asset/carIcon.png";

function QuoteView(props){
return(
        <div className="listView">
         {
                props.data.map((item,index)=>{
                    return(
                        <div key={index} className="listItem">
                                <div className="listImage" >   
                                    <img src={item.pictures[0].location} alt="ListGallery"/>
                                </div>

                                <div className="carModel">
                                    <p>{item.problemType}</p>
                                </div>

                                <div className="carModel">
                                    <img src={CarIcon} alt="car Icon"/>
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
export default QuoteView