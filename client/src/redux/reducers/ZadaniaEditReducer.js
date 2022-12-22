// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  zadania: {}
};

// Reducer
export default function zadaniaEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ZADANIA_SUCCESS:
      return { ...state, zadania: action.payload };
    case types.UPDATE_ZADANIA_SUCCESS:
      return { ...state, zadania: action.payload };
    case types.GET_ZADANIA_SUCCESS:
      return { ...state, zadania: action.payload };
    case types.LIST_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
    case types.LIST_PREDMETY_SUCCESS:
      return { ...state, listPredmety: action.payload };
    case types.LIST_TRIEDY_SUCCESS:
      return { ...state, listTriedy: action.payload };
    case types.OVERENIE_ZADANIA_SUCCESS:
      return { ...state, overenie: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}