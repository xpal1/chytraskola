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
import StudentActions from "../redux/actions/StudentActions";
import ZadaniaActions from "../redux/actions/ZadaniaActions";
import UzivatelActions from "../redux/actions/UzivatelActions";
import RodiciaActions from "../redux/actions/RodiciaActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.create
*	@description CRUD ACTION create
*
* actionsStudent.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsStudent.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsZadania.list
*	@description CRUD ACTION list
*
* actionsUzivatel.list
*	@description CRUD ACTION list
*
* actionsRodicia.findBy_student
*	@description CRUD ACTION findBy_student
*	@param Objectid key - Id of model to search for
*
* actionsRodicia.list
*	@description CRUD ACTION list
*

**/

class StudentEdit extends Component {
  // Init student
  constructor(props) {
    super(props);
    this.state = {
      student: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsStudent.loadStudent(this.props.match.params.id);
      this.props.actionsRodicia.findBy_student(this.props.match.params.id);
      this.props.actionsSkupina.findBy_student(this.props.match.params.id);
      this.props.actionsDochadzka.findBy_student(this.props.match.params.id);
      this.props.actionsTriedy.findBy_student(this.props.match.params.id);
    }
    
    this.props.actionsDochadzka.loadDochadzkaList();
    this.props.actionsOdbory.loadOdboryList();
    this.props.actionsRodicia.loadRodiciaList();
    this.props.actionsSkupina.loadSkupinaList();
    this.props.actionsTriedy.loadTriedyList();
    this.props.actionsUzivatel.loadUzivatelList();
  }

  // Insert props student in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      student: props.student
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.student._id) {
      this.props.actionsStudent.saveStudent(this.state.student).then(data => {
        this.props.history.push("/student/");
      });
    } else {
      this.props.actionsStudent.createStudent(this.state.student).then(data => {
        this.props.history.push("/student/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Student Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="adresa"
            label="Adresa"
            value={this.state.student.adresa || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="datum_narodenia"
            label="Datum_narodenia"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.student.datum_narodenia
                ? new Date(this.state.student.datum_narodenia)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "student", "datum_narodenia")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.student.email || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="fotografia"
            label="Fotografia"
            value={this.state.student.fotografia || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="meno"
            label="Meno"
            value={this.state.student.meno || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.student.meno && this.state.student.meno === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="mobil"
            label="Mobil"
            value={this.state.student.mobil || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="odbor"
            label="Odbor"
            value={this.state.student.odbor || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="pohlavie">
              Pohlavie
            </InputLabel>
            <Select
              value={this.state.student.pohlavie || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
            id="priezvisko"
            label="Priezvisko"
            value={this.state.student.priezvisko || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.student.priezvisko && this.state.student.priezvisko === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="skupina"
            label="Skupina"
            value={this.state.student.skupina || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="trieda"
            label="Trieda"
            value={this.state.student.trieda || ""}
            onChange={Utils.handleChange.bind(this, "student")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _dochazka with dochadzka */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_dochazka">
              _dochazka
            </InputLabel>
            <Select
              value={this.state.student._dochazka || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              inputProps={{
                id: "_dochazka",
                name: "_dochazka"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listDochadzka && this.props.listDochadzka.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m _odbory with odbory */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_odbory">_odbory</InputLabel>
            <Select
              multiple
              value={this.state.student._odbory || []}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
                      this.state.student._odbory &&
                      this.state.student._odbory.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m _rodicia with rodicia */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_rodicia">
              _rodicia
            </InputLabel>
            <Select
              value={this.state.student._rodicia || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              inputProps={{
                id: "_rodicia",
                name: "_rodicia"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listRodicia && this.props.listRodicia.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m _skupina with skupina */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_skupina">_skupina</InputLabel>
            <Select
              multiple
              value={this.state.student._skupina || []}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
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
                      this.state.student._skupina &&
                      this.state.student._skupina.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation 1:m _triedy with triedy */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_triedy">
              _triedy
            </InputLabel>
            <Select
              value={this.state.student._triedy || ""}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              inputProps={{
                id: "_triedy",
                name: "_triedy"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listTriedy && this.props.listTriedy.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation m:m _uzivatel with uzivatel */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_uzivatel">_uzivatel</InputLabel>
            <Select
              multiple
              value={this.state.student._uzivatel || []}
              onChange={Utils.handleChangeSelect.bind(this, "student")}
              input={<Input id="_uzivatel" name="_uzivatel" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listUzivatel && this.props.listUzivatel.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.student._uzivatel &&
                      this.state.student._uzivatel.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with rodicia */}
          
          <h3>Rodicia</h3>
          {(!this.props.listRodicia || this.props.listRodicia.length === 0) && 
            <div>No Rodicia associated</div>
          }
          {this.props.listRodicia &&
            this.props.listRodicia.map((item, i) => {
              return (
                <Link to={"/rodicias/" + item._id} key={item._id}>
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/student/">Back to list</Link>

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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsZadania: bindActionCreators(ZadaniaActions, dispatch),
    actionsUzivatel: bindActionCreators(UzivatelActions, dispatch),
    actionsRodicia: bindActionCreators(RodiciaActions, dispatch),
  };
};

// Validate types
StudentEdit.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
  actionsZadania: PropTypes.object.isRequired,
  actionsUzivatel: PropTypes.object.isRequired,
  actionsRodicia: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    student: state.StudentEditReducer.student,
    listDochadzka: state.StudentEditReducer.listDochadzka,
    listOdbory: state.StudentEditReducer.listOdbory,
    listRodicia: state.StudentEditReducer.listRodicia,
    listSkupina: state.StudentEditReducer.listSkupina,
    listTriedy: state.StudentEditReducer.listTriedy,
    listUzivatel: state.StudentEditReducer.listUzivatel,
    listRodicia: state.StudentEditReducer.listRodicia,
    listSkupina: state.StudentEditReducer.listSkupina,
    listDochadzka: state.StudentEditReducer.listDochadzka,
    listTriedy: state.StudentEditReducer.listTriedy
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentEdit);
