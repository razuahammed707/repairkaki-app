import React from "react";
import MainNav from "./mainNav"
import { NavLink} from "react-router-dom";
import {Form} from 'react-bootstrap';

function SignUp(){

    var register =(e)=>{
        e.preventDefault();
        var username=e.target.username.value;
        var email=e.target.email.value;
        var password=e.target.password.value;
        var role = e.target.role.value;
        console.log(e.target)
        const userInfo={
            username,
            email,
            password,
            role
        }
        console.log(userInfo)
    }

    return(
        <div>
            <MainNav/>
            <div className="login">
                <form onSubmit={register}>

                <h6>Complete to create your <span className="coloredText">ReapirKaki</span> account</h6>
                <input type="text" placeholder="Name" name="username" id="name" required/>
                <input type="email" placeholder="Work email address"  name="email" id="email" required/>
                <Form.Group controlId="role" name="role" required>
                    <Form.Control as="select">
                    <option selected disabled>Select Role</option>
                    <option value="partner">Partner</option>
                    <option value="user">User</option>
                    </Form.Control>
                </Form.Group>
                <input type="password" placeholder="Password" name="password"  id="password" required/>
            
                <input type="submit" value="Sign Me Up"/>
                <p className="haveAccount">Already have an account? <NavLink to="/login">Log In</NavLink></p>

                </form>
            </div>
        </div>

    )
}

export default SignUp;
