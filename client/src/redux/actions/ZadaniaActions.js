import actionsFunction from "./generated/ZadaniaActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import zadaniaApi from "../../api/zadaniaApi";
 
 actionsFunction.loadzadaniaList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return zadaniaApi
     .getzadaniaList()
     .then(list => {
       dispatch(actionsFunction.loadzadaniaSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
