// Dependencies
import React, { Component } from "react";
import { Fragment } from "react";
import { Route, Switch } from "react-router";
import { PrivateRoute } from "./security/PrivateRoute";

// Material UI
import Paper from "@material-ui/core/Paper";

/* START MY VIEWS IMPORT */

import DochadzkaEdit from "./pages/DochadzkaEdit";
import DochadzkaList from "./pages/DochadzkaList";
import OdboryEdit from "./pages/OdboryEdit";
import OdboryList from "./pages/OdboryList";
import RodiciaEdit from "./pages/RodiciaEdit";
import RodiciaList from "./pages/RodiciaList";
import RozvrhEdit from "./pages/RozvrhEdit";
import RozvrhList from "./pages/RozvrhList";
import SkolaEdit from "./pages/SkolaEdit";
import SkolaList from "./pages/SkolaList";
import SkupinaEdit from "./pages/SkupinaEdit";
import SkupinaList from "./pages/SkupinaList";
import Spravy_archivEdit from "./pages/Spravy_archivEdit";
import Spravy_archivList from "./pages/Spravy_archivList";
import Spravy_skupinyEdit from "./pages/Spravy_skupinyEdit";
import Spravy_skupinyList from "./pages/Spravy_skupinyList";
import Spravy_uzivateliaEdit from "./pages/Spravy_uzivateliaEdit";
import Spravy_uzivateliaList from "./pages/Spravy_uzivateliaList";
import StudentEdit from "./pages/StudentEdit";
import StudentList from "./pages/StudentList";
import TriedyEdit from "./pages/TriedyEdit";
import TriedyList from "./pages/TriedyList";
import UcitelEdit from "./pages/UcitelEdit";
import UcitelList from "./pages/UcitelList";
import UdalostEdit from "./pages/UdalostEdit";
import UdalostList from "./pages/UdalostList";
import UzivatelEdit from "./pages/UzivatelEdit";
import UzivatelList from "./pages/UzivatelList";
import Vyucovanie_casEdit from "./pages/Vyucovanie_casEdit";
import Vyucovanie_casList from "./pages/Vyucovanie_casList";
import ZadaniaEdit from "./pages/ZadaniaEdit";
import ZadaniaList from "./pages/ZadaniaList";
import ZnamkyEdit from "./pages/ZnamkyEdit";
import ZnamkyList from "./pages/ZnamkyList";

/* END MY VIEWS IMPORT */

// CUSTOM VIEWS
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import UserEdit from "./pages/UserEdit";
import UserList from "./pages/UserList";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Fragment>
          <Paper>
            <div className="main-cointainer">
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/users/:id" component={UserEdit} roles={["ADMIN"]}/>
              <PrivateRoute exact path="/users" component={UserList} roles={["ADMIN"]}/>
              
              {/* CUSTOM VIEWS */}

              <PrivateRoute exact path="/home" component={Home} />

              {/* START MY VIEWS */}

              <PrivateRoute exact path="/dochadzka/:id" component={ DochadzkaEdit }  />
              <PrivateRoute exact path="/dochadzka" component={ DochadzkaList }  />
              <PrivateRoute exact path="/odbory/:id" component={ OdboryEdit }  />
              <PrivateRoute exact path="/odbory" component={ OdboryList }  />
              <PrivateRoute exact path="/rodicia/:id" component={ RodiciaEdit }  />
              <PrivateRoute exact path="/rodicia" component={ RodiciaList }  />
              <PrivateRoute exact path="/rozvrh/:id" component={ RozvrhEdit }  />
              <PrivateRoute exact path="/rozvrh" component={ RozvrhList }  />
              <PrivateRoute exact path="/skola/:id" component={ SkolaEdit }  />
              <PrivateRoute exact path="/skola" component={ SkolaList }  />
              <PrivateRoute exact path="/skupina/:id" component={ SkupinaEdit }  />
              <PrivateRoute exact path="/skupina" component={ SkupinaList }  />
              <PrivateRoute exact path="/spravy_archiv/:id" component={ Spravy_archivEdit }  />
              <PrivateRoute exact path="/spravy_archiv" component={ Spravy_archivList }  />
              <PrivateRoute exact path="/spravy_skupiny/:id" component={ Spravy_skupinyEdit }  />
              <PrivateRoute exact path="/spravy_skupiny" component={ Spravy_skupinyList }  />
              <PrivateRoute exact path="/spravy_uzivatelia/:id" component={ Spravy_uzivateliaEdit }  />
              <PrivateRoute exact path="/spravy_uzivatelia" component={ Spravy_uzivateliaList }  />
              <PrivateRoute exact path="/student/:id" component={ StudentEdit }  />
              <PrivateRoute exact path="/student" component={ StudentList }  />
              <PrivateRoute exact path="/triedy/:id" component={ TriedyEdit }  />
              <PrivateRoute exact path="/triedy" component={ TriedyList }  />
              <PrivateRoute exact path="/ucitel/:id" component={ UcitelEdit }  />
              <PrivateRoute exact path="/ucitel" component={ UcitelList }  />
              <PrivateRoute exact path="/udalost/:id" component={ UdalostEdit }  />
              <PrivateRoute exact path="/udalost" component={ UdalostList }  />
              <PrivateRoute exact path="/uzivatel/:id" component={ UzivatelEdit }  />
              <PrivateRoute exact path="/uzivatel" component={ UzivatelList }  />
              <PrivateRoute exact path="/vyucovanie_cas/:id" component={ Vyucovanie_casEdit }  />
              <PrivateRoute exact path="/vyucovanie_cas" component={ Vyucovanie_casList }  />
              <PrivateRoute exact path="/zadania/:id" component={ ZadaniaEdit }  />
              <PrivateRoute exact path="/zadania" component={ ZadaniaList }  />
              <PrivateRoute exact path="/znamky/:id" component={ ZnamkyEdit }  />
              <PrivateRoute exact path="/znamky" component={ ZnamkyList }  />

             {/* END MY VIEWS */}

            </div>
          </Paper>
        </Fragment>
      </Switch>
    );
  }
}

export default Routes;