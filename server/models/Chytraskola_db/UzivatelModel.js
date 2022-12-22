import UzivatelModelGenerated from "./generated/UzivatelModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UzivatelModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await UzivatelModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UzivatelModelGenerated,
  ...customModel
};
