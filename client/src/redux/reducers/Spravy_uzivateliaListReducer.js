// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function spravy_uzivateliaListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SPRAVY_UZIVATELIA_SUCCESS:
      return { ...state, spravy_uzivatelia: action.payload };
    case types.LIST_SPRAVY_UZIVATELIA_SUCCESS:
      return { ...state, listSpravy_uzivatelia: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}