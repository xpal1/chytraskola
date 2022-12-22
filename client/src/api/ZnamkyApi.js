import ZnamkyApiGenerated from "./generated/ZnamkyApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ZnamkyApi extends ZnamkyApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Znamky List
  static getZnamkyList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/znamkys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ZnamkyApi;