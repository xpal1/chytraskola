import actionsFunction from "./generated/OdboryActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import odboryApi from "../../api/odboryApi";
 
 actionsFunction.loadodboryList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return odboryApi
     .getodboryList()
     .then(list => {
       dispatch(actionsFunction.loadodborySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
