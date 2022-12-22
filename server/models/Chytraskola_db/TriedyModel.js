import TriedyModelGenerated from "./generated/TriedyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TriedyModelGenerated.init();
  
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
      return await TriedyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TriedyModelGenerated,
  ...customModel
};
