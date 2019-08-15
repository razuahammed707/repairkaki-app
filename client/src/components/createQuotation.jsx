import React from 'react';
import {Form,Carousel,Button,ButtonToolbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";

function CreateQuotation({match}){
    return(
      <div className="quotationBox">
        <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg"
                    alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg"
                    alt="First slide"
                    />

                </Carousel.Item>
        </Carousel>
        <div>
            <label>Lorem ipsum dolor sit, amet consectetur</label>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam at debitis voluptatem quos reprehenderit quod laboriosam amet iste incidunt nisi eaque, ea quia libero officia rerum aliquam exercitationem repellat. Similique.</p>
        </div>
        <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea"  placeholder="Please Enter your advice and comments here"  rows="3" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Enter your bid here" />
            </Form.Group>
            
            <ButtonToolbar>

                <NavLink to="/partner/request" className="quotationSubmit">
                    <Button variant="success" size="sm">
                        SUBMIT NOW
                    </Button>    
                 </NavLink>

                <NavLink to="/partner/request">
                <Button variant="danger" size="sm">
                    REJECT
                </Button>    
                </NavLink> 
            </ButtonToolbar>
            
        </Form>    
      </div>
    )
  }



  export default CreateQuotation;
