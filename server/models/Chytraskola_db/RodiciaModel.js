import RodiciaModelGenerated from "./generated/RodiciaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RodiciaModelGenerated.init();
  
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
      return await RodiciaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RodiciaModelGenerated,
  ...customModel
};
