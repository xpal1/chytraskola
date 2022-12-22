import TriedyApiGenerated from "./generated/TriedyApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TriedyApi extends TriedyApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Triedy List
  static getTriedyList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/triedys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TriedyApi;