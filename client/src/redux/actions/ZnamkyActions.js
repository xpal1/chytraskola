import actionsFunction from "./generated/ZnamkyActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import znamkyApi from "../../api/znamkyApi";
 
 actionsFunction.loadznamkyList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return znamkyApi
     .getznamkyList()
     .then(list => {
       dispatch(actionsFunction.loadznamkySuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
