import React,{useContext} from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import PartnerLayout from "./layout/partnerlayout";
import Home from "./pages/home/index";
import Login from "./pages/home/login";
import SignUp from "./pages/home/signup"
import PartnerState from "./context/partner/partnerState";




function App(){


  return ( 
      <PartnerState>
        <Router>  
            <Switch>  
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/signup" component={SignUp}/>
              <Route path="/partner" component={PartnerLayout} /> 
            </Switch>  
          </Router>  
          
      </PartnerState>
      
    );
}

export default App;
