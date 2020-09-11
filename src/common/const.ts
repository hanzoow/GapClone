import { userPayload } from "../reducers/user/type"


export const LOGIN_STATUS: any = {
    LOGGED_IN: 1,
    LOG_OUT: 2,
}

export const defaultUserState: userPayload = {
    loginStatus: false,
    userInfo: {}
}