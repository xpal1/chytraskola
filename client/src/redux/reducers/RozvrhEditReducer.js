// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  rozvrh: {}
};

// Reducer
export default function rozvrhEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ROZVRH_SUCCESS:
      return { ...state, rozvrh: action.payload };
    case types.UPDATE_ROZVRH_SUCCESS:
      return { ...state, rozvrh: action.payload };
    case types.GET_ROZVRH_SUCCESS:
      return { ...state, rozvrh: action.payload };
    case types.LIST_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
    case types.LIST_PREDMETY_SUCCESS:
      return { ...state, listPredmety: action.payload };
    case types.LIST_VYUCOVANIE_CAS_SUCCESS:
      return { ...state, listVyucovanie_cas: action.payload };
    case types.LIST_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
    case types.LIST_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}