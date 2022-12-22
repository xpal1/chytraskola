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

// Custom Actions


// START IMPORT ACTIONS
import RodiciaActions from "../redux/actions/RodiciaActions";
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsRodicia.create
*	@description CRUD ACTION create
*
* actionsRodicia.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsRodicia.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsStudent.findBy_rodicia
*	@description CRUD ACTION findBy_rodicia
*	@param Objectid key - Id of model to search for
*

**/

class RodiciaEdit extends Component {
  // Init rodicia
  constructor(props) {
    super(props);
    this.state = {
      rodicia: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsRodicia.loadRodicia(this.props.match.params.id);
      this.props.actionsStudent.findBy_rodicia(this.props.match.params.id);
    }
    
    this.props.actionsStudent.loadStudentList();
  }

  // Insert props rodicia in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      rodicia: props.rodicia
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.rodicia._id) {
      this.props.actionsRodicia.saveRodicia(this.state.rodicia).then(data => {
        this.props.history.push("/rodicia/");
      });
    } else {
      this.props.actionsRodicia.createRodicia(this.state.rodicia).then(data => {
        this.props.history.push("/rodicia/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Rodicia Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum_narodenia"
            label="Datum_narodenia"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.rodicia.datum_narodenia
                ? new Date(this.state.rodicia.datum_narodenia)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "rodicia", "datum_narodenia")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.rodicia.email || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="meno"
            label="Meno"
            value={this.state.rodicia.meno || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mobil"
            label="Mobil"
            value={this.state.rodicia.mobil || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="povolanie"
            label="Povolanie"
            value={this.state.rodicia.povolanie || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="priezvisko"
            label="Priezvisko"
            value={this.state.rodicia.priezvisko || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="student"
            label="Student"
            value={this.state.rodicia.student || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="vztah_student"
            label="Vztah_student"
            value={this.state.rodicia.vztah_student || ""}
            onChange={Utils.handleChange.bind(this, "rodicia")}
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
              value={this.state.rodicia._student || ""}
              onChange={Utils.handleChangeSelect.bind(this, "rodicia")}
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
            <Link to="/rodicia/">Back to list</Link>

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
    actionsRodicia: bindActionCreators(RodiciaActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
RodiciaEdit.propTypes = { 
  actionsRodicia: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    rodicia: state.RodiciaEditReducer.rodicia,
    listStudent: state.RodiciaEditReducer.listStudent,
    listStudent: state.RodiciaEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RodiciaEdit);
