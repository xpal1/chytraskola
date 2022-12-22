import UcitelModelGenerated from "./generated/UcitelModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UcitelModelGenerated.init();
  
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
      return await UcitelModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UcitelModelGenerated,
  ...customModel
};
