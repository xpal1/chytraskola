import actionsFunction from "./generated/DochadzkaActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import dochadzkaApi from "../../api/dochadzkaApi";
 
 actionsFunction.loaddochadzkaList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return dochadzkaApi
     .getdochadzkaList()
     .then(list => {
       dispatch(actionsFunction.loaddochadzkaSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
