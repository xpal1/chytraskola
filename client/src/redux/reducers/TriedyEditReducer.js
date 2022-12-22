// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  triedy: {}
};

// Reducer
export default function triedyEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_TRIEDY_SUCCESS:
      return { ...state, triedy: action.payload };
    case types.UPDATE_TRIEDY_SUCCESS:
      return { ...state, triedy: action.payload };
    case types.GET_TRIEDY_SUCCESS:
      return { ...state, triedy: action.payload };
    case types.FINDBY_TRIEDY_ZADANIA_SUCCESS:
      return { ...state, listZadania: action.payload };
    case types.FINDBY_TRIEDY_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
    case types.FINDBY_TRIEDY_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.LIST_ODBORY_SUCCESS:
      return { ...state, listOdbory: action.payload };
    case types.LIST_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
    case types.LIST_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.LIST_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
    case types.FINDBY_TRIEDY_PREDMETY_SUCCESS:
      return { ...state, listPredmety: action.payload };
    case types.FINDBY_TRIEDY_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
    case types.FINDBY_TRIEDY_ROZVRH_SUCCESS:
      return { ...state, listRozvrh: action.payload };
    case types.FINDBY_TRIEDY_DOCHADZKA_SUCCESS:
      return { ...state, listDochadzka: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}