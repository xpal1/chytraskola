import actionsFunction from "./generated/Vyucovanie_casActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import vyucovanie_casApi from "../../api/vyucovanie_casApi";
 
 actionsFunction.loadvyucovanie_casList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return vyucovanie_casApi
     .getvyucovanie_casList()
     .then(list => {
       dispatch(actionsFunction.loadvyucovanie_casSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
