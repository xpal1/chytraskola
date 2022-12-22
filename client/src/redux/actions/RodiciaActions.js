import actionsFunction from "./generated/RodiciaActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import rodiciaApi from "../../api/rodiciaApi";
 
 actionsFunction.loadrodiciaList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return rodiciaApi
     .getrodiciaList()
     .then(list => {
       dispatch(actionsFunction.loadrodiciaSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
