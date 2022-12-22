import UdalostModelGenerated from "./generated/UdalostModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UdalostModelGenerated.init();
  
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
      return await UdalostModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UdalostModelGenerated,
  ...customModel
};
