// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function ucitelListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_UCITEL_SUCCESS:
      return { ...state, ucitel: action.payload };
    case types.LIST_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}