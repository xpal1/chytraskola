// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  odbory: {}
};

// Reducer
export default function odboryEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ODBORY_SUCCESS:
      return { ...state, odbory: action.payload };
    case types.UPDATE_ODBORY_SUCCESS:
      return { ...state, odbory: action.payload };
    case types.GET_ODBORY_SUCCESS:
      return { ...state, odbory: action.payload };
    case types.FINDBY_ODBORY_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBY_ODBORY_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}