import { LOGIN_STATUS } from "../../common/const"


export type userInfo = {
    email:string | null,
    avatarURL:string | null,
}

export type userPayload = {
    loginStatus?: boolean;
    userInfo?: userInfo;
};


export const userActionsType = {
    LOGIN_STATUS_CHANGED: 'LOGIN_STATUS_CHANGED',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGOUT_REQUEST: 'LOGOUT_REQUEST',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    LOGOUT_FAILURE: 'LOGOUT_FAILURE',
    REGISTER_FAILURE: 'REGISTER_FAILURE'
}