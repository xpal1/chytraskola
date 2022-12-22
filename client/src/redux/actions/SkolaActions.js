import actionsFunction from "./generated/SkolaActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import skolaApi from "../../api/skolaApi";
 
 actionsFunction.loadskolaList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return skolaApi
     .getskolaList()
     .then(list => {
       dispatch(actionsFunction.loadskolaSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
