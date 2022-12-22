import Spravy_skupinyModelGenerated from "./generated/Spravy_skupinyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Spravy_skupinyModelGenerated.init();
  
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
      return await Spravy_skupinyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Spravy_skupinyModelGenerated,
  ...customModel
};
