import React,{useContext} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import PartnerLayout from "./layout/partnerlayout";
import Home from "./pages/home/index";
import VerifyEmail from "./pages/home/verifyEmail"
import Login from "./pages/home/login";
import SignUp from "./pages/home/signup"
import PartnerState from "./context/partner/partnerState";
import AuthState from "./context/auth/authState";
import NotFound from "./pages/home/notfound";
import Forgot from "./pages/home/forgot";

function App(){
  return ( 
    <AuthState>
      <PartnerState>
        <Router >  
            <Switch>  
              <Route exact path="/" component={Home}/>
              <Route path="/verify/:id" component={VerifyEmail}/>
              <Route path="/login" component={Login}/>
              <Route path="/forgot" component={Forgot}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/partner" component={PartnerLayout} /> 
              <Route path="/*" component={NotFound} /> 
            </Switch>  
          </Router>  
      </PartnerState>
      </AuthState>
      
    );
}

export default App;
