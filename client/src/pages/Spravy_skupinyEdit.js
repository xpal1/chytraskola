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
import Spravy_skupinyActions from "../redux/actions/Spravy_skupinyActions";
import SkupinaActions from "../redux/actions/SkupinaActions";
import Spravy_archivActions from "../redux/actions/Spravy_archivActions";

// END IMPORT ACTIONS

/** APIs

* actionsSpravy_skupiny.create
*	@description CRUD ACTION create
*
* actionsSpravy_skupiny.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSpravy_skupiny.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSkupina.list
*	@description CRUD ACTION list
*
* actionsSpravy_archiv.findBy_spravy_skupina
*	@description CRUD ACTION findBy_spravy_skupina
*	@param Objectid key - Id of model to search for
*

**/

class Spravy_skupinyEdit extends Component {
  // Init spravy_skupiny
  constructor(props) {
    super(props);
    this.state = {
      spravy_skupiny: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSpravy_skupiny.loadSpravy_skupiny(this.props.match.params.id);
      this.props.actionsSpravy_archiv.findBy_spravy_skupina(this.props.match.params.id);
    }
    
    this.props.actionsSkupina.loadSkupinaList();
  }

  // Insert props spravy_skupiny in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      spravy_skupiny: props.spravy_skupiny
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.spravy_skupiny._id) {
      this.props.actionsSpravy_skupiny.saveSpravy_skupiny(this.state.spravy_skupiny).then(data => {
        this.props.history.push("/spravy_skupiny/");
      });
    } else {
      this.props.actionsSpravy_skupiny.createSpravy_skupiny(this.state.spravy_skupiny).then(data => {
        this.props.history.push("/spravy_skupiny/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Spravy_skupiny Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum_cas"
            label="Datum_cas"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.spravy_skupiny.datum_cas
                ? new Date(this.state.spravy_skupiny.datum_cas)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "spravy_skupiny", "datum_cas")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="prilohy"
            label="Prilohy"
            value={this.state.spravy_skupiny.prilohy || ""}
            onChange={Utils.handleChange.bind(this, "spravy_skupiny")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="skupina"
            label="Skupina"
            value={this.state.spravy_skupiny.skupina || ""}
            onChange={Utils.handleChange.bind(this, "spravy_skupiny")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="text"
            label="Text"
            value={this.state.spravy_skupiny.text || ""}
            onChange={Utils.handleChange.bind(this, "spravy_skupiny")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _skupina with skupina */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_skupina">_skupina</InputLabel>
            <Select
              multiple
              value={this.state.spravy_skupiny._skupina || []}
              onChange={Utils.handleChangeSelect.bind(this, "spravy_skupiny")}
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
                      this.state.spravy_skupiny._skupina &&
                      this.state.spravy_skupiny._skupina.indexOf(item._id) === -1
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
          
          {/* External relation with spravy_archiv */}
          
          <h3>Spravy_archiv</h3>
          {(!this.props.listSpravy_archiv || this.props.listSpravy_archiv.length === 0) && 
            <div>No Spravy_archiv associated</div>
          }
          {this.props.listSpravy_archiv &&
            this.props.listSpravy_archiv.map((item, i) => {
              return (
                <Link to={"/spravy_archivs/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/spravy_skupiny/">Back to list</Link>

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
    actionsSpravy_skupiny: bindActionCreators(Spravy_skupinyActions, dispatch),
    actionsSkupina: bindActionCreators(SkupinaActions, dispatch),
    actionsSpravy_archiv: bindActionCreators(Spravy_archivActions, dispatch),
  };
};

// Validate types
Spravy_skupinyEdit.propTypes = { 
  actionsSpravy_skupiny: PropTypes.object.isRequired,
  actionsSkupina: PropTypes.object.isRequired,
  actionsSpravy_archiv: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    spravy_skupiny: state.Spravy_skupinyEditReducer.spravy_skupiny,
    listSkupina: state.Spravy_skupinyEditReducer.listSkupina,
    listSpravy_archiv: state.Spravy_skupinyEditReducer.listSpravy_archiv
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spravy_skupinyEdit);
