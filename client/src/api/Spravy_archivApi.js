import Spravy_archivApiGenerated from "./generated/Spravy_archivApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class Spravy_archivApi extends Spravy_archivApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Spravy_archiv List
  static getSpravy_archivList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/spravy_archivs")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default Spravy_archivApi;