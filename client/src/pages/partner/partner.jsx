import React from 'react';
import Header from "../components/header/header"
import Menu from "../components/menu/menu";
import Quotaion from "../components/quotationCard"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Partner extends React.Component{

constructor(props){
    super(props);
    this.state={
        profile:{
            "profileUrl":"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1262&q=80",
            "username":"Md Razu Ahammed Moll",
            "notification":[{
                title:"You have got a quote"
            }]
        }
    }
}

  render(){
    return (
        <Router>
            <div>
                <div className="grid-2-menu">
                    <div className="menuSection">
                    <Menu/>
                    </div>
                    
                    <div>
                    <Header data={this.state.profile}/>
                    <div>


                    </div>
                        <Quotaion/>
                    </div>
                </div>
            </div>  
          
        </Router>

    );
  }
  
}

export default Partner;
