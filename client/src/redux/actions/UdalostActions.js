import actionsFunction from "./generated/UdalostActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import udalostApi from "../../api/udalostApi";
 
 actionsFunction.loadudalostList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return udalostApi
     .getudalostList()
     .then(list => {
       dispatch(actionsFunction.loadudalostSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
