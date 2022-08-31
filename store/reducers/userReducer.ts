import {UserState} from "../../types/UserType";
import {UserAction, UserActionsType} from "../../types/UserActionsType";
import {stat} from "fs";

const initialUser: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state=initialUser,
                            action: UserAction): UserState => {
    switch (action.type){
        case UserActionsType.FETCH_USER:
            return {loading: true, error: null, users: []}
        case UserActionsType.FETCH_USER_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionsType.FETCH_USER_ERROR:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}