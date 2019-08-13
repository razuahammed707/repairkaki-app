import React,{useContext}from 'react';
import './header.css';
import ArrowIcon from "./arrow.png";
import {NavLink} from "react-router-dom";

import { Dropdown } from 'react-bootstrap';

import PartnerContext from "../../context/partner/partnerContext";


function Header(){

    const partnerContext =useContext(PartnerContext);
    const {username,profileURL}=partnerContext.profile; 

    return(
        <div className="header">
    
            <div className="righ-side">
                <div className="profileSection">
                <Dropdown  alignRight
                    title="Dropdown right"
                    id="dropdown-menu-align-right" className="arrowIcon">
                    <Dropdown.Toggle >
                    <img src={ArrowIcon}/>

                    </Dropdown.Toggle>
                    
                    <Dropdown.Menu>
                       <NavLink to="/">Home</NavLink>
                       <Dropdown.Divider />
                       <NavLink to="/partner/profile">Upadate Profile</NavLink>

                    </Dropdown.Menu>
                    
                </Dropdown>
                <div className="profileImage">
                <img src={profileURL}/>

                </div>

                </div>
                <div className="clientName">
                    <p className="welcomeText">,Welcome</p>
                    <p>{username}</p>
                </div>
                {/* <div className="notificationIcon">
                    <img src={NotifcationIcon}/>
                </div> */}
            </div>
        </div>
    )
}


export default Header;
