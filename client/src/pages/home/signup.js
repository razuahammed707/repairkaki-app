import React,{useContext,useState} from "react";
import MainNav from "./mainNav"
import { NavLink,Redirect} from "react-router-dom";
import {Form} from 'react-bootstrap';
import Spinner from "../../components/spinners"
import PartnerContext from "../../context/partner/partnerContext";
import AuthContext from "../../context/auth/authContex"

import Alert from 'react-bootstrap/Alert';




function SignUp(props){
    const partnerContext=useContext(PartnerContext)
    const authContext = useContext(AuthContext)
    const {loading,REGISTER,isRegister,setRegister,AuthAlert,SET_AUTH_ALERT}=partnerContext;
    

        setTimeout(() => {
            setRegister(false)
            
        }, 2000);



    var register =async(e)=>{
        e.preventDefault();
        var username=e.target.username.value;
        var email=e.target.email.value;
        var password=e.target.password.value;
        var role = e.target.role.value;
        var country=e.target.country.value;
        console.log(e.target)
        const userInfo={
            username,
            email,
            country,
            password,
            role
        }
        var response= await REGISTER(userInfo);
        console.log(response);

        if(response===false){
            SET_AUTH_ALERT(`This email already has an account,<a href=""> Log In now</a>`)
        }

        if(response===true){    
            await authContext.LOGIN(email,password);
            props.history.push('/login')
        }

    }

    if(authContext.isAuthenticated==="true"){
        partnerContext.SET_AUTH_ALERT("")
        return(<Redirect to="/partner/request/"/>)
    }else{
        return(
            <div>
                <MainNav/>
                <div className="login">
    
                {(isRegister?(<Alert variant="success">You have been successfully registered. Check inbox to verify your email</Alert>):null)}
    
                    <form onSubmit={register}>
    
                    <h6>Complete to create your <span className="coloredText">RepairKaki</span> account</h6>
                    {(AuthAlert===""||AuthAlert===true?null:(<Alert variant="danger">This email already has an account,<a href=""> Log In now</a></Alert>))}
    
                    <input type="text" placeholder="Name" name="username" id="name" required/>
                    <input type="email" placeholder="Work email address"  name="email" id="email" required/>
                    <Form.Group controlId="role" name="role">
                        <Form.Control as="select" required>
                        <option selected disabled>Select Role</option>
                        <option value="partner">Partner</option>
                        <option value="user">User</option>
                        </Form.Control>
                    </Form.Group>
    
                    <Form.Group controlId="country" name="country">
                        <Form.Control as="select" required>
                        <option selected disabled>Select Country</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Malaysia">Malaysia</option>
                        </Form.Control>
                    </Form.Group>
                    <input type="password" placeholder="Password" name="password"  id="password" required/>
                
                    <input type="submit" value="Sign Me Up"/>
                    <p className="haveAccount">Already have an account? <NavLink to="/login">Log In</NavLink></p>
                    {(loading?(<div className="loadingSpinner"><Spinner/></div>):null)}
    
                    </form>
                </div>
            </div>
    
        )

    }
    
}

export default SignUp;
