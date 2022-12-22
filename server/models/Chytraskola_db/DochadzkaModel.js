import DochadzkaModelGenerated from "./generated/DochadzkaModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = DochadzkaModelGenerated.init();
  
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
      return await DochadzkaModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...DochadzkaModelGenerated,
  ...customModel
};
