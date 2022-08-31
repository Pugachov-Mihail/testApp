import {UserAction, UserActionsType} from "../../types/UserActionsType";
import {Dispatch} from "redux";
import axios from "axios";


export const fetchUser = () => {
    return async(dispatch: Dispatch<UserAction>)=>{
        try {
            dispatch({type: UserActionsType.FETCH_USER})
            const response = await axios.get(
                "http://79.143.31.216/login"
            )
            dispatch({type: UserActionsType.FETCH_USER_SUCCESS,
                payload: response.data})
        } catch (e){
            dispatch({type: UserActionsType.FETCH_USER_ERROR,
                payload: e})
        }
    }
}
//
export const registerUser = () =>{
    return async(dispatch: Dispatch)=>{
        try {
            dispatch({type: UserActionsType.FETCH_USER})
            const response = await axios.get(
                "http://79.143.31.216/register?username=test&password=1234"
            )
            console.log(response)
            dispatch({type: UserActionsType.FETCH_USER_SUCCESS,
                payload: response.data})
        } catch (e){
            dispatch({type: UserActionsType.FETCH_USER_ERROR,
                payload: e})
        }
    }
}