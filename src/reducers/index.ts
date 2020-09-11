import {combineReducers} from 'redux';
import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux';

import user from './user/reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;