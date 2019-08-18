import React from "react";
import {NavLink } from "react-router-dom";
import "./index.css"
import {Card} from "react-bootstrap"
import MainNav from "./mainNav"

import step1 from "./step_1.png"
import step2 from "./step_2.png"
import step3 from "./step_3.png"


// import Instragram from './instragram.png'
// import Facebook from "./facebook.png";
// import Twitter from "./twitter.png"


function Index(){
    return(
        <div className="HomePage">
            <MainNav/>

            <div className="heading_Section">
                <div className="grid-2">
                    <div className="HeadingTitle">
                      
                        <p className="homeTitle">
                        RepairKaki is the one platform to get multiple quotations for vehicle servicing and repairs. We work with trusted workshops to ensure you get the best quality at the best price.
                        <br/>
                        <NavLink to="/signup" className="viewButton">GET STARTED</NavLink>

                        </p>
                    </div>
                    <div className="videoFrame">
                         <iframe src="https://www.youtube.com/embed/mSo9kE2PQ2M" ></iframe>
                    </div>  
                </div>
                </div>
                <div className="how_to_work"><h1>How Repairkaki works</h1></div>

                <div className="grid-3 heading_Section">
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={step1} />
                <Card.Body>
                    <Card.Title>Test1</Card.Title>
                    <Card.Text>
                    Start a chat with Repairkaki on your chosen platform - WhatsApp, Telegram or Facebook Messenger. Follow the instructions and tell us as much as possible about the repairs/service needed for your vehicle.
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={step2} />
                <Card.Body>
                    <Card.Title>STEP 2</Card.Title>
                    <Card.Text>
                    The chatbot will gather all the information needed and send it out to our trusted partners. Our partners will reply with quotations on costs, lead time and work to be done. 
                    </Card.Text>
                </Card.Body>
                </Card>

                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={step3} />
                <Card.Body>
                    <Card.Title>STEP 3</Card.Title>
                    <Card.Text>
                    Set an appointment (also via the chatbot), bring your vehicle down and get it repaired. You make payment directly to the workshop                     </Card.Text>
                </Card.Body>
                </Card>
               
            </div>


            

        </div>
        
    )
}

export default Index;