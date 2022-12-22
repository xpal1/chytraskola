// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function rozvrhListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ROZVRH_SUCCESS:
      return { ...state, rozvrh: action.payload };
    case types.LIST_ROZVRH_SUCCESS:
      return { ...state, listRozvrh: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}