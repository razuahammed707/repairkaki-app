import React,{useReducer,useState} from "react"
import PartnerContext from "./partnerContext";
import PartnerReducer from "./partnerReducer";
import axios from 'axios';



const PartnerState=(props)=>{

    const [loading,setLoading]=useState(false);
    const [request,setRequest]=useState([]);
    const [quotation,setQuotation]=useState([]);
    const [AuthAlert,setAuthAlert]=useState("");
    const [profile,setProfile]=useState({});
    const [isAuthenticated,setAuthentication]=useState(false);


    const initialState={
        request:[
            {
                _id:1233,
                request_type:"Air Conditioner",
                imageGallery:[
                    "https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg",
                    "https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg"
                ],
                title:"Conduct at an replied removal an among",
                carModel:"Audi A8",
                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam at debitis voluptatem quos reprehenderit quod laboriosam amet iste incidunt nisi eaque, ea quia libero officia rerum aliquam exercitationem repellat. Similique."
    
            },
            {
                _id:5544,
                request_type:"Maintanence",

                imageGallery:[
                    "https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg",
                    "https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg"
                ],
                title:"Conduct at an replied removal an among",
                carModel:"Audi A8",
                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam at debitis voluptatem quos reprehenderit quod laboriosam amet iste incidunt nisi eaque, ea quia libero officia rerum aliquam exercitationem repellat. Similique."
    
            }

        ],
        user:{
            username:"Md. Razu Ahammed Molla",
            profileURL:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1262&q=80"
        },

    }
    // Set Auth Alert
    const SET_AUTH_ALERT=(msg)=>{
        setAuthAlert(msg);
    }
    //LOAD PROFILE 
    const LOAD_PROFILE=async(token)=>{     
    }
    
 
    //Authenticate 
    const LOGIN=async(email,password)=>{     
            var loginResponse=await axios.post("/v1/partner/login",{
                email,
                password
            });

            if(loginResponse.data.message){
                setAuthAlert(loginResponse.data.message);
                setAuthentication(false);

            }
            if(loginResponse.data.token){
                setAuthentication(true);
                localStorage.setItem("token",loginResponse.data.token)
            }    

    }
    

    const [state,dispatch]=useReducer(PartnerReducer,initialState)

    return(
        <PartnerContext.Provider value={{
            ...state,
            isAuthenticated,
            LOGIN,
            AuthAlert,
            SET_AUTH_ALERT
            
        }}>
            {props.children}
        </PartnerContext.Provider>
    )


}

export default PartnerState