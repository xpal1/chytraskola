import PredmetyControllerGenerated from "./generated/PredmetyControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import PredmetyModel from "../../models/Chytraskola_db/PredmetyModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/predmety`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     PredmetyControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await PredmetyModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...PredmetyControllerGenerated,
  ...customControllers
};

