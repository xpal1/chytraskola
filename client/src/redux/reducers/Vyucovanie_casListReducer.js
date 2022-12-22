// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function vyucovanie_casListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_VYUCOVANIE_CAS_SUCCESS:
      return { ...state, vyucovanie_cas: action.payload };
    case types.LIST_VYUCOVANIE_CAS_SUCCESS:
      return { ...state, listVyucovanie_cas: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}