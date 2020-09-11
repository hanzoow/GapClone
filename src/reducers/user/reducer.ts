import { defaultUserState } from "../../common/const";
import { userAction } from "./actions";
import { userActionsType, userPayload } from "./type";

export default (state: userPayload = defaultUserState,action: userAction) => {
    console.log(state);
    switch (action.type) {
      case userActionsType.LOGIN_STATUS_CHANGED:
        return {
          ...state,
          ...action.payload,
        };
      case userActionsType.LOGOUT_SUCCESS:
        return {user:{}};
      case userActionsType.LOGIN_SUCCESS:
        return{
          ...state,
          ...action.payload
        }
      case userActionsType.LOGIN_FAILURE:
        return ;
      default:
        return state;
    }
}