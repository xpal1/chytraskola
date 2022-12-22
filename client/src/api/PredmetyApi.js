import PredmetyApiGenerated from "./generated/PredmetyApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class PredmetyApi extends PredmetyApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Predmety List
  static getPredmetyList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/predmetys")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default PredmetyApi;