import actionsFunction from "./generated/SkupinaActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import skupinaApi from "../../api/skupinaApi";
 
 actionsFunction.loadskupinaList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return skupinaApi
     .getskupinaList()
     .then(list => {
       dispatch(actionsFunction.loadskupinaSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
