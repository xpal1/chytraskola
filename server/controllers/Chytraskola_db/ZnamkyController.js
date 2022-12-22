import ZnamkyControllerGenerated from "./generated/ZnamkyControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import ZnamkyModel from "../../models/Chytraskola_db/ZnamkyModel";

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
     const baseUrl = `${Properties.api}/znamky`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     ZnamkyControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await ZnamkyModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...ZnamkyControllerGenerated,
  ...customControllers
};

