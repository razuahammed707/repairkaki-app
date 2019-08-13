import React from "react";
import "./component.css"
import {Spinner} from "react-bootstrap";

function NoData(){

    return(
        <div className="noData">
             <Spinner animation="grow"/>
            <h1>No Data Available</h1>
            <p>There is no data to show you right now</p>
        </div>
        
    )

        
}

export default NoData;