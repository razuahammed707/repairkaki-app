import React,{useState} from "react"
import authContext from "./authContex";
import axios from 'axios';

const isLogin =localStorage.getItem("isAuthenticated");
const roleIs=localStorage.getItem("role");

const AuthState=(props)=>{

    const [AuthAlert,setAuthAlert]=useState("");
    const [isAuthenticated,setAuthentication]=useState(isLogin);
    const [loading,setLoading]=useState(false);
    const [role,setRole]=useState(roleIs)

    // LOGOUT
    const LOGOUT=async()=>{
        setAuthentication(false);
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("token");
        localStorage.removeItem("role");



    }
    const SET_AUTH_ALERT=(msg)=>{
        setAuthAlert(msg);
    }

    const SET_LOADING=(value)=>{
        return(setLoading(value))
    }

    //LOGIN 
    const LOGIN=async(email,password)=>{  
        
        
            SET_LOADING(true);

            var loginResponse= await axios.post("/v1/partner/login",{
                email,
                password
            });

            if(loginResponse.data.message){
                setAuthAlert(loginResponse.data.message);

            }
            if(loginResponse.data.token){
                localStorage.setItem("isAuthenticated",true);
                localStorage.setItem("token",loginResponse.data.token);
                localStorage.setItem("role",loginResponse.data.role);

                setAuthentication(true);
                setAuthAlert("");
                setRole(loginResponse.data.role)
                
            }    
            SET_LOADING(false)


    }
    
    


    return(
        <authContext.Provider value={
            {   
                AuthAlert,
                isAuthenticated,
                loading,
                LOGIN,setAuthAlert,
                LOGOUT,
                SET_LOADING,
                role

            }
        }>
            {props.children}
        </authContext.Provider>
    )


}

export default AuthState