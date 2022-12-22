import OdboryApiGenerated from "./generated/OdboryApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class OdboryApi extends OdboryApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Odbory List
  static getOdboryList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/odborys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default OdboryApi;