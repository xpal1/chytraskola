// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  znamky: {}
};

// Reducer
export default function znamkyEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ZNAMKY_SUCCESS:
      return { ...state, znamky: action.payload };
    case types.UPDATE_ZNAMKY_SUCCESS:
      return { ...state, znamky: action.payload };
    case types.GET_ZNAMKY_SUCCESS:
      return { ...state, znamky: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}