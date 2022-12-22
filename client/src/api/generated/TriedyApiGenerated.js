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
 *  TO CUSTOMIZE APIS IN TriedyApiGenerated.js PLEASE EDIT ../TriedyApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class TriedyApiGenerated {

  static contextUrl = properties.endpoint + "/triedy";

  // CRUD METHODS

  /**
  * triedyService.create
  *   @description CRUD ACTION create
  *
  */
  static createTriedy(triedy) {
    return axios.post(TriedyApiGenerated.contextUrl, triedy )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteTriedy(id) {
    return axios.delete(TriedyApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.findBy_odbory
  *   @description CRUD ACTION findBy_odbory
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_odbory(id) {
    return axios.get(TriedyApiGenerated.contextUrl + "/findBy_odbory/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.findBy_skupina
  *   @description CRUD ACTION findBy_skupina
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_skupina(id) {
    return axios.get(TriedyApiGenerated.contextUrl + "/findBy_skupina/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.findBy_ucitel
  *   @description CRUD ACTION findBy_ucitel
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_ucitel(id) {
    return axios.get(TriedyApiGenerated.contextUrl + "/findBy_ucitel/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneTriedy(id) {
    return axios.get(TriedyApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.list
  *   @description CRUD ACTION list
  *
  */
  static getTriedyList() {
    return axios.get(TriedyApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * triedyService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveTriedy(triedy) {
    return axios.post(TriedyApiGenerated.contextUrl + "/" + triedy._id, triedy )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default TriedyApiGenerated;