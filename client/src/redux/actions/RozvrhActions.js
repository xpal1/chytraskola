import actionsFunction from "./generated/RozvrhActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import rozvrhApi from "../../api/rozvrhApi";
 
 actionsFunction.loadrozvrhList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return rozvrhApi
     .getrozvrhList()
     .then(list => {
       dispatch(actionsFunction.loadrozvrhSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
