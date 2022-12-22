// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function zadaniaListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ZADANIA_SUCCESS:
      return { ...state, zadania: action.payload };
    case types.LIST_ZADANIA_SUCCESS:
      return { ...state, listZadania: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}