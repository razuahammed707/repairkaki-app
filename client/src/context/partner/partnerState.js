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
    const [isRegister,setRegister]=useState(false);
    
    const initialState={
        request:[
            {
                _id:1233,
                request_type:"Repair",
                imageGallery:[
                    "https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg",
                    "https://cars.usnews.com/images/article/201003/122786/car-repairs-1_640x420.jpg"
                ],
                title:"Conduct at an replied removal an among",
                carModel:"Audi A8",
                description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam at debitis voluptatem quos reprehenderit quod laboriosam amet iste incidunt nisi eaque, ea quia libero officia rerum aliquam exercitationem repellat. Similique."
    
            }]
    }
    // Set Auth Alert
    const SET_AUTH_ALERT=(msg)=>{
        setAuthAlert(msg);
    }

    //LOAD PROFILE 
    const LOAD_PROFILE=async()=>{     
        const profile=await axios({ method: 'POST', url: '/v1/partner/profile', headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } })
        return(
            setProfile(profile.data)
        )
    }

    
    // SET LOADING
    const SET_LOADING=(value)=>{
        return(setLoading(value))
    }

    // LOGOUT
    const LOGOUT=async()=>{
        localStorage.removeItem("token");
        setAuthentication(false)
        localStorage.setItem("isAuthenticated",false)

        
    }

    // REGISTRATION
    const REGISTER=async(user)=>{
        SET_LOADING(true)
        var registration=await axios.post("/v1/partner/signup",user);
        if(registration.data.message){
            setAuthAlert(registration.data.message);
            setRegister(false);
        }else{
            setRegister(true);
        }
        SET_LOADING(false)
        

    


    }

    //LOGIN 
    const LOGIN=async(email,password)=>{  
        
        
            SET_LOADING(true);

            var loginResponse= await axios.post("/v1/partner/login",{
                email,
                password
            });

            if(loginResponse.data.message){
                setAuthAlert(loginResponse.data.message);
                localStorage.setItem("isAuthenticated",false);
            }
            if(loginResponse.data.token){
                localStorage.setItem("token",loginResponse.data.token);
                setAuthentication(true);
                setAuthAlert("");
            }    
            SET_LOADING(false)


    }
    
    

    const [state,dispatch]=useReducer(PartnerReducer,initialState)

    return(
        <PartnerContext.Provider value={{
            ...state,
            isAuthenticated,
            LOGIN,
            AuthAlert,
            SET_AUTH_ALERT,
            loading,
            SET_LOADING,
            REGISTER,
            isRegister,
            LOGOUT,
            profile,
            LOAD_PROFILE,
            setAuthentication
            
        }}>
            {props.children}
        </PartnerContext.Provider>
    )


}

export default PartnerState