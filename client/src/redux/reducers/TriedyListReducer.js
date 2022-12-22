// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function triedyListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_TRIEDY_SUCCESS:
      return { ...state, triedy: action.payload };
    case types.LIST_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}