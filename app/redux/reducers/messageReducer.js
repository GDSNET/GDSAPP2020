import * as types from '../redux_constants'; 
// Initial State
const initialState = {
  message: '',
};

// Reducers (Modifies The State And Returns A New State)
const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case types.MESSAGE: {
      return {
        // State
        ...state,
        message: action.message,
      }
    }
    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default messageReducer;