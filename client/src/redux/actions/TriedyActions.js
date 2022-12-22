import actionsFunction from "./generated/TriedyActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import triedyApi from "../../api/triedyApi";
 
 actionsFunction.loadtriedyList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return triedyApi
     .gettriedyList()
     .then(list => {
       dispatch(actionsFunction.loadtriedySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
