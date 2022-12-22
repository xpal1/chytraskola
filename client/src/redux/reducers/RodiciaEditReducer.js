// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  rodicia: {}
};

// Reducer
export default function rodiciaEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_RODICIA_SUCCESS:
      return { ...state, rodicia: action.payload };
    case types.UPDATE_RODICIA_SUCCESS:
      return { ...state, rodicia: action.payload };
    case types.GET_RODICIA_SUCCESS:
      return { ...state, rodicia: action.payload };
    case types.LIST_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBY_RODICIA_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}