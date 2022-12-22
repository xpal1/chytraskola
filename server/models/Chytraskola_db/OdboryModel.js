import OdboryModelGenerated from "./generated/OdboryModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = OdboryModelGenerated.init();
  
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
      return await OdboryModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...OdboryModelGenerated,
  ...customModel
};
