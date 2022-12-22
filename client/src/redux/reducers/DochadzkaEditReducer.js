// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  dochadzka: {}
};

// Reducer
export default function dochadzkaEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_DOCHADZKA_SUCCESS:
      return { ...state, dochadzka: action.payload };
    case types.UPDATE_DOCHADZKA_SUCCESS:
      return { ...state, dochadzka: action.payload };
    case types.GET_DOCHADZKA_SUCCESS:
      return { ...state, dochadzka: action.payload };
    case types.FINDBY_DOCHAZKA_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.LIST_PREDMETY_SUCCESS:
      return { ...state, listPredmety: action.payload };
    case types.LIST_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
    case types.LIST_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.LIST_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}