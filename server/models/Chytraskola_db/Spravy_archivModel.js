import Spravy_archivModelGenerated from "./generated/Spravy_archivModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Spravy_archivModelGenerated.init();
  
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
      return await Spravy_archivModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Spravy_archivModelGenerated,
  ...customModel
};
