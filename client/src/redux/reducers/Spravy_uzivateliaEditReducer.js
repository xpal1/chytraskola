// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  spravy_uzivatelia: {}
};

// Reducer
export default function spravy_uzivateliaEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_SPRAVY_UZIVATELIA_SUCCESS:
      return { ...state, spravy_uzivatelia: action.payload };
    case types.UPDATE_SPRAVY_UZIVATELIA_SUCCESS:
      return { ...state, spravy_uzivatelia: action.payload };
    case types.GET_SPRAVY_UZIVATELIA_SUCCESS:
      return { ...state, spravy_uzivatelia: action.payload };
    case types.FINDBY_SPRAVY_UZIVATELIA_SPRAVY_ARCHIV_SUCCESS:
      return { ...state, listSpravy_archiv: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}