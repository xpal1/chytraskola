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
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

// Custom Actions


// START IMPORT ACTIONS
import ZadaniaActions from "../redux/actions/ZadaniaActions";
import SkupinaActions from "../redux/actions/SkupinaActions";
import PredmetyActions from "../redux/actions/PredmetyActions";
import TriedyActions from "../redux/actions/TriedyActions";

// END IMPORT ACTIONS

/** APIs

* actionsZadania.create
*	@description CRUD ACTION create
*
* actionsZadania.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsZadania.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSkupina.list
*	@description CRUD ACTION list
*
* actionsPredmety.list
*	@description CRUD ACTION list
*
* actionsTriedy.list
*	@description CRUD ACTION list
*
* actionsZadania.overenie
*	@description API na overenie zadania
*	@param String id - ID zadania
*	@returns Boolean
*

**/

class ZadaniaEdit extends Component {
  // Init zadania
  constructor(props) {
    super(props);
    this.state = {
      zadania: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsZadania.loadZadania(this.props.match.params.id);
    }
    
    this.props.actionsPredmety.loadPredmetyList();
    this.props.actionsSkupina.loadSkupinaList();
    this.props.actionsTriedy.loadTriedyList();
  }

  // Insert props zadania in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      zadania: props.zadania
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.zadania._id) {
      this.props.actionsZadania.saveZadania(this.state.zadania).then(data => {
        this.props.history.push("/zadania/");
      });
    } else {
      this.props.actionsZadania.createZadania(this.state.zadania).then(data => {
        this.props.history.push("/zadania/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Zadania Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum_odovzdania"
            label="Datum_odovzdania"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.zadania.datum_odovzdania
                ? new Date(this.state.zadania.datum_odovzdania)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "zadania", "datum_odovzdania")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="datum_vytvorenia"
            label="Datum_vytvorenia"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.zadania.datum_vytvorenia
                ? new Date(this.state.zadania.datum_vytvorenia)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "zadania", "datum_vytvorenia")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="nazov"
            label="Nazov"
            value={this.state.zadania.nazov || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          <FormControlLabel
            control={
              <Switch
                id="overenie"
                checked={this.state.zadania.overenie || false}
                onChange={Utils.handleChangeCheck.bind(this, "zadania", "overenie")}
                color="primary"
              />
            }
            label="overenie"
            className="mt-20"
          />
          
          
          <TextField
            id="popis"
            label="Popis"
            value={this.state.zadania.popis || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="predmet"
            label="Predmet"
            value={this.state.zadania.predmet || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="prilohy"
            label="Prilohy"
            value={this.state.zadania.prilohy || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="skupina"
            label="Skupina"
            value={this.state.zadania.skupina || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="trieda"
            label="Trieda"
            value={this.state.zadania.trieda || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="typ"
            label="Typ"
            value={this.state.zadania.typ || ""}
            onChange={Utils.handleChange.bind(this, "zadania")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m _predmety with predmety */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_predmety">
              _predmety
            </InputLabel>
            <Select
              value={this.state.zadania._predmety || ""}
              onChange={Utils.handleChangeSelect.bind(this, "zadania")}
              inputProps={{
                id: "_predmety",
                name: "_predmety"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listPredmety && this.props.listPredmety.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* Relation 1:m _skupina with skupina */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="_skupina">
              _skupina
            </InputLabel>
            <Select
              value={this.state.zadania._skupina || ""}
              onChange={Utils.handleChangeSelect.bind(this, "zadania")}
              inputProps={{
                id: "_skupina",
                name: "_skupina"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listSkupina && this.props.listSkupina.map(row => (
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
              value={this.state.zadania._triedy || ""}
              onChange={Utils.handleChangeSelect.bind(this, "zadania")}
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
          
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/zadania/">Back to list</Link>

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
    actionsZadania: bindActionCreators(ZadaniaActions, dispatch),
    actionsSkupina: bindActionCreators(SkupinaActions, dispatch),
    actionsPredmety: bindActionCreators(PredmetyActions, dispatch),
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
  };
};

// Validate types
ZadaniaEdit.propTypes = { 
  actionsZadania: PropTypes.object.isRequired,
  actionsSkupina: PropTypes.object.isRequired,
  actionsPredmety: PropTypes.object.isRequired,
  actionsTriedy: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    zadania: state.ZadaniaEditReducer.zadania,
    listPredmety: state.ZadaniaEditReducer.listPredmety,
    listSkupina: state.ZadaniaEditReducer.listSkupina,
    listTriedy: state.ZadaniaEditReducer.listTriedy
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZadaniaEdit);
