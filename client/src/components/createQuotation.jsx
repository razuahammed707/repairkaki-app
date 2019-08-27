import React,{useState,useEffect} from 'react';
import {Form,Carousel,Button,ButtonToolbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import axios from "axios"

function CreateQuotation({match}){

    const [quote,setQuote]=useState({});
    const [pic,setPic]=useState([]);

    const loadQuote=async ()=>{
        var output=await axios.post('/v1/user/find_quote',{"id":match.params.id})
        setQuote(output.data);
        setPic(output.data.pictures)
        
    }


    useEffect(()=>{
        loadQuote();
    },[])
 
    return(
      <div className="quotationBox">
        <Carousel>
                {pic.map((item,index)=>{
                    return(
                        <Carousel.Item key={index}>
                        <img
                        className="d-block w-100"
                        src={item.location}
                        alt={item.originalname}
                        />
                    </Carousel.Item>
                    )
                })
                    
            }
          
        </Carousel>
        <p>
            {quote.description}
        </p>

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
