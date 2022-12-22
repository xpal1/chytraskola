// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  skupina: {}
};

// Reducer
export default function skupinaEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SKUPINA_SUCCESS:
      return { ...state, skupina: action.payload };
    case types.UPDATE_SKUPINA_SUCCESS:
      return { ...state, skupina: action.payload };
    case types.GET_SKUPINA_SUCCESS:
      return { ...state, skupina: action.payload };
    case types.FINDBY_SKUPINA_ZADANIA_SUCCESS:
      return { ...state, listZadania: action.payload };
    case types.FINDBY_SKUPINA_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.FINDBY_SKUPINA_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
    case types.LIST_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
    case types.LIST_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.LIST_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
    case types.FINDBY_SKUPINA_ROZVRH_SUCCESS:
      return { ...state, listRozvrh: action.payload };
    case types.FINDBY_SKUPINA_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, listSpravy_skupiny: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}