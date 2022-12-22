// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  uzivatel: {}
};

// Reducer
export default function uzivatelEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_UZIVATEL_SUCCESS:
      return { ...state, uzivatel: action.payload };
    case types.UPDATE_UZIVATEL_SUCCESS:
      return { ...state, uzivatel: action.payload };
    case types.GET_UZIVATEL_SUCCESS:
      return { ...state, uzivatel: action.payload };
    case types.FINDBY_UZIVATEL_UCITEL_SUCCESS:
      return { ...state, listUcitel: action.payload };
    case types.FINDBY_UZIVATEL_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}