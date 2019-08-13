import React,{useState,useContext} from "react";
import MainNav from "./mainNav"
import Alert from 'react-bootstrap/Alert';
import PartnerContext from "../../context/partner/partnerContext"
// import PartnerContext from "../../context/partner/partnerContext"
import AuthContext from "../../context/auth/authContex"

import {Redirect } from "react-router-dom";
import Spinner from "../../components/spinners"




function Login(){

    const partnerContext=useContext(PartnerContext);
    const authContext = useContext(AuthContext);

    const {AuthAlert,isAuthenticated,loading}=authContext;
    console.log(AuthAlert)




    

    const login=async(e)=>{
        e.preventDefault();
        const password= e.target.password.value;
        const email=e.target.email.value;
        await authContext.LOGIN(email,password);    
        await partnerContext.LOAD_PROFILE(true);
        // AuthContext.SET_AUTH_ALERT("")   
    }
    if(authContext.AuthAlert=!""){
        setTimeout(() => {
            authContext.setAuthAlert("")
        }, 2000);
    }

    if(isAuthenticated){
        return(
            <Redirect from="/login" to="/partner/request"/>
        )
    }
    return(
        <div className="HomePage">
            <MainNav/>
            <div className="login">
            
                <form onSubmit={login}>
                    <h3>Login In to <span className="coloredText">ReapirKaki</span></h3>
                    {(AuthAlert===""||AuthAlert===true?null:(<Alert variant="danger">{AuthAlert}</Alert>))}
                    <input type="text" placeholder="Email" id="email"/>
                    <input type="password" placeholder="passowrd" id="password" />
                    <div className="grid-2">
                    <input type="submit" value="Log In"/>
                    </div>

                    {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}
                    

                </form>
            </div>          

        </div>
        

    )
}

export default Login;
