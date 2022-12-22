import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import DochadzkaEditReducer from "./DochadzkaEditReducer";
import DochadzkaListReducer from "./DochadzkaListReducer";
import OdboryEditReducer from "./OdboryEditReducer";
import OdboryListReducer from "./OdboryListReducer";
import RodiciaEditReducer from "./RodiciaEditReducer";
import RodiciaListReducer from "./RodiciaListReducer";
import RozvrhEditReducer from "./RozvrhEditReducer";
import RozvrhListReducer from "./RozvrhListReducer";
import SkolaEditReducer from "./SkolaEditReducer";
import SkolaListReducer from "./SkolaListReducer";
import SkupinaEditReducer from "./SkupinaEditReducer";
import SkupinaListReducer from "./SkupinaListReducer";
import Spravy_archivEditReducer from "./Spravy_archivEditReducer";
import Spravy_archivListReducer from "./Spravy_archivListReducer";
import Spravy_skupinyEditReducer from "./Spravy_skupinyEditReducer";
import Spravy_skupinyListReducer from "./Spravy_skupinyListReducer";
import Spravy_uzivateliaEditReducer from "./Spravy_uzivateliaEditReducer";
import Spravy_uzivateliaListReducer from "./Spravy_uzivateliaListReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import TriedyEditReducer from "./TriedyEditReducer";
import TriedyListReducer from "./TriedyListReducer";
import UcitelEditReducer from "./UcitelEditReducer";
import UcitelListReducer from "./UcitelListReducer";
import UdalostEditReducer from "./UdalostEditReducer";
import UdalostListReducer from "./UdalostListReducer";
import UzivatelEditReducer from "./UzivatelEditReducer";
import UzivatelListReducer from "./UzivatelListReducer";
import Vyucovanie_casEditReducer from "./Vyucovanie_casEditReducer";
import Vyucovanie_casListReducer from "./Vyucovanie_casListReducer";
import ZadaniaEditReducer from "./ZadaniaEditReducer";
import ZadaniaListReducer from "./ZadaniaListReducer";
import ZnamkyEditReducer from "./ZnamkyEditReducer";
import ZnamkyListReducer from "./ZnamkyListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	DochadzkaEditReducer,
	DochadzkaListReducer,
	OdboryEditReducer,
	OdboryListReducer,
	RodiciaEditReducer,
	RodiciaListReducer,
	RozvrhEditReducer,
	RozvrhListReducer,
	SkolaEditReducer,
	SkolaListReducer,
	SkupinaEditReducer,
	SkupinaListReducer,
	Spravy_archivEditReducer,
	Spravy_archivListReducer,
	Spravy_skupinyEditReducer,
	Spravy_skupinyListReducer,
	Spravy_uzivateliaEditReducer,
	Spravy_uzivateliaListReducer,
	StudentEditReducer,
	StudentListReducer,
	TriedyEditReducer,
	TriedyListReducer,
	UcitelEditReducer,
	UcitelListReducer,
	UdalostEditReducer,
	UdalostListReducer,
	UzivatelEditReducer,
	UzivatelListReducer,
	Vyucovanie_casEditReducer,
	Vyucovanie_casListReducer,
	ZadaniaEditReducer,
	ZadaniaListReducer,
	ZnamkyEditReducer,
	ZnamkyListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
