import ZadaniaModelGenerated from "./generated/ZadaniaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ZadaniaModelGenerated.init();
  
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
      return await ZadaniaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ZadaniaModelGenerated,
  ...customModel
};
