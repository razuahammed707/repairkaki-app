import MainNav from "./mainNav"
import axios from "axios"
import React,{useState,useContext} from "react";
import Alert from 'react-bootstrap/Alert';
import AuthContext from "../../context/auth/authContex";
import Spinner from "../../components/spinners";
import {Redirect} from "react-router-dom"


function ResetPassword(props){
    const authContext=useContext(AuthContext)

    const {loading,isAuthenticated}=authContext;

  

    const [ValidationAuth,setValidationAuth]=useState(false);
    setTimeout(()=>{
        setValidationAuth(false)
    },5000)


    // useEffect(()=>{

    // },[])
    var reset=async(e)=>{
        e.preventDefault();
        authContext.SET_LOADING(true)
        var password1=e.target.password1.value;
        var password2=e.target.password2.value;

        if(password1==password2){
            const user={
                _id:props.match.params.id,
                password:e.target.password1.value
            }

            var resposne=await axios.post("/v1/partner/reset-password",user);   
            authContext.SET_LOADING(false)
            setValidationAuth("Password has been updated");
            await authContext.LOGIN("razuahammed@icloud.com",password1)
            
            }else{
                    setValidationAuth("Sorry, your passwords must match each other");
                    authContext.SET_LOADING(false);
            }


    }

    if(isAuthenticated){
        return(
            <Redirect from="/reset-verification" to="/partner/request"/>
        )
    }
    return(
    <div>
        <MainNav/>

        <div className="login"> 
            <form onSubmit={reset}>
                <h3>Reset Password</h3>
                {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}

                {(!ValidationAuth?null:(<Alert variant="danger">{ValidationAuth}</Alert>))}

                <input type="password" placeholder="New Password" name="password1"/>
                <input type="password" placeholder="Confrim Password" name="password2"/>

                <input type="submit" value="Reset"/>
            </form>
        </div>    

    </div>)
}

export default ResetPassword;