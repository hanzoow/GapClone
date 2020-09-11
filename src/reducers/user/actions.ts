import firebase, { firestore } from 'react-native-firebase';
import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { LOGIN_STATUS } from '../../common/const';
import { SuccessAction, userLoginWithEmail, userRegisterWithEmail } from './interface';
import { userActionsType, userInfo, userPayload } from './type';


export const loginRequest = (user: userLoginWithEmail) => {
    return (dispatch: ThunkDispatch<void, {}, userAction>) => {
        return firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(rs => {
            if (rs.user) {
                const newUser = rs.user;
                // firestore().collection
            }
        })
    }
}

export const registerRequest = (user: userRegisterWithEmail) => {
    return (dispatch: ThunkDispatch<void, {}, userAction>) => {
        return firebase.auth().createUserWithEmailAndPassword(user.email,user.password).then(rs => {
            firestore
            const userPayload:userPayload = {
                loginStatus:true,
                userInfo:{
                    email:rs.user.email,
                    avatarURL:rs.user.photoURL,
                }
            }

            dispatch(loginSuccess(userPayload))
        }).catch(error => {
            if (error.code = 'auth/email-already-in-use'){
                dispatch(registerFail(error.code));
            }
            if (error.code === 'auth/invalid-email') {
                dispatch(registerFail(error.code))
            }
        })
    }
}

export function changeLoginStatusChanged(loginStatus: boolean) {
    return { type: userActionsType.LOGIN_STATUS_CHANGED, payload: { loginStatus: loginStatus } }
}

export const changeLoginStatus = (isLogged: boolean) => {
    return (dispatch: ThunkDispatch<void, {}, Action<any>>) => {
        if (isLogged) {
            dispatch(changeLoginStatusChanged(LOGIN_STATUS.LOGGED_IN));
        } else {
            dispatch(changeLoginStatusChanged(LOGIN_STATUS.LOG_OUT));
        }
    }
}

export const LogOutRequest = () => {
    return (dispatch: ThunkDispatch<void, {}, Action<any>>) => {
        dispatch({
            type: userActionsType.LOGOUT_SUCCESS,
            payload: {}
        })
    }
}

export const loginSuccess = (user: userPayload) => {
    return (dispatch: ThunkDispatch<void, {}, Action<any>>) => {
        dispatch({
            type: userActionsType.LOGIN_SUCCESS,
            payload: { user: user }
        })
    }
}

export const loginFail = (error: string) => {
    return (dispatch: ThunkDispatch<void, {}, Action<any>>) => {
        dispatch({
            type: userActionsType.LOGIN_FAILURE,
            payload: { error: error }
        })
    }
}

export const registerFail = (error:string) => {
    return(dispatch: ThunkDispatch<void,{},Action<any>>) => {
        dispatch({
            type: userActionsType.REGISTER_FAILURE,
            payload: {error:error}
        })
    }
}

export type userAction = SuccessAction<userPayload> | SuccessAction<userInfo> 
| SuccessAction<userLoginWithEmail> | SuccessAction<userRegisterWithEmail>;

