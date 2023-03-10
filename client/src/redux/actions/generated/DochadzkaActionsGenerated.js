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
 *  TO CUSTOMIZE FUNCTIONS IN DochadzkaActionsGenerated.js PLEASE EDIT ../DochadzkaActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import DochadzkaApi from "../../../api/DochadzkaApi";

let actionsFunction = {

  //CRUD METHODS

  // Create dochadzka
  createDochadzka: function(dochadzka) {
    return function(dispatch) {
      return DochadzkaApi
        .createDochadzka(dochadzka)
        .then(dochadzka => {
          dispatch(actionsFunction.createDochadzkaSuccess(dochadzka));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createDochadzkaSuccess: function(dochadzka) {
    return { type: types.CREATE_DOCHADZKA_SUCCESS, payload: dochadzka };
  },


  // Delete dochadzka
  deleteDochadzka: function(id) {
    return function(dispatch) {
      return DochadzkaApi
        .deleteDochadzka(id)
        .then(dochadzka => {
          dispatch(actionsFunction.deleteDochadzkaSuccess(dochadzka));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteDochadzkaSuccess: function(dochadzka) {
    return { type: types.DELETE_DOCHADZKA_SUCCESS, payload: dochadzka };
  },


  // Find by _triedy
  findBy_triedy: function(key) {
    return function(dispatch) {
      return DochadzkaApi
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
    return { type: types.FINDBY_TRIEDY_DOCHADZKA_SUCCESS, payload: item };
  },


  // Find by _ucitel
  findBy_ucitel: function(key) {
    return function(dispatch) {
      return DochadzkaApi
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
    return { type: types.FINDBY_UCITEL_DOCHADZKA_SUCCESS, payload: item };
  },


  // Get dochadzka
  loadDochadzka: function(id) {
    return function(dispatch) {
      return DochadzkaApi
        .getOneDochadzka(id)
        .then(dochadzka => {
          dispatch(actionsFunction.loadDochadzkaSuccess(dochadzka));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDochadzkaSuccess: function(dochadzka) {
    return { type: types.GET_DOCHADZKA_SUCCESS, payload: dochadzka };
  },

  // Load  list
  loadDochadzkaList: function() {
    return function(dispatch) {
      return DochadzkaApi
        .getDochadzkaList()
        .then(list => {
          dispatch(actionsFunction.loadDochadzkaListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadDochadzkaListSuccess: function(list) {
    return { type: types.LIST_DOCHADZKA_SUCCESS, payload: list };
  },

	
  // Save dochadzka
  saveDochadzka: function(dochadzka) {
    return function(dispatch) {
      return DochadzkaApi
        .saveDochadzka(dochadzka)
        .then(dochadzka => {
          dispatch(actionsFunction.saveDochadzkaSuccess(dochadzka));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveDochadzkaSuccess: function(dochadzka) {
    return { type: types.UPDATE_DOCHADZKA_SUCCESS, payload: dochadzka };
  },


};

export default actionsFunction;
