import SkolaModelGenerated from "./generated/SkolaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SkolaModelGenerated.init();
  
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
      return await SkolaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SkolaModelGenerated,
  ...customModel
};
