// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  spravy_skupiny: {}
};

// Reducer
export default function spravy_skupinyEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, spravy_skupiny: action.payload };
    case types.UPDATE_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, spravy_skupiny: action.payload };
    case types.GET_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, spravy_skupiny: action.payload };
    case types.LIST_SKUPINA_SUCCESS:
      return { ...state, listSkupina: action.payload };
    case types.FINDBY_SPRAVY_SKUPINA_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, listSpravy_archiv: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}