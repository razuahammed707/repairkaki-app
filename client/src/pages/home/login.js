import React,{useState,useContext,useEffect} from "react";
import MainNav from "./mainNav"
import Alert from 'react-bootstrap/Alert';
import PartnerContext from "../../context/partner/partnerContext"
import {Redirect } from "react-router-dom";
import Spinner from "../../components/spinners"


function Login(){

    const partnerContext=useContext(PartnerContext)
    const {AuthAlert,isAuthenticated,loading}=partnerContext;

    if(partnerContext.AuthAlert=!""){
        setTimeout(() => {
            partnerContext.SET_AUTH_ALERT("")
        }, 2000);
    }


    const login=(e)=>{
        e.preventDefault();
        const password= e.target.password.value;
        const email=e.target.email.value;
        partnerContext.LOGIN(email,password);    
        console.log(partnerContext)   
        partnerContext.LOAD_PROFILE();
        partnerContext.SET_AUTH_ALERT("")   

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
                    <input type="submit" value="Log In"/>
                    {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}
                    

                </form>
            </div>          

        </div>
        

    )
}

export default Login;
