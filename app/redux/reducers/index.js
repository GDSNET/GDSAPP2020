// Imports: Dependencies
import { combineReducers } from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import userReducer from  './userReducer'
import messageReducer from  './messageReducer'


// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  userReducer: userReducer,
  messageReducer: messageReducer,
});

// Exports
export default rootReducer;