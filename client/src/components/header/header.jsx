import React,{useContext}from 'react';
import './header.css';
import NotifcationIcon from "./notification.png";
// import { Dropdown } from 'react-bootstrap';

import PartnerContext from "../../context/partner/partnerContext";


function Header(){

    const partnerContext =useContext(PartnerContext);
    const {username,profileURL}=partnerContext.user;    
    return(
        <div className="header">
    
            <div className="righ-side">
                <div className="profileImage">
                    <img src={profileURL}/>
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
