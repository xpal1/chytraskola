// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function znamkyListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ZNAMKY_SUCCESS:
      return { ...state, znamky: action.payload };
    case types.LIST_ZNAMKY_SUCCESS:
      return { ...state, listZnamky: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}