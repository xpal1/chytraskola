// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function spravy_archivListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, spravy_archiv: action.payload };
    case types.LIST_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, listSpravy_archiv: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}