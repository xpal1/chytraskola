// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function skupinaListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SKUPINA_SUCCESS:
      return { ...state, skupina: action.payload };
    case types.LIST_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}