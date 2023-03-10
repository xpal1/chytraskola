/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE APIS IN ZnamkyApiGenerated.js PLEASE EDIT ../ZnamkyApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class ZnamkyApiGenerated {

  static contextUrl = properties.endpoint + "/znamky";

  // CRUD METHODS

  /**
  * znamkyService.create
  *   @description CRUD ACTION create
  *
  */
  static createZnamky(znamky) {
    return axios.post(ZnamkyApiGenerated.contextUrl, znamky )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * znamkyService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteZnamky(id) {
    return axios.delete(ZnamkyApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * znamkyService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneZnamky(id) {
    return axios.get(ZnamkyApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * znamkyService.list
  *   @description CRUD ACTION list
  *
  */
  static getZnamkyList() {
    return axios.get(ZnamkyApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * znamkyService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveZnamky(znamky) {
    return axios.post(ZnamkyApiGenerated.contextUrl + "/" + znamky._id, znamky )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default ZnamkyApiGenerated;
