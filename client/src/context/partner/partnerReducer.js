import {GET_USER,SET_LOADING,LOGIN_FAILED,LOGIN_SUCCESS} from './types';

export default(state,action)=>{

    switch(action.type){
 
        case SET_LOADING:
            return{
                loading:"munna"
               }
        
        case LOGIN_SUCCESS:
            return{
                ...state,
                isAuthentication:true,
                isLoading:false
            }
        

        case LOGIN_FAILED:
                console.log(state)
            return{
                ...state,
                isAuthentication:false,
                AuthAlert:action.payload.message

            }

     
        default:
            return state
    }
}