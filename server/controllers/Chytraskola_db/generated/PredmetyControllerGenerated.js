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
 *  TO CUSTOMIZE predmetyControllerGenerated.js PLEASE EDIT ../predmetyController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import PredmetyModel from "../../../models/Chytraskola_db/PredmetyModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import PredmetyController from "../PredmetyController";
const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/predmety`;
    router.get(baseUrl + "/findBy_triedy/:key", authorize([]), PredmetyController.findBy_triedy);
    router.get(baseUrl + "/findBy_ucitel/:key", authorize([]), PredmetyController.findBy_ucitel);
    router.get(baseUrl + "", authorize([]), PredmetyController.list);
  },


  // CRUD METHODS


  /**
  * predmetyModel.findBy_triedy
  *   @description CRUD ACTION findBy_triedy
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_triedy: async (req, res) => {
    try {
      const result = await PredmetyModel.findBy_triedy(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * predmetyModel.findBy_ucitel
  *   @description CRUD ACTION findBy_ucitel
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_ucitel: async (req, res) => {
    try {
      const result = await PredmetyModel.findBy_ucitel(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * predmetyModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await PredmetyModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  
  // Custom APIs

};

export default generatedControllers;