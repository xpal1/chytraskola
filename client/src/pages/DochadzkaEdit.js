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
import DochadzkaActions from "../redux/actions/DochadzkaActions";
import StudentActions from "../redux/actions/StudentActions";
import PredmetyActions from "../redux/actions/PredmetyActions";
import UcitelActions from "../redux/actions/UcitelActions";
import TriedyActions from "../redux/actions/TriedyActions";

// END IMPORT ACTIONS

/** APIs

* actionsDochadzka.create
*	@description CRUD ACTION create
*
* actionsDochadzka.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsDochadzka.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBy_dochazka
*	@description CRUD ACTION findBy_dochazka
*	@param Objectid key - Id of model to search for
*
* actionsPredmety.list
*	@description CRUD ACTION list
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

**/

class DochadzkaEdit extends Component {
  // Init dochadzka
  constructor(props) {
    super(props);
    this.state = {
      dochadzka: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsDochadzka.loadDochadzka(this.props.match.params.id);
      this.props.actionsStudent.findBy_dochazka(this.props.match.params.id);
    }
    
    this.props.actionsPredmety.loadPredmetyList();
    this.props.actionsStudent.loadStudentList();
    this.props.actionsTriedy.loadTriedyList();
    this.props.actionsUcitel.loadUcitelList();
  }

  // Insert props dochadzka in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      dochadzka: props.dochadzka
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.dochadzka._id) {
      this.props.actionsDochadzka.saveDochadzka(this.state.dochadzka).then(data => {
        this.props.history.push("/dochadzka/");
      });
    } else {
      this.props.actionsDochadzka.createDochadzka(this.state.dochadzka).then(data => {
        this.props.history.push("/dochadzka/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Dochadzka Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum"
            label="Datum"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.dochadzka.datum
                ? new Date(this.state.dochadzka.datum)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "dochadzka", "datum")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="predmet"
            label="Predmet"
            value={this.state.dochadzka.predmet || ""}
            onChange={Utils.handleChange.bind(this, "dochadzka")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="status"
            label="Status"
            value={this.state.dochadzka.status || ""}
            onChange={Utils.handleChange.bind(this, "dochadzka")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="student"
            label="Student"
            value={this.state.dochadzka.student || ""}
            onChange={Utils.handleChange.bind(this, "dochadzka")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="trieda"
            label="Trieda"
            value={this.state.dochadzka.trieda || ""}
            onChange={Utils.handleChange.bind(this, "dochadzka")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ucitel"
            label="Ucitel"
            value={this.state.dochadzka.ucitel || ""}
            onChange={Utils.handleChange.bind(this, "dochadzka")}
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
              value={this.state.dochadzka._predmety || []}
              onChange={Utils.handleChangeSelect.bind(this, "dochadzka")}
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
                      this.state.dochadzka._predmety &&
                      this.state.dochadzka._predmety.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _student with student */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_student">_student</InputLabel>
            <Select
              multiple
              value={this.state.dochadzka._student || []}
              onChange={Utils.handleChangeSelect.bind(this, "dochadzka")}
              input={<Input id="_student" name="_student" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listStudent && this.props.listStudent.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.dochadzka._student &&
                      this.state.dochadzka._student.indexOf(item._id) === -1
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
              value={this.state.dochadzka._triedy || []}
              onChange={Utils.handleChangeSelect.bind(this, "dochadzka")}
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
                      this.state.dochadzka._triedy &&
                      this.state.dochadzka._triedy.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _ucitel with ucitel */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_ucitel">_ucitel</InputLabel>
            <Select
              multiple
              value={this.state.dochadzka._ucitel || []}
              onChange={Utils.handleChangeSelect.bind(this, "dochadzka")}
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
                      this.state.dochadzka._ucitel &&
                      this.state.dochadzka._ucitel.indexOf(item._id) === -1
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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/dochadzka/">Back to list</Link>

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
    actionsDochadzka: bindActionCreators(DochadzkaActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsPredmety: bindActionCreators(PredmetyActions, dispatch),
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
  };
};

// Validate types
DochadzkaEdit.propTypes = { 
  actionsDochadzka: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsPredmety: PropTypes.object.isRequired,
  actionsUcitel: PropTypes.object.isRequired,
  actionsTriedy: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    dochadzka: state.DochadzkaEditReducer.dochadzka,
    listPredmety: state.DochadzkaEditReducer.listPredmety,
    listStudent: state.DochadzkaEditReducer.listStudent,
    listTriedy: state.DochadzkaEditReducer.listTriedy,
    listUcitel: state.DochadzkaEditReducer.listUcitel,
    listStudent: state.DochadzkaEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DochadzkaEdit);
