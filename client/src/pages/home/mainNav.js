import React from "react";
import {NavLink } from "react-router-dom";
import ReapairKakiLogo from "../../components/menu/repairkaki_logo.png"

function Login(){
    return(
 
            <div className="mainHomeNav">
            <div className="homeNav heading_Section">
            <NavLink to="/" >  <img src={ReapairKakiLogo}/></NavLink>

           
                <div className="homeMenu">
                    <NavLink to="/">HOME</NavLink>
                    <NavLink to="/login">LOGIN</NavLink>
                    <NavLink to="/signup">SIGN UP</NavLink>
                </div>    
            </div>
            </div>
    )
}

export default Login;
