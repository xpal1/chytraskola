import UdalostApiGenerated from "./generated/UdalostApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class UdalostApi extends UdalostApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Udalost List
  static getUdalostList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/udalosts")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default UdalostApi;