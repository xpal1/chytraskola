import RozvrhModelGenerated from "./generated/RozvrhModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RozvrhModelGenerated.init();
  
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
      return await RozvrhModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RozvrhModelGenerated,
  ...customModel
};
