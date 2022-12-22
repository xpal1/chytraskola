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
 *  TO CUSTOMIZE skupinaModelGenerated.js PLEASE EDIT ../skupinaModel.js
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
      * skupina
      */
    const skupinaSchema = new mongoose.Schema({
      nazov: {
        type: "String"
      },
      student: {
        type: "String"
      },
      trieda: {
        type: "String"
      },
      ucitel: {
        type: "String"
      },
      // RELATIONS
      _student: {
        type: Schema.ObjectId,
        ref: "student"
      },
      _triedy: {
        type: Schema.ObjectId,
        ref: "triedy"
      },
      _ucitel: [{
        type: Schema.ObjectId,
        ref: "ucitel"
      }],
      
      // EXTERNAL RELATIONS
      /*
      _skupina: [{
        type: Schema.ObjectId,
        ref: "rozvrh"
      }],
      _skupina: [{
        type: Schema.ObjectId,
        ref: "spravy_skupiny"
      }],
      _skupina: [{
        type: Schema.ObjectId,
        ref: "triedy"
      }],
      _skupina: [{
        type: Schema.ObjectId,
        ref: "student"
      }],
      _skupina: {
        type: Schema.ObjectId,
        ref: "zadania"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Skupina", skupinaSchema));

    return skupinaSchema;
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
  * skupinaModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * skupinaModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * skupinaModel.findBy_triedy
  *   @description CRUD ACTION findBy_triedy
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_triedy(key) {
    return await generatedModel.model.find({ '_triedy' : key});
  },
  
  /**
  * skupinaModel.findBy_ucitel
  *   @description CRUD ACTION findBy_ucitel
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_ucitel(key) {
    return await generatedModel.model.find({ '_ucitel' : key});
  },
  
  /**
  * skupinaModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * skupinaModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * skupinaModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
