import React,{useContext} from "react";
import MainNav from "./mainNav"
import { NavLink} from "react-router-dom";
import {Form} from 'react-bootstrap';
import Spinner from "../../components/spinners"
import PartnerContext from "../../context/partner/partnerContext"
import Alert from 'react-bootstrap/Alert';




function SignUp(){
    const partnerContext=useContext(PartnerContext)
    const {AuthAlert,loading,REGISTER,isRegister}=partnerContext;
    

    if(partnerContext.AuthAlert=!""){
        setTimeout(() => {
            partnerContext.SET_AUTH_ALERT("")
        }, 2000);
    }



    var register =(e)=>{
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
        REGISTER(userInfo)
    }

    return(
        <div>
            <MainNav/>
            <div className="login">

            {(isRegister?(<Alert variant="success">You have been successfully registered. Check inbox to verify your email</Alert>):null)}

                <form onSubmit={register}>

                <h6>Complete to create your <span className="coloredText">ReapirKaki</span> account</h6>
                {(AuthAlert===""||AuthAlert===true?null:(<Alert variant="danger">{AuthAlert}</Alert>))}

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
                    <option value="singapore">Singapore</option>
                    <option value="malaysia">Malaysia</option>
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

export default SignUp;
