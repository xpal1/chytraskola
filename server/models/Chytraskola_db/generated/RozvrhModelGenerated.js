/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE rozvrhModelGenerated.js PLEASE EDIT ../rozvrhModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Chytraskola_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * rozvrh
      */
    const rozvrhSchema = new mongoose.Schema({
      cas_vyucovanie: {
        type: "String"
      },
      den: {
        type: "String"
      },
      predmet: {
        type: "String"
      },
      skupina: {
        type: "String"
      },
      trieda: {
        type: "String"
      },
      ucitel: {
        type: "String"
      },
      // RELATIONS
      _predmety: [{
        type: Schema.ObjectId,
        ref: "predmety"
      }],
      _skupina: [{
        type: Schema.ObjectId,
        ref: "skupina"
      }],
      _triedy: {
        type: Schema.ObjectId,
        ref: "triedy"
      },
      _ucitel: [{
        type: Schema.ObjectId,
        ref: "ucitel"
      }],
      _vyucovanie_cas: [{
        type: Schema.ObjectId,
        ref: "vyucovanie_cas"
      }],
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Rozvrh", rozvrhSchema));

    return rozvrhSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * rozvrhModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * rozvrhModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * rozvrhModel.findBy_skupina
  *   @description CRUD ACTION findBy_skupina
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_skupina(key) {
    return await generatedModel.model.find({ '_skupina' : key});
  },
  
  /**
  * rozvrhModel.findBy_triedy
  *   @description CRUD ACTION findBy_triedy
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_triedy(key) {
    return await generatedModel.model.find({ '_triedy' : key});
  },
  
  /**
  * rozvrhModel.findBy_ucitel
  *   @description CRUD ACTION findBy_ucitel
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_ucitel(key) {
    return await generatedModel.model.find({ '_ucitel' : key});
  },
  
  /**
  * rozvrhModel.findBy_vyucovanie_cas
  *   @description CRUD ACTION findBy_vyucovanie_cas
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_vyucovanie_cas(key) {
    return await generatedModel.model.find({ '_vyucovanie_cas' : key});
  },
  
  /**
  * rozvrhModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * rozvrhModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * rozvrhModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
