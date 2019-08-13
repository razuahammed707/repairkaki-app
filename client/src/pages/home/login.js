import React,{useState,useContext} from "react";
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
    

    const login=async(e)=>{
        e.preventDefault();
        const password= e.target.password.value;
        const email=e.target.email.value;
        await partnerContext.LOGIN(email,password);    
        await partnerContext.LOAD_PROFILE();
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
                    <div className="grid-2">
                    <input type="submit" value="Log In"/>
                    <input type="submit" value="Forgot Password"/>
                    </div>

                    {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}
                    

                </form>
            </div>          

        </div>
        

    )
}

export default Login;
