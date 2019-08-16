import React from "react";
import {NavLink } from "react-router-dom";
import ReapairKakiLogo from "../../components/menu/repairkaki_logo.png"

function Login(){
    return(
 
            <div className="mainHomeNav">
            <div className="homeNav heading_Section">
            <NavLink to="/" >  <img src={ReapairKakiLogo} alt="RepairKaki Logo"/></NavLink>

           
                <div className="homeMenu">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/login">Log In</NavLink>
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>    
            </div>
            </div>
    )
}

export default Login;
