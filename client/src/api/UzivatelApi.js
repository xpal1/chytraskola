import UzivatelApiGenerated from "./generated/UzivatelApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class UzivatelApi extends UzivatelApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Uzivatel List
  static getUzivatelList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/uzivatels")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default UzivatelApi;