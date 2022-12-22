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
import Spravy_archivActions from "../redux/actions/Spravy_archivActions";
import Spravy_uzivateliaActions from "../redux/actions/Spravy_uzivateliaActions";
import Spravy_skupinyActions from "../redux/actions/Spravy_skupinyActions";

// END IMPORT ACTIONS

/** APIs

* actionsSpravy_archiv.create
*	@description CRUD ACTION create
*
* actionsSpravy_archiv.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSpravy_archiv.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSpravy_uzivatelia.list
*	@description CRUD ACTION list
*
* actionsSpravy_skupiny.list
*	@description CRUD ACTION list
*

**/

class Spravy_archivEdit extends Component {
  // Init spravy_archiv
  constructor(props) {
    super(props);
    this.state = {
      spravy_archiv: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSpravy_archiv.loadSpravy_archiv(this.props.match.params.id);
    }
    
    this.props.actionsSpravy_skupiny.loadSpravy_skupinyList();
    this.props.actionsSpravy_uzivatelia.loadSpravy_uzivateliaList();
  }

  // Insert props spravy_archiv in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      spravy_archiv: props.spravy_archiv
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.spravy_archiv._id) {
      this.props.actionsSpravy_archiv.saveSpravy_archiv(this.state.spravy_archiv).then(data => {
        this.props.history.push("/spravy_archiv/");
      });
    } else {
      this.props.actionsSpravy_archiv.createSpravy_archiv(this.state.spravy_archiv).then(data => {
        this.props.history.push("/spravy_archiv/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Spravy_archiv Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum_cas"
            label="Datum_cas"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.spravy_archiv.datum_cas
                ? new Date(this.state.spravy_archiv.datum_cas)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "spravy_archiv", "datum_cas")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="prijemca"
            label="Prijemca"
            value={this.state.spravy_archiv.prijemca || ""}
            onChange={Utils.handleChange.bind(this, "spravy_archiv")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="prilohy"
            label="Prilohy"
            value={this.state.spravy_archiv.prilohy || ""}
            onChange={Utils.handleChange.bind(this, "spravy_archiv")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="skupina"
            label="Skupina"
            value={this.state.spravy_archiv.skupina || ""}
            onChange={Utils.handleChange.bind(this, "spravy_archiv")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="text"
            label="Text"
            value={this.state.spravy_archiv.text || ""}
            onChange={Utils.handleChange.bind(this, "spravy_archiv")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="uzivatel"
            label="Uzivatel"
            value={this.state.spravy_archiv.uzivatel || ""}
            onChange={Utils.handleChange.bind(this, "spravy_archiv")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation m:m _spravy_skupina with spravy_skupiny */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_spravy_skupina">_spravy_skupina</InputLabel>
            <Select
              multiple
              value={this.state.spravy_archiv._spravy_skupina || []}
              onChange={Utils.handleChangeSelect.bind(this, "spravy_archiv")}
              input={<Input id="_spravy_skupina" name="_spravy_skupina" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listSpravy_skupiny && this.props.listSpravy_skupiny.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.spravy_archiv._spravy_skupina &&
                      this.state.spravy_archiv._spravy_skupina.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _spravy_uzivatelia with spravy_uzivatelia */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_spravy_uzivatelia">_spravy_uzivatelia</InputLabel>
            <Select
              multiple
              value={this.state.spravy_archiv._spravy_uzivatelia || []}
              onChange={Utils.handleChangeSelect.bind(this, "spravy_archiv")}
              input={<Input id="_spravy_uzivatelia" name="_spravy_uzivatelia" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listSpravy_uzivatelia && this.props.listSpravy_uzivatelia.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.spravy_archiv._spravy_uzivatelia &&
                      this.state.spravy_archiv._spravy_uzivatelia.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/spravy_archiv/">Back to list</Link>

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
    actionsSpravy_archiv: bindActionCreators(Spravy_archivActions, dispatch),
    actionsSpravy_uzivatelia: bindActionCreators(Spravy_uzivateliaActions, dispatch),
    actionsSpravy_skupiny: bindActionCreators(Spravy_skupinyActions, dispatch),
  };
};

// Validate types
Spravy_archivEdit.propTypes = { 
  actionsSpravy_archiv: PropTypes.object.isRequired,
  actionsSpravy_uzivatelia: PropTypes.object.isRequired,
  actionsSpravy_skupiny: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    spravy_archiv: state.Spravy_archivEditReducer.spravy_archiv,
    listSpravy_skupiny: state.Spravy_archivEditReducer.listSpravy_skupiny,
    listSpravy_uzivatelia: state.Spravy_archivEditReducer.listSpravy_uzivatelia
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spravy_archivEdit);
