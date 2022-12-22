// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function udalostListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_UDALOST_SUCCESS:
      return { ...state, udalost: action.payload };
    case types.LIST_UDALOST_SUCCESS:
      return { ...state, listUdalost: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}