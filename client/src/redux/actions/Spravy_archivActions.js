import actionsFunction from "./generated/Spravy_archivActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import spravy_archivApi from "../../api/spravy_archivApi";
 
 actionsFunction.loadspravy_archivList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return spravy_archivApi
     .getspravy_archivList()
     .then(list => {
       dispatch(actionsFunction.loadspravy_archivSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
