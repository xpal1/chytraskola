import actionsFunction from "./generated/Spravy_skupinyActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import spravy_skupinyApi from "../../api/spravy_skupinyApi";
 
 actionsFunction.loadspravy_skupinyList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return spravy_skupinyApi
     .getspravy_skupinyList()
     .then(list => {
       dispatch(actionsFunction.loadspravy_skupinySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
