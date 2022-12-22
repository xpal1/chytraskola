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
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";

// Custom Actions


// START IMPORT ACTIONS
import SkupinaActions from "../redux/actions/SkupinaActions";
import ZadaniaActions from "../redux/actions/ZadaniaActions";
import StudentActions from "../redux/actions/StudentActions";
import TriedyActions from "../redux/actions/TriedyActions";
import UcitelActions from "../redux/actions/UcitelActions";
import RozvrhActions from "../redux/actions/RozvrhActions";
import Spravy_skupinyActions from "../redux/actions/Spravy_skupinyActions";

// END IMPORT ACTIONS

/** APIs

* actionsSkupina.create
*	@description CRUD ACTION create
*
* actionsSkupina.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSkupina.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsZadania.findBy_skupina
*	@description CRUD ACTION findBy_skupina
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findBy_skupina
*	@description CRUD ACTION findBy_skupina
*	@param Objectid key - Id of model to search for
*
* actionsTriedy.findBy_skupina
*	@description CRUD ACTION findBy_skupina
*	@param Objectid key - Id of model to search for
*
* actionsUcitel.list
*	@description CRUD ACTION list
*
* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsTriedy.list
*	@description CRUD ACTION list
*
* actionsRozvrh.findBy_skupina
*	@description CRUD ACTION findBy_skupina
*	@param Objectid key - Id of model to search for
*
* actionsSpravy_skupiny.findBy_skupina
*	@description CRUD ACTION findBy_skupina
*	@param Objectid key - Id of model to search for
*

**/

class SkupinaEdit extends Component {
  // Init skupina
  constructor(props) {
    super(props);
    this.state = {
      skupina: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSkupina.loadSkupina(this.props.match.params.id);
      this.props.actionsRozvrh.findBy_skupina(this.props.match.params.id);
      this.props.actionsSpravy_skupiny.findBy_skupina(this.props.match.params.id);
      this.props.actionsTriedy.findBy_skupina(this.props.match.params.id);
      this.props.actionsStudent.findBy_skupina(this.props.match.params.id);
      this.props.actionsZadania.findBy_skupina(this.props.match.params.id);
    }
    
    this.props.actionsStudent.loadStudentList();
    this.props.actionsTriedy.loadTriedyList();
    this.props.actionsUcitel.loadUcitelList();
  }

  // Insert props skupina in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      skupina: props.skupina
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.skupina._id) {
      this.props.actionsSkupina.saveSkupina(this.state.skupina).then(data => {
        this.props.history.push("/skupina/");
      });
    } else {
      this.props.actionsSkupina.createSkupina(this.state.skupina).then(data => {
        this.props.history.push("/skupina/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Skupina Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="nazov"
            label="Nazov"
            value={this.state.skupina.nazov || ""}
            onChange={Utils.handleChange.bind(this, "skupina")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="student"
            label="Student"
            value={this.state.skupina.student || ""}
            onChange={Utils.handleChange.bind(this, "skupina")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="trieda"
            label="Trieda"
            value={this.state.skupina.trieda || ""}
            onChange={Utils.handleChange.bind(this, "skupina")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ucitel"
            label="Ucitel"
            value={this.state.skupina.ucitel || ""}
            onChange={Utils.handleChange.bind(this, "skupina")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _student with student */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_student">
              _student
            </InputLabel>
            <Select
              value={this.state.skupina._student || ""}
              onChange={Utils.handleChangeSelect.bind(this, "skupina")}
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
          
          
          {/* Relation 1:m _triedy with triedy */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_triedy">
              _triedy
            </InputLabel>
            <Select
              value={this.state.skupina._triedy || ""}
              onChange={Utils.handleChangeSelect.bind(this, "skupina")}
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
          
          
          {/* Relation m:m _ucitel with ucitel */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_ucitel">_ucitel</InputLabel>
            <Select
              multiple
              value={this.state.skupina._ucitel || []}
              onChange={Utils.handleChangeSelect.bind(this, "skupina")}
              input={<Input id="_ucitel" name="_ucitel" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listUcitel && this.props.listUcitel.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.skupina._ucitel &&
                      this.state.skupina._ucitel.indexOf(item._id) === -1
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

          
          {/* External relation with spravy_skupiny */}
          
          <h3>Spravy_skupiny</h3>
          {(!this.props.listSpravy_skupiny || this.props.listSpravy_skupiny.length === 0) && 
            <div>No Spravy_skupiny associated</div>
          }
          {this.props.listSpravy_skupiny &&
            this.props.listSpravy_skupiny.map((item, i) => {
              return (
                <Link to={"/spravy_skupinys/" + item._id} key={item._id}>
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
            <Link to="/skupina/">Back to list</Link>

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
    actionsSkupina: bindActionCreators(SkupinaActions, dispatch),
    actionsZadania: bindActionCreators(ZadaniaActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
    actionsRozvrh: bindActionCreators(RozvrhActions, dispatch),
    actionsSpravy_skupiny: bindActionCreators(Spravy_skupinyActions, dispatch),
  };
};

// Validate types
SkupinaEdit.propTypes = { 
  actionsSkupina: PropTypes.object.isRequired,
  actionsZadania: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsTriedy: PropTypes.object.isRequired,
  actionsUcitel: PropTypes.object.isRequired,
  actionsRozvrh: PropTypes.object.isRequired,
  actionsSpravy_skupiny: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    skupina: state.SkupinaEditReducer.skupina,
    listStudent: state.SkupinaEditReducer.listStudent,
    listTriedy: state.SkupinaEditReducer.listTriedy,
    listUcitel: state.SkupinaEditReducer.listUcitel,
    listRozvrh: state.SkupinaEditReducer.listRozvrh,
    listSpravy_skupiny: state.SkupinaEditReducer.listSpravy_skupiny,
    listTriedy: state.SkupinaEditReducer.listTriedy,
    listStudent: state.SkupinaEditReducer.listStudent,
    listZadania: state.SkupinaEditReducer.listZadania
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkupinaEdit);
