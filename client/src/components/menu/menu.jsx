import React,{useContext} from 'react';
import repairkakiLogo from "./repairkaki_logo.png"
import { BrowserRouter as Redirect, NavLink} from "react-router-dom";
import "./menu.css"

import PartnerContext from "../../context/partner/partnerContext"

function Menu(props){

    const partnerContext=useContext(PartnerContext)

    const logout=()=>{
        partnerContext.setAuthentication(false)
        partnerContext.LOGOUT();
      
        
    }
    return(
        <div className="menu">
            <NavLink to="/"><img src={repairkakiLogo}/></NavLink>
           
                <div>
                <ul>
                    <li>
                    <NavLink to="/partner/request" activeClassName="Menuactive">Request</NavLink>
                    </li>
                    <li>
                    <NavLink to="/partner/submitted_quotation" activeClassName="Menuactive" >Submitted Quotations</NavLink>
                    </li>
                    <li>
                    <NavLink to="/partner/appointment" activeClassName="Menuactive">Appointment</NavLink>
                    </li>

                    <li>
                    <NavLink to="/partner/metrics" activeClassName="Menuactive" >Metrics</NavLink>
                    </li>

                    <li>
                    <NavLink to="/login" className="logoutBtn" activeClassName="Menuactive" onClick={logout}>Logout</NavLink>
                    </li>

                </ul>  
            </div>
        </div>
    )
}


export default Menu;
