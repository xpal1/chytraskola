import RodiciaApiGenerated from "./generated/RodiciaApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class RodiciaApi extends RodiciaApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Rodicia List
  static getRodiciaList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/rodicias")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default RodiciaApi;