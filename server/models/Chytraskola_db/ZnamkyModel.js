import ZnamkyModelGenerated from "./generated/ZnamkyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ZnamkyModelGenerated.init();
  
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
      return await ZnamkyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ZnamkyModelGenerated,
  ...customModel
};
