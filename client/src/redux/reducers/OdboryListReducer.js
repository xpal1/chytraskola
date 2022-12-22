// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function odboryListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ODBORY_SUCCESS:
      return { ...state, odbory: action.payload };
    case types.LIST_ODBORY_SUCCESS:
      return { ...state, listOdbory: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}