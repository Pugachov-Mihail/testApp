export interface UserAction {
    type: string;
    payload?: any;
}

export enum UserActionsType {
    FETCH_USER = "FETCH_USER",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = " FETCH_USER_ERROR",
}

interface FETCH_USER {
    type: UserActionsType.FETCH_USER;
}

interface FETCH_USER_SUCCESS {
    type: UserActionsType.FETCH_USER_SUCCESS;
    payload: any[];
}

interface FETCH_USER_ERROR {
    type: UserActionsType.FETCH_USER_ERROR;
    payload: string;
}