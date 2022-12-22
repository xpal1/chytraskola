// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  spravy_archiv: {}
};

// Reducer
export default function spravy_archivEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, spravy_archiv: action.payload };
    case types.UPDATE_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, spravy_archiv: action.payload };
    case types.GET_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, spravy_archiv: action.payload };
    case types.LIST_SPRAVY_UZIVATELIA_SUCCESS:
      return { ...state, listSpravy_uzivatelia: action.payload };
    case types.LIST_SPRAVY_SKUPINY_SUCCESS:
      return { ...state, listSpravy_skupiny: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}