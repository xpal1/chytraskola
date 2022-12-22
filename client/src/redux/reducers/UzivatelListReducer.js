// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function uzivatelListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_UZIVATEL_SUCCESS:
      return { ...state, uzivatel: action.payload };
    case types.LIST_UZIVATEL_SUCCESS:
      return { ...state, listUzivatel: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}