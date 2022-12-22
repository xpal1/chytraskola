// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  vyucovanie_cas: {}
};

// Reducer
export default function vyucovanie_casEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_VYUCOVANIE_CAS_SUCCESS:
      return { ...state, vyucovanie_cas: action.payload };
    case types.UPDATE_VYUCOVANIE_CAS_SUCCESS:
      return { ...state, vyucovanie_cas: action.payload };
    case types.GET_VYUCOVANIE_CAS_SUCCESS:
      return { ...state, vyucovanie_cas: action.payload };
    case types.FINDBY_VYUCOVANIE_CAS_ROZVRH_SUCCESS:
      return { ...state, listRozvrh: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}