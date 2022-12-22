import Spravy_uzivateliaApiGenerated from "./generated/Spravy_uzivateliaApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Spravy_uzivateliaApi extends Spravy_uzivateliaApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Spravy_uzivatelia List
  static getSpravy_uzivateliaList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/spravy_uzivatelias")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Spravy_uzivateliaApi;