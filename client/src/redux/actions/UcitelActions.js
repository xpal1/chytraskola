import actionsFunction from "./generated/UcitelActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ucitelApi from "../../api/ucitelApi";
 
 actionsFunction.loaducitelList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ucitelApi
     .getucitelList()
     .then(list => {
       dispatch(actionsFunction.loaducitelSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
