import SkupinaModelGenerated from "./generated/SkupinaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SkupinaModelGenerated.init();
  
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
      return await SkupinaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SkupinaModelGenerated,
  ...customModel
};
