import React,{useState,useEffect} from "react"
import PartnerContext from "./partnerContext";
import axios from 'axios';

// import AuthContext from "../auth/authContex"


const PartnerState=(props)=>{

    // const authContext=useContext(AuthContext)

    const [loading,setLoading]=useState(false);
    const [quotes,setQuote]=useState([]);
    // const [quotation,setQuotation]=useState([]);
    const [AuthAlert,setAuthAlert]=useState("");
    const [profile,setProfile]=useState({});
    // const [isAuthenticated,setAuthentication]=useState(false);
    const [isRegister,setRegister]=useState(false);



    
    const initialState={
        request:quotes
    }
    const GET_QUOTE=async()=>{
        setLoading(true)
        var quoteList=await axios.post("/v1/user/get_quotes");
        setQuote(quoteList.data)
        setLoading(false)

    }

    useEffect(()=>{
        GET_QUOTE()
    },[])

  
    // Set Auth Alert
    const SET_AUTH_ALERT=(msg)=>{
        setAuthAlert(msg);
    }

    //LOAD PROFILE 
    const LOAD_PROFILE=async(value)=>{  
        console.log(value)   
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
    // const LOGOUT=async()=>{
    //     localStorage.removeItem("token");
    //     setAuthentication(false)
    //     localStorage.setItem("isAuthenticated",false)

        
    // }

    // REGISTRATION
    const REGISTER=async(user)=>{
        SET_LOADING(true)
        var registration=await axios.post("/v1/partner/signup",user);

        if(registration.data.message){
            setRegister(false);  
            SET_LOADING(false)       
   
            return false

        }else{
            setRegister(true);
            SET_LOADING(false)       
            return true
        }
        

    


    }

    //LOGIN 
    // const LOGIN=async(email,password)=>{  
        
        
    //         SET_LOADING(true);

    //         var loginResponse= await axios.post("/v1/partner/login",{
    //             email,
    //             password
    //         });

    //         if(loginResponse.data.message){
    //             setAuthAlert(loginResponse.data.message);
    //             localStorage.setItem("isAuthenticated",false);
    //         }
    //         if(loginResponse.data.token){
    //             localStorage.setItem("token",loginResponse.data.token);
    //             setAuthentication(true);
    //             setAuthAlert("");
                
    //         }    
    //         SET_LOADING(false)


    // }
    
    

    // const [state,dispatch]=useReducer(PartnerReducer,initialState)

    return(
        <PartnerContext.Provider value={{
            ...initialState,
            // isAuthenticated,
            // LOGIN,
            AuthAlert,
            SET_AUTH_ALERT,
            loading,
            SET_LOADING,
            REGISTER,
            isRegister,
            // LOGOUT,
            profile,
            LOAD_PROFILE,
            setRegister,
            GET_QUOTE
            // setAuthentication
            
        }}>
            {props.children}
        </PartnerContext.Provider>
    )


}

export default PartnerState