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
import TriedyActions from "../redux/actions/TriedyActions";
import ZadaniaActions from "../redux/actions/ZadaniaActions";
import UcitelActions from "../redux/actions/UcitelActions";
import StudentActions from "../redux/actions/StudentActions";
import OdboryActions from "../redux/actions/OdboryActions";
import SkupinaActions from "../redux/actions/SkupinaActions";
import PredmetyActions from "../redux/actions/PredmetyActions";
import RozvrhActions from "../redux/actions/RozvrhActions";
import DochadzkaActions from "../redux/actions/DochadzkaActions";

// END IMPORT ACTIONS

/** APIs

* actionsTriedy.create
*	@description CRUD ACTION create
*
* actionsTriedy.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsTriedy.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsZadania.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*
* actionsUcitel.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*
* actionsOdbory.list
*	@description CRUD ACTION list
*
* actionsSkupina.list
*	@description CRUD ACTION list
*
* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsUcitel.list
*	@description CRUD ACTION list
*
* actionsPredmety.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*
* actionsSkupina.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*
* actionsRozvrh.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*
* actionsDochadzka.findBy_triedy
*	@description CRUD ACTION findBy_triedy
*	@param Objectid key - Id of model to search for
*

**/

class TriedyEdit extends Component {
  // Init triedy
  constructor(props) {
    super(props);
    this.state = {
      triedy: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsTriedy.loadTriedy(this.props.match.params.id);
      this.props.actionsStudent.findBy_triedy(this.props.match.params.id);
      this.props.actionsPredmety.findBy_triedy(this.props.match.params.id);
      this.props.actionsSkupina.findBy_triedy(this.props.match.params.id);
      this.props.actionsRozvrh.findBy_triedy(this.props.match.params.id);
      this.props.actionsDochadzka.findBy_triedy(this.props.match.params.id);
      this.props.actionsUcitel.findBy_triedy(this.props.match.params.id);
      this.props.actionsZadania.findBy_triedy(this.props.match.params.id);
    }
    
    this.props.actionsOdbory.loadOdboryList();
    this.props.actionsSkupina.loadSkupinaList();
    this.props.actionsStudent.loadStudentList();
    this.props.actionsUcitel.loadUcitelList();
  }

  // Insert props triedy in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      triedy: props.triedy
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.triedy._id) {
      this.props.actionsTriedy.saveTriedy(this.state.triedy).then(data => {
        this.props.history.push("/triedy/");
      });
    } else {
      this.props.actionsTriedy.createTriedy(this.state.triedy).then(data => {
        this.props.history.push("/triedy/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Triedy Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="nazov"
            label="Nazov"
            value={this.state.triedy.nazov || ""}
            onChange={Utils.handleChange.bind(this, "triedy")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="odbor"
            label="Odbor"
            value={this.state.triedy.odbor || ""}
            onChange={Utils.handleChange.bind(this, "triedy")}
            margin="normal"
            fullWidth
          />
          
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="rocnik">
              Rocnik
            </InputLabel>
            <Select
              value={this.state.triedy.rocnik || ""}
              onChange={Utils.handleChangeSelect.bind(this, "triedy")}
              inputProps={{
                id: "rocnik",
                name: "rocnik"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"druhy"}>druhy</MenuItem>
              <MenuItem value={"prvy"}>prvy</MenuItem>
              <MenuItem value={"stvrty"}>stvrty</MenuItem>
              <MenuItem value={"treti"}>treti</MenuItem>
            </Select>
          </FormControl>
          
          <TextField
            id="skupina"
            label="Skupina"
            value={this.state.triedy.skupina || ""}
            onChange={Utils.handleChange.bind(this, "triedy")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="student"
            label="Student"
            value={this.state.triedy.student || ""}
            onChange={Utils.handleChange.bind(this, "triedy")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ucitel"
            label="Ucitel"
            value={this.state.triedy.ucitel || ""}
            onChange={Utils.handleChange.bind(this, "triedy")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="vznik_datum"
            label="Vznik_datum"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.triedy.vznik_datum
                ? new Date(this.state.triedy.vznik_datum)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "triedy", "vznik_datum")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="zanik_datum"
            label="Zanik_datum"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.triedy.zanik_datum
                ? new Date(this.state.triedy.zanik_datum)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "triedy", "zanik_datum")}
            fullWidth
            autoOk
            disableFuture
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _odbory with odbory */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_odbory">_odbory</InputLabel>
            <Select
              multiple
              value={this.state.triedy._odbory || []}
              onChange={Utils.handleChangeSelect.bind(this, "triedy")}
              input={<Input id="_odbory" name="_odbory" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listOdbory && this.props.listOdbory.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.triedy._odbory &&
                      this.state.triedy._odbory.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _skupina with skupina */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_skupina">_skupina</InputLabel>
            <Select
              multiple
              value={this.state.triedy._skupina || []}
              onChange={Utils.handleChangeSelect.bind(this, "triedy")}
              input={<Input id="_skupina" name="_skupina" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listSkupina && this.props.listSkupina.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.triedy._skupina &&
                      this.state.triedy._skupina.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m _student with student */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_student">
              _student
            </InputLabel>
            <Select
              value={this.state.triedy._student || ""}
              onChange={Utils.handleChangeSelect.bind(this, "triedy")}
              inputProps={{
                id: "_student",
                name: "_student"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listStudent && this.props.listStudent.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m _ucitel with ucitel */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_ucitel">
              _ucitel
            </InputLabel>
            <Select
              value={this.state.triedy._ucitel || ""}
              onChange={Utils.handleChangeSelect.bind(this, "triedy")}
              inputProps={{
                id: "_ucitel",
                name: "_ucitel"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listUcitel && this.props.listUcitel.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with student */}
          
          <h3>Student</h3>
          {(!this.props.listStudent || this.props.listStudent.length === 0) && 
            <div>No Student associated</div>
          }
          {this.props.listStudent &&
            this.props.listStudent.map((item, i) => {
              return (
                <Link to={"/students/" + item._id} key={item._id}>
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

          
          {/* External relation with ucitel */}
          
          <h3>Ucitel</h3>
          {(!this.props.listUcitel || this.props.listUcitel.length === 0) && 
            <div>No Ucitel associated</div>
          }
          {this.props.listUcitel &&
            this.props.listUcitel.map((item, i) => {
              return (
                <Link to={"/ucitels/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with zadania */}
          
          <h3>Zadania</h3>
          {(!this.props.listZadania || this.props.listZadania.length === 0) && 
            <div>No Zadania associated</div>
          }
          {this.props.listZadania &&
            this.props.listZadania.map((item, i) => {
              return (
                <Link to={"/zadanias/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/triedy/">Back to list</Link>

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
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
    actionsZadania: bindActionCreators(ZadaniaActions, dispatch),
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsOdbory: bindActionCreators(OdboryActions, dispatch),
    actionsSkupina: bindActionCreators(SkupinaActions, dispatch),
    actionsPredmety: bindActionCreators(PredmetyActions, dispatch),
    actionsRozvrh: bindActionCreators(RozvrhActions, dispatch),
    actionsDochadzka: bindActionCreators(DochadzkaActions, dispatch),
  };
};

// Validate types
TriedyEdit.propTypes = { 
  actionsTriedy: PropTypes.object.isRequired,
  actionsZadania: PropTypes.object.isRequired,
  actionsUcitel: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsOdbory: PropTypes.object.isRequired,
  actionsSkupina: PropTypes.object.isRequired,
  actionsPredmety: PropTypes.object.isRequired,
  actionsRozvrh: PropTypes.object.isRequired,
  actionsDochadzka: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    triedy: state.TriedyEditReducer.triedy,
    listOdbory: state.TriedyEditReducer.listOdbory,
    listSkupina: state.TriedyEditReducer.listSkupina,
    listStudent: state.TriedyEditReducer.listStudent,
    listUcitel: state.TriedyEditReducer.listUcitel,
    listStudent: state.TriedyEditReducer.listStudent,
    listPredmety: state.TriedyEditReducer.listPredmety,
    listSkupina: state.TriedyEditReducer.listSkupina,
    listRozvrh: state.TriedyEditReducer.listRozvrh,
    listDochadzka: state.TriedyEditReducer.listDochadzka,
    listUcitel: state.TriedyEditReducer.listUcitel,
    listZadania: state.TriedyEditReducer.listZadania
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriedyEdit);
