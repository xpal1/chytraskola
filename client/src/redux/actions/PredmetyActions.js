import actionsFunction from "./generated/PredmetyActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import predmetyApi from "../../api/predmetyApi";
 
 actionsFunction.loadpredmetyList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return predmetyApi
     .getpredmetyList()
     .then(list => {
       dispatch(actionsFunction.loadpredmetySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
