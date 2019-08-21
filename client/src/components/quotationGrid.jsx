import React,{useContext,useState,useEffect} from 'react';
import {NavLink} from "react-router-dom";
import CarIcon from "../asset/carIcon.png";
import PartnerContext from "../context/partner/partnerContext";
import GridView from "./view/grid"
import ListView from "./view/list"
import NoData from "./nodata";
import Spinner from "../components/spinners"


function Quations(){
    const partnerContext = useContext(PartnerContext);
    const {request,loading}=partnerContext;
    const [view,SetView]=useState((<GridView/>));
    
    
 
    var changeView=(e)=>{
        const view = e.target.value;
        if(view==="list"){
            SetView(ListView)
        }
        if(view==="grid"){
            SetView(GridView)

        }
    }

    // if(loading){
    //     return(<Spinner/>)
    // }
    if(request.length>0){
        return(
            <div>
                <div className="ViewType">
                    <p>View:</p>
                    <div>
                <select name="razu" onChange={changeView} >
                    <option value="grid">Grid</option>
                    <option value="list">List</option>
    
                </select>
                    </div>
                </div>
                {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}
                {view}
            </div>
        )    
    }
    
    return(
        <NoData/>
    )

    

   

}


export default Quations;
