import React,{useContext,useState} from 'react';
import repairkakiLogo from "./repairkaki_logo.png"
import { BrowserRouter as Redirect, NavLink} from "react-router-dom";
import "./menu.css";
import MenuIcon from "./menu.svg";
import CancelIcon from './cancel.svg'



import PartnerContext from "../../context/partner/partnerContext"

function Menu(props){

    const partnerContext=useContext(PartnerContext);
    const [menu,setMenu]=useState("hideMenu");
    const [icon,setIcon]=useState(MenuIcon);

    const logout=()=>{
        partnerContext.LOGOUT();
        partnerContext.setAuthentication(false)
    }

    const showMobileMenu=(e)=>{
        if(menu==="showMenu"){
            setMenu("hideMenu")
            setIcon(MenuIcon)
        }
        if(menu==="hideMenu"){
            setMenu("showMenu")
            setIcon(CancelIcon)
        }
    }
    
    return(
        <div className="menu">
            <NavLink to="/"><img src={repairkakiLogo}/></NavLink>
                <div className="mobileMenu" onClick={showMobileMenu}>
                    <img src={icon}/>
                </div>
                <div className={menu} id="desktopMenu">
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
