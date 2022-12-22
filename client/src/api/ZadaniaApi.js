import ZadaniaApiGenerated from "./generated/ZadaniaApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ZadaniaApi extends ZadaniaApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Zadania List
  static getZadaniaList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/zadanias")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ZadaniaApi;