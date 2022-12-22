// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function rodiciaListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_RODICIA_SUCCESS:
      return { ...state, rodicia: action.payload };
    case types.LIST_RODICIA_SUCCESS:
      return { ...state, listRodicia: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}