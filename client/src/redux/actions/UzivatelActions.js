import actionsFunction from "./generated/UzivatelActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import uzivatelApi from "../../api/uzivatelApi";
 
 actionsFunction.loaduzivatelList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return uzivatelApi
     .getuzivatelList()
     .then(list => {
       dispatch(actionsFunction.loaduzivatelSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
