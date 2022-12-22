import Spravy_uzivateliaModelGenerated from "./generated/Spravy_uzivateliaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Spravy_uzivateliaModelGenerated.init();
  
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
      return await Spravy_uzivateliaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Spravy_uzivateliaModelGenerated,
  ...customModel
};
