import UcitelApiGenerated from "./generated/UcitelApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class UcitelApi extends UcitelApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Ucitel List
  static getUcitelList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/ucitels")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default UcitelApi;