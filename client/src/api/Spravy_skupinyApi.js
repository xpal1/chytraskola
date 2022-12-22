import Spravy_skupinyApiGenerated from "./generated/Spravy_skupinyApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Spravy_skupinyApi extends Spravy_skupinyApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Spravy_skupiny List
  static getSpravy_skupinyList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/spravy_skupinys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Spravy_skupinyApi;