import Spravy_uzivateliaControllerGenerated from "./generated/Spravy_uzivateliaControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import Spravy_uzivateliaModel from "../../models/Chytraskola_db/Spravy_uzivateliaModel";

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
     const baseUrl = `${Properties.api}/spravy_uzivatelia`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     Spravy_uzivateliaControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await Spravy_uzivateliaModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...Spravy_uzivateliaControllerGenerated,
  ...customControllers
};

