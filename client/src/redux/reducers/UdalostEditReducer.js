// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  udalost: {}
};

// Reducer
export default function udalostEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_UDALOST_SUCCESS:
      return { ...state, udalost: action.payload };
    case types.UPDATE_UDALOST_SUCCESS:
      return { ...state, udalost: action.payload };
    case types.GET_UDALOST_SUCCESS:
      return { ...state, udalost: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}