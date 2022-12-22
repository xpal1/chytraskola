// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function dochadzkaListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_DOCHADZKA_SUCCESS:
      return { ...state, dochadzka: action.payload };
    case types.LIST_DOCHADZKA_SUCCESS:
      return { ...state, listDochadzka: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}