// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Chytraskola_db/UserModel";
import DochadzkaModel from "../models/Chytraskola_db/DochadzkaModel";
import OdboryModel from "../models/Chytraskola_db/OdboryModel";
import PredmetyModel from "../models/Chytraskola_db/PredmetyModel";
import RodiciaModel from "../models/Chytraskola_db/RodiciaModel";
import RozvrhModel from "../models/Chytraskola_db/RozvrhModel";
import SkolaModel from "../models/Chytraskola_db/SkolaModel";
import SkupinaModel from "../models/Chytraskola_db/SkupinaModel";
import Spravy_archivModel from "../models/Chytraskola_db/Spravy_archivModel";
import Spravy_skupinyModel from "../models/Chytraskola_db/Spravy_skupinyModel";
import Spravy_uzivateliaModel from "../models/Chytraskola_db/Spravy_uzivateliaModel";
import StudentModel from "../models/Chytraskola_db/StudentModel";
import TriedyModel from "../models/Chytraskola_db/TriedyModel";
import UcitelModel from "../models/Chytraskola_db/UcitelModel";
import UdalostModel from "../models/Chytraskola_db/UdalostModel";
import UzivatelModel from "../models/Chytraskola_db/UzivatelModel";
import Vyucovanie_casModel from "../models/Chytraskola_db/Vyucovanie_casModel";
import ZadaniaModel from "../models/Chytraskola_db/ZadaniaModel";
import ZnamkyModel from "../models/Chytraskola_db/ZnamkyModel";

// End Import Models

// Import Models Factom Blockchain
import IdentityModel from "../models/Chytraskola_db/IdentityModel";
import ChainModel from "../models/Chytraskola_db/ChainModel";
import EntryModel from "../models/Chytraskola_db/EntryModel";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.chytraskola_db_dbUrl);

    // Start Init Models

		UserModel.init();
		DochadzkaModel.init();
		OdboryModel.init();
		PredmetyModel.init();
		RodiciaModel.init();
		RozvrhModel.init();
		SkolaModel.init();
		SkupinaModel.init();
		Spravy_archivModel.init();
		Spravy_skupinyModel.init();
		Spravy_uzivateliaModel.init();
		StudentModel.init();
		TriedyModel.init();
		UcitelModel.init();
		UdalostModel.init();
		UzivatelModel.init();
		Vyucovanie_casModel.init();
		ZadaniaModel.init();
		ZnamkyModel.init();
 // End Init Models
    
    // Init Models Factom Blockchain
    IdentityModel.init();
    ChainModel.init();
    EntryModel.init();
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_chytraskola_db = await mongoose.connect(
        "mongodb://" + properties.chytraskola_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_chytraskola_db;
  }
}

export default new Database();
