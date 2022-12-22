import DochadzkaApiGenerated from "./generated/DochadzkaApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class DochadzkaApi extends DochadzkaApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Dochadzka List
  static getDochadzkaList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/dochadzkas")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default DochadzkaApi;