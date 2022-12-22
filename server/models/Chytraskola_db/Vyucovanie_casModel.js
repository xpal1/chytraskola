import Vyucovanie_casModelGenerated from "./generated/Vyucovanie_casModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = Vyucovanie_casModelGenerated.init();
  
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
      return await Vyucovanie_casModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...Vyucovanie_casModelGenerated,
  ...customModel
};
