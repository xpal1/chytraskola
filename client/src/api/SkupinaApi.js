import SkupinaApiGenerated from "./generated/SkupinaApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class SkupinaApi extends SkupinaApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Skupina List
  static getSkupinaList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/skupinas")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default SkupinaApi;