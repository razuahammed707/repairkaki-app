import React from 'react';
import repairkakiLogo from "./repairkaki_logo.png"
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import "./menu.css"

function Menu(){
    return(
        <div className="menu">
            <NavLink to="/"><img src={repairkakiLogo}/></NavLink>
           
                <div>
                <ul>
                    <li>
                    <NavLink to="/partner/request" activeClassName="Menuactive">Request</NavLink>
                    </li>
                    <li>
                    <NavLink to="/submitted_quotation" activeClassName="Menuactive" >Submitted Quotations</NavLink>
                    </li>
                    <li>
                    <NavLink to="/appointment" activeClassName="Menuactive">Appointment</NavLink>
                    </li>
                    <li>
                    <NavLink to="/metrics" activeClassName="Menuactive" >Metrics</NavLink>
                    </li>
                </ul>  
            </div>
        </div>
    )
}


export default Menu;
