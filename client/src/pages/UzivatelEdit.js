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
import UzivatelActions from "../redux/actions/UzivatelActions";
import UcitelActions from "../redux/actions/UcitelActions";
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsUzivatel.create
*	@description CRUD ACTION create
*
* actionsUzivatel.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUzivatel.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsUcitel.findBy_uzivatel
*	@description CRUD ACTION findBy_uzivatel
*	@param Objectid key - Id of model to search for
*
* actionsStudent.findBy_uzivatel
*	@description CRUD ACTION findBy_uzivatel
*	@param Objectid key - Id of model to search for
*

**/

class UzivatelEdit extends Component {
  // Init uzivatel
  constructor(props) {
    super(props);
    this.state = {
      uzivatel: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsUzivatel.loadUzivatel(this.props.match.params.id);
      this.props.actionsUcitel.findBy_uzivatel(this.props.match.params.id);
      this.props.actionsStudent.findBy_uzivatel(this.props.match.params.id);
    }
    
  }

  // Insert props uzivatel in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      uzivatel: props.uzivatel
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.uzivatel._id) {
      this.props.actionsUzivatel.saveUzivatel(this.state.uzivatel).then(data => {
        this.props.history.push("/uzivatel/");
      });
    } else {
      this.props.actionsUzivatel.createUzivatel(this.state.uzivatel).then(data => {
        this.props.history.push("/uzivatel/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Uzivatel Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum_aktualizacia"
            label="Datum_aktualizacia"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.uzivatel.datum_aktualizacia
                ? new Date(this.state.uzivatel.datum_aktualizacia)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "uzivatel", "datum_aktualizacia")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="datum_vznik"
            label="Datum_vznik"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.uzivatel.datum_vznik
                ? new Date(this.state.uzivatel.datum_vznik)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "uzivatel", "datum_vznik")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="heslo"
            label="Heslo"
            value={this.state.uzivatel.heslo || ""}
            onChange={Utils.handleChange.bind(this, "uzivatel")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.uzivatel.heslo && this.state.uzivatel.heslo === ""
              ? { error: true }
              : {})}
          />
          
          
          <TextField
            id="meno"
            label="Meno"
            value={this.state.uzivatel.meno || ""}
            onChange={Utils.handleChange.bind(this, "uzivatel")}
            margin="normal"
            fullWidth
            required
            {...(!this.state.uzivatel.meno && this.state.uzivatel.meno === ""
              ? { error: true }
              : {})}
          />
          
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="rola">
              Rola
            </InputLabel>
            <Select
              value={this.state.uzivatel.rola || ""}
              onChange={Utils.handleChangeSelect.bind(this, "uzivatel")}
              inputProps={{
                id: "rola",
                name: "rola"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"rodic"}>rodic</MenuItem>
              <MenuItem value={"student"}>student</MenuItem>
              <MenuItem value={"ucitel"}>ucitel</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel shrink htmlFor="status">
              Status
            </InputLabel>
            <Select
              value={this.state.uzivatel.status || ""}
              onChange={Utils.handleChangeSelect.bind(this, "uzivatel")}
              inputProps={{
                id: "status",
                name: "status"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"aktivny"}>aktivny</MenuItem>
              <MenuItem value={"neaktivny"}>neaktivny</MenuItem>
            </Select>
          </FormControl>
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
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
            <Link to="/uzivatel/">Back to list</Link>

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
    actionsUzivatel: bindActionCreators(UzivatelActions, dispatch),
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
UzivatelEdit.propTypes = { 
  actionsUzivatel: PropTypes.object.isRequired,
  actionsUcitel: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    uzivatel: state.UzivatelEditReducer.uzivatel,
    listUcitel: state.UzivatelEditReducer.listUcitel,
    listStudent: state.UzivatelEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UzivatelEdit);
