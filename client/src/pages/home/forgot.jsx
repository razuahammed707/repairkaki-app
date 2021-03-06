import MainNav from "./mainNav"
import axios from "axios"
import React,{useState} from "react";
import Alert from 'react-bootstrap/Alert';


function Forgot(){
    const [forgotAlert,setAlert]=useState(false)

    var forgot=async(e)=>{
        e.preventDefault();

        var resposne=await axios.post("/v1/partner/forgot",{email:e.target.email.value});
        console.log(resposne)
        if(resposne.data.message){
            setAlert("User not found. Sign up now.")
        }
        else{
            setAlert("We’ve dropped you an email. Click the link to reset your password")

        }

    }

    return(
    <div>
        <MainNav/>

        <div className="login">
            
            <form onSubmit={forgot}>
                <h3>Forgot Password</h3>
                {(forgotAlert?(<Alert variant="danger">{forgotAlert}</Alert>):null)}
                <input type="email" placeholder="Email" name="email"/>
                <input type="submit" value="Forgot"/>
            </form>
        </div>    

    </div>)
}

export default Forgot