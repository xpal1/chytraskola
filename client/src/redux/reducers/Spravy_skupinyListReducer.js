// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function spravy_skupinyListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, spravy_skupiny: action.payload };
    case types.LIST_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, listSpravy_skupiny: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}