import PredmetyModelGenerated from "./generated/PredmetyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PredmetyModelGenerated.init();
  
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
      return await PredmetyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PredmetyModelGenerated,
  ...customModel
};
