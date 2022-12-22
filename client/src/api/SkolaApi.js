import SkolaApiGenerated from "./generated/SkolaApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SkolaApi extends SkolaApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Skola List
  static getSkolaList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/skolas")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SkolaApi;