import RozvrhApiGenerated from "./generated/RozvrhApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class RozvrhApi extends RozvrhApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Rozvrh List
  static getRozvrhList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/rozvrhs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default RozvrhApi;