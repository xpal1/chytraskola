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
 *  TO CUSTOMIZE APIS IN Spravy_archivApiGenerated.js PLEASE EDIT ../Spravy_archivApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class Spravy_archivApiGenerated {

  static contextUrl = properties.endpoint + "/spravy_archiv";

  // CRUD METHODS

  /**
  * spravy_archivService.create
  *   @description CRUD ACTION create
  *
  */
  static createSpravy_archiv(spravy_archiv) {
    return axios.post(Spravy_archivApiGenerated.contextUrl, spravy_archiv )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * spravy_archivService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteSpravy_archiv(id) {
    return axios.delete(Spravy_archivApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * spravy_archivService.findBy_spravy_skupina
  *   @description CRUD ACTION findBy_spravy_skupina
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_spravy_skupina(id) {
    return axios.get(Spravy_archivApiGenerated.contextUrl + "/findBy_spravy_skupina/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * spravy_archivService.findBy_spravy_uzivatelia
  *   @description CRUD ACTION findBy_spravy_uzivatelia
  *   @param Objectid key Id of model to search for
  *
  */
  static findBy_spravy_uzivatelia(id) {
    return axios.get(Spravy_archivApiGenerated.contextUrl + "/findBy_spravy_uzivatelia/" + id )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * spravy_archivService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneSpravy_archiv(id) {
    return axios.get(Spravy_archivApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * spravy_archivService.list
  *   @description CRUD ACTION list
  *
  */
  static getSpravy_archivList() {
    return axios.get(Spravy_archivApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * spravy_archivService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveSpravy_archiv(spravy_archiv) {
    return axios.post(Spravy_archivApiGenerated.contextUrl + "/" + spravy_archiv._id, spravy_archiv )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default Spravy_archivApiGenerated;