// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DateTimePicker } from "material-ui-pickers";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import UcitelActions from "../redux/actions/UcitelActions";
import PredmetyActions from "../redux/actions/PredmetyActions";
import UzivatelActions from "../redux/actions/UzivatelActions";
import TriedyActions from "../redux/actions/TriedyActions";
import SkupinaActions from "../redux/actions/SkupinaActions";
import RozvrhActions from "../redux/actions/RozvrhActions";
import DochadzkaActions from "../redux/actions/DochadzkaActions";

// END IMPORT ACTIONS

/** APIs

* actionsUcitel.create
*	@description CRUD ACTION create
*
* actionsUcitel.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUcitel.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsPredmety.list
*	@description CRUD ACTION list
*
* actionsUzivatel.list
*	@description CRUD ACTION list
*
* actionsTriedy.list
*	@description CRUD ACTION list
*
* actionsTriedy.findBy_ucitel
*	@description CRUD ACTION findBy_ucitel
*	@param Objectid key - Id of model to search for
*
* actionsPredmety.findBy_ucitel
*	@description CRUD ACTION findBy_ucitel
*	@param Objectid key - Id of model to search for
*
* actionsSkupina.findBy_ucitel
*	@description CRUD ACTION findBy_ucitel
*	@param Objectid key - Id of model to search for
*
* actionsRozvrh.findBy_ucitel
*	@description CRUD ACTION findBy_ucitel
*	@param Objectid key - Id of model to search for
*
* actionsDochadzka.findBy_ucitel
*	@description CRUD ACTION findBy_ucitel
*	@param Objectid key - Id of model to search for
*

**/

class UcitelEdit extends Component {
  // Init ucitel
  constructor(props) {
    super(props);
    this.state = {
      ucitel: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsUcitel.loadUcitel(this.props.match.params.id);
      this.props.actionsTriedy.findBy_ucitel(this.props.match.params.id);
      this.props.actionsPredmety.findBy_ucitel(this.props.match.params.id);
      this.props.actionsSkupina.findBy_ucitel(this.props.match.params.id);
      this.props.actionsRozvrh.findBy_ucitel(this.props.match.params.id);
      this.props.actionsDochadzka.findBy_ucitel(this.props.match.params.id);
    }
    
    this.props.actionsPredmety.loadPredmetyList();
    this.props.actionsTriedy.loadTriedyList();
    this.props.actionsUzivatel.loadUzivatelList();
  }

  // Insert props ucitel in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      ucitel: props.ucitel
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.ucitel._id) {
      this.props.actionsUcitel.saveUcitel(this.state.ucitel).then(data => {
        this.props.history.push("/ucitel/");
      });
    } else {
      this.props.actionsUcitel.createUcitel(this.state.ucitel).then(data => {
        this.props.history.push("/ucitel/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Ucitel Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="adresa"
            label="Adresa"
            value={this.state.ucitel.adresa || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="datum_nastup"
            label="Datum_nastup"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.ucitel.datum_nastup
                ? new Date(this.state.ucitel.datum_nastup)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "ucitel", "datum_nastup")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="datum_odchod"
            label="Datum_odchod"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.ucitel.datum_odchod
                ? new Date(this.state.ucitel.datum_odchod)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "ucitel", "datum_odchod")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.ucitel.email || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="meno"
            label="Meno"
            value={this.state.ucitel.meno || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.ucitel.meno && this.state.ucitel.meno === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="mobil"
            label="Mobil"
            value={this.state.ucitel.mobil || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="pohlavie">
              Pohlavie
            </InputLabel>
            <Select
              value={this.state.ucitel.pohlavie || ""}
              onChange={Utils.handleChangeSelect.bind(this, "ucitel")}
              inputProps={{
                id: "pohlavie",
                name: "pohlavie"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"muz"}>muz</MenuItem>
              <MenuItem value={"zena"}>zena</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            id="predmety"
            label="Predmety"
            value={this.state.ucitel.predmety || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="priezvisko"
            label="Priezvisko"
            value={this.state.ucitel.priezvisko || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.ucitel.priezvisko && this.state.ucitel.priezvisko === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="titul"
            label="Titul"
            value={this.state.ucitel.titul || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="trieda"
            label="Trieda"
            value={this.state.ucitel.trieda || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="zameranie"
            label="Zameranie"
            value={this.state.ucitel.zameranie || ""}
            onChange={Utils.handleChange.bind(this, "ucitel")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _predmety with predmety */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_predmety">_predmety</InputLabel>
            <Select
              multiple
              value={this.state.ucitel._predmety || []}
              onChange={Utils.handleChangeSelect.bind(this, "ucitel")}
              input={<Input id="_predmety" name="_predmety" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listPredmety && this.props.listPredmety.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.ucitel._predmety &&
                      this.state.ucitel._predmety.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _triedy with triedy */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_triedy">_triedy</InputLabel>
            <Select
              multiple
              value={this.state.ucitel._triedy || []}
              onChange={Utils.handleChangeSelect.bind(this, "ucitel")}
              input={<Input id="_triedy" name="_triedy" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listTriedy && this.props.listTriedy.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.ucitel._triedy &&
                      this.state.ucitel._triedy.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m _uzivatel with uzivatel */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_uzivatel">
              _uzivatel
            </InputLabel>
            <Select
              value={this.state.ucitel._uzivatel || ""}
              onChange={Utils.handleChangeSelect.bind(this, "ucitel")}
              inputProps={{
                id: "_uzivatel",
                name: "_uzivatel"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUzivatel && this.props.listUzivatel.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with triedy */}
          
          <h3>Triedy</h3>
          {(!this.props.listTriedy || this.props.listTriedy.length === 0) && 
            <div>No Triedy associated</div>
          }
          {this.props.listTriedy &&
            this.props.listTriedy.map((item, i) => {
              return (
                <Link to={"/triedys/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with predmety */}
          
          <h3>Predmety</h3>
          {(!this.props.listPredmety || this.props.listPredmety.length === 0) && 
            <div>No Predmety associated</div>
          }
          {this.props.listPredmety &&
            this.props.listPredmety.map((item, i) => {
              return (
                <Link to={"/predmetys/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with skupina */}
          
          <h3>Skupina</h3>
          {(!this.props.listSkupina || this.props.listSkupina.length === 0) && 
            <div>No Skupina associated</div>
          }
          {this.props.listSkupina &&
            this.props.listSkupina.map((item, i) => {
              return (
                <Link to={"/skupinas/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with rozvrh */}
          
          <h3>Rozvrh</h3>
          {(!this.props.listRozvrh || this.props.listRozvrh.length === 0) && 
            <div>No Rozvrh associated</div>
          }
          {this.props.listRozvrh &&
            this.props.listRozvrh.map((item, i) => {
              return (
                <Link to={"/rozvrhs/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with dochadzka */}
          
          <h3>Dochadzka</h3>
          {(!this.props.listDochadzka || this.props.listDochadzka.length === 0) && 
            <div>No Dochadzka associated</div>
          }
          {this.props.listDochadzka &&
            this.props.listDochadzka.map((item, i) => {
              return (
                <Link to={"/dochadzkas/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/ucitel/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
    actionsPredmety: bindActionCreators(PredmetyActions, dispatch),
    actionsUzivatel: bindActionCreators(UzivatelActions, dispatch),
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
    actionsSkupina: bindActionCreators(SkupinaActions, dispatch),
    actionsRozvrh: bindActionCreators(RozvrhActions, dispatch),
    actionsDochadzka: bindActionCreators(DochadzkaActions, dispatch),
  };
};

// Validate types
UcitelEdit.propTypes = { 
  actionsUcitel: PropTypes.object.isRequired,
  actionsPredmety: PropTypes.object.isRequired,
  actionsUzivatel: PropTypes.object.isRequired,
  actionsTriedy: PropTypes.object.isRequired,
  actionsSkupina: PropTypes.object.isRequired,
  actionsRozvrh: PropTypes.object.isRequired,
  actionsDochadzka: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    ucitel: state.UcitelEditReducer.ucitel,
    listPredmety: state.UcitelEditReducer.listPredmety,
    listTriedy: state.UcitelEditReducer.listTriedy,
    listUzivatel: state.UcitelEditReducer.listUzivatel,
    listTriedy: state.UcitelEditReducer.listTriedy,
    listPredmety: state.UcitelEditReducer.listPredmety,
    listSkupina: state.UcitelEditReducer.listSkupina,
    listRozvrh: state.UcitelEditReducer.listRozvrh,
    listDochadzka: state.UcitelEditReducer.listDochadzka
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UcitelEdit);
