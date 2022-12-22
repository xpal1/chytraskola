// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  student: {}
};

// Reducer
export default function studentEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.UPDATE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.GET_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.LIST_ZADANIA_SUCCESS:
      return { ...state, listZadania: action.payload };
    case types.LIST_UZIVATEL_SUCCESS:
      return { ...state, listUzivatel: action.payload };
    case types.FINDBY_STUDENT_RODICIA_SUCCESS:
      return { ...state, listRodicia: action.payload };
    case types.LIST_RODICIA_SUCCESS:
      return { ...state, listRodicia: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}