/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN RozvrhActionsGenerated.js PLEASE EDIT ../RozvrhActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import RozvrhApi from "../../../api/RozvrhApi";

let actionsFunction = {

  //CRUD METHODS

  // Create rozvrh
  createRozvrh: function(rozvrh) {
    return function(dispatch) {
      return RozvrhApi
        .createRozvrh(rozvrh)
        .then(rozvrh => {
          dispatch(actionsFunction.createRozvrhSuccess(rozvrh));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createRozvrhSuccess: function(rozvrh) {
    return { type: types.CREATE_ROZVRH_SUCCESS, payload: rozvrh };
  },


  // Delete rozvrh
  deleteRozvrh: function(id) {
    return function(dispatch) {
      return RozvrhApi
        .deleteRozvrh(id)
        .then(rozvrh => {
          dispatch(actionsFunction.deleteRozvrhSuccess(rozvrh));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteRozvrhSuccess: function(rozvrh) {
    return { type: types.DELETE_ROZVRH_SUCCESS, payload: rozvrh };
  },


  // Find by _skupina
  findBy_skupina: function(key) {
    return function(dispatch) {
      return RozvrhApi
        .findBy_skupina(key)
        .then(item => {
          dispatch(actionsFunction.findBy_skupinaSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_skupinaSuccess: function(item) {
    return { type: types.FINDBY_SKUPINA_ROZVRH_SUCCESS, payload: item };
  },


  // Find by _triedy
  findBy_triedy: function(key) {
    return function(dispatch) {
      return RozvrhApi
        .findBy_triedy(key)
        .then(item => {
          dispatch(actionsFunction.findBy_triedySuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_triedySuccess: function(item) {
    return { type: types.FINDBY_TRIEDY_ROZVRH_SUCCESS, payload: item };
  },


  // Find by _ucitel
  findBy_ucitel: function(key) {
    return function(dispatch) {
      return RozvrhApi
        .findBy_ucitel(key)
        .then(item => {
          dispatch(actionsFunction.findBy_ucitelSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_ucitelSuccess: function(item) {
    return { type: types.FINDBY_UCITEL_ROZVRH_SUCCESS, payload: item };
  },


  // Find by _vyucovanie_cas
  findBy_vyucovanie_cas: function(key) {
    return function(dispatch) {
      return RozvrhApi
        .findBy_vyucovanie_cas(key)
        .then(item => {
          dispatch(actionsFunction.findBy_vyucovanie_casSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBy_vyucovanie_casSuccess: function(item) {
    return { type: types.FINDBY_VYUCOVANIE_CAS_ROZVRH_SUCCESS, payload: item };
  },


  // Get rozvrh
  loadRozvrh: function(id) {
    return function(dispatch) {
      return RozvrhApi
        .getOneRozvrh(id)
        .then(rozvrh => {
          dispatch(actionsFunction.loadRozvrhSuccess(rozvrh));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadRozvrhSuccess: function(rozvrh) {
    return { type: types.GET_ROZVRH_SUCCESS, payload: rozvrh };
  },

  // Load  list
  loadRozvrhList: function() {
    return function(dispatch) {
      return RozvrhApi
        .getRozvrhList()
        .then(list => {
          dispatch(actionsFunction.loadRozvrhListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadRozvrhListSuccess: function(list) {
    return { type: types.LIST_ROZVRH_SUCCESS, payload: list };
  },

	
  // Save rozvrh
  saveRozvrh: function(rozvrh) {
    return function(dispatch) {
      return RozvrhApi
        .saveRozvrh(rozvrh)
        .then(rozvrh => {
          dispatch(actionsFunction.saveRozvrhSuccess(rozvrh));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveRozvrhSuccess: function(rozvrh) {
    return { type: types.UPDATE_ROZVRH_SUCCESS, payload: rozvrh };
  },


};

export default actionsFunction;
