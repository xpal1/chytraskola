// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  skola: {}
};

// Reducer
export default function skolaEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SKOLA_SUCCESS:
      return { ...state, skola: action.payload };
    case types.UPDATE_SKOLA_SUCCESS:
      return { ...state, skola: action.payload };
    case types.GET_SKOLA_SUCCESS:
      return { ...state, skola: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}