// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  ucitel: {}
};

// Reducer
export default function ucitelEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_UCITEL_SUCCESS:
      return { ...state, ucitel: action.payload };
    case types.UPDATE_UCITEL_SUCCESS:
      return { ...state, ucitel: action.payload };
    case types.GET_UCITEL_SUCCESS:
      return { ...state, ucitel: action.payload };
    case types.LIST_PREDMETY_SUCCESS:
      return { ...state, listPredmety: action.payload };
    case types.LIST_UZIVATEL_SUCCESS:
      return { ...state, listUzivatel: action.payload };
    case types.LIST_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
    case types.FINDBY_UCITEL_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
    case types.FINDBY_UCITEL_PREDMETY_SUCCESS:
      return { ...state, listPredmety: action.payload };
    case types.FINDBY_UCITEL_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
    case types.FINDBY_UCITEL_ROZVRH_SUCCESS:
      return { ...state, listRozvrh: action.payload };
    case types.FINDBY_UCITEL_DOCHADZKA_SUCCESS:
      return { ...state, listDochadzka: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}