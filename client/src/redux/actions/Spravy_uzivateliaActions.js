import actionsFunction from "./generated/Spravy_uzivateliaActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import spravy_uzivateliaApi from "../../api/spravy_uzivateliaApi";
 
 actionsFunction.loadspravy_uzivateliaList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return spravy_uzivateliaApi
     .getspravy_uzivateliaList()
     .then(list => {
       dispatch(actionsFunction.loadspravy_uzivateliaSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
