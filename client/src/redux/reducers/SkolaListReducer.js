// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function skolaListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SKOLA_SUCCESS:
      return { ...state, skola: action.payload };
    case types.LIST_SKOLA_SUCCESS:
      return { ...state, listSkola: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}