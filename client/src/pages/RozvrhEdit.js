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
import RozvrhActions from "../redux/actions/RozvrhActions";
import TriedyActions from "../redux/actions/TriedyActions";
import PredmetyActions from "../redux/actions/PredmetyActions";
import Vyucovanie_casActions from "../redux/actions/Vyucovanie_casActions";
import SkupinaActions from "../redux/actions/SkupinaActions";
import UcitelActions from "../redux/actions/UcitelActions";

// END IMPORT ACTIONS

/** APIs

* actionsRozvrh.create
*	@description CRUD ACTION create
*
* actionsRozvrh.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsRozvrh.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsTriedy.list
*	@description CRUD ACTION list
*
* actionsPredmety.list
*	@description CRUD ACTION list
*
* actionsVyucovanie_cas.list
*	@description CRUD ACTION list
*
* actionsSkupina.list
*	@description CRUD ACTION list
*
* actionsUcitel.list
*	@description CRUD ACTION list
*

**/

class RozvrhEdit extends Component {
  // Init rozvrh
  constructor(props) {
    super(props);
    this.state = {
      rozvrh: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsRozvrh.loadRozvrh(this.props.match.params.id);
    }
    
    this.props.actionsPredmety.loadPredmetyList();
    this.props.actionsSkupina.loadSkupinaList();
    this.props.actionsTriedy.loadTriedyList();
    this.props.actionsUcitel.loadUcitelList();
    this.props.actionsVyucovanie_cas.loadVyucovanie_casList();
  }

  // Insert props rozvrh in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      rozvrh: props.rozvrh
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.rozvrh._id) {
      this.props.actionsRozvrh.saveRozvrh(this.state.rozvrh).then(data => {
        this.props.history.push("/rozvrh/");
      });
    } else {
      this.props.actionsRozvrh.createRozvrh(this.state.rozvrh).then(data => {
        this.props.history.push("/rozvrh/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Rozvrh Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="cas_vyucovanie"
            label="Cas_vyucovanie"
            value={this.state.rozvrh.cas_vyucovanie || ""}
            onChange={Utils.handleChange.bind(this, "rozvrh")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="den"
            label="Den"
            value={this.state.rozvrh.den || ""}
            onChange={Utils.handleChange.bind(this, "rozvrh")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="predmet"
            label="Predmet"
            value={this.state.rozvrh.predmet || ""}
            onChange={Utils.handleChange.bind(this, "rozvrh")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="skupina"
            label="Skupina"
            value={this.state.rozvrh.skupina || ""}
            onChange={Utils.handleChange.bind(this, "rozvrh")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="trieda"
            label="Trieda"
            value={this.state.rozvrh.trieda || ""}
            onChange={Utils.handleChange.bind(this, "rozvrh")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ucitel"
            label="Ucitel"
            value={this.state.rozvrh.ucitel || ""}
            onChange={Utils.handleChange.bind(this, "rozvrh")}
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
              value={this.state.rozvrh._predmety || []}
              onChange={Utils.handleChangeSelect.bind(this, "rozvrh")}
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
                      this.state.rozvrh._predmety &&
                      this.state.rozvrh._predmety.indexOf(item._id) === -1
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
              value={this.state.rozvrh._skupina || []}
              onChange={Utils.handleChangeSelect.bind(this, "rozvrh")}
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
                      this.state.rozvrh._skupina &&
                      this.state.rozvrh._skupina.indexOf(item._id) === -1
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
              value={this.state.rozvrh._triedy || ""}
              onChange={Utils.handleChangeSelect.bind(this, "rozvrh")}
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
              value={this.state.rozvrh._ucitel || []}
              onChange={Utils.handleChangeSelect.bind(this, "rozvrh")}
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
                      this.state.rozvrh._ucitel &&
                      this.state.rozvrh._ucitel.indexOf(item._id) === -1
                        ? "regular"
                        : "bold"
                  }}
                >
                  {item._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* Relation m:m _vyucovanie_cas with vyucovanie_cas */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel htmlFor="_vyucovanie_cas">_vyucovanie_cas</InputLabel>
            <Select
              multiple
              value={this.state.rozvrh._vyucovanie_cas || []}
              onChange={Utils.handleChangeSelect.bind(this, "rozvrh")}
              input={<Input id="_vyucovanie_cas" name="_vyucovanie_cas" />}
              renderValue={selected => (
                <div>
                  {selected.map(value => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
              {this.props.listVyucovanie_cas && this.props.listVyucovanie_cas.map(item => (
                <MenuItem
                  key={item._id}
                  value={item._id}
                  style={{
                    fontWeight:
                      this.state.rozvrh._vyucovanie_cas &&
                      this.state.rozvrh._vyucovanie_cas.indexOf(item._id) === -1
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
            <Link to="/rozvrh/">Back to list</Link>

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
    actionsRozvrh: bindActionCreators(RozvrhActions, dispatch),
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
    actionsPredmety: bindActionCreators(PredmetyActions, dispatch),
    actionsVyucovanie_cas: bindActionCreators(Vyucovanie_casActions, dispatch),
    actionsSkupina: bindActionCreators(SkupinaActions, dispatch),
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
  };
};

// Validate types
RozvrhEdit.propTypes = { 
  actionsRozvrh: PropTypes.object.isRequired,
  actionsTriedy: PropTypes.object.isRequired,
  actionsPredmety: PropTypes.object.isRequired,
  actionsVyucovanie_cas: PropTypes.object.isRequired,
  actionsSkupina: PropTypes.object.isRequired,
  actionsUcitel: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    rozvrh: state.RozvrhEditReducer.rozvrh,
    listPredmety: state.RozvrhEditReducer.listPredmety,
    listSkupina: state.RozvrhEditReducer.listSkupina,
    listTriedy: state.RozvrhEditReducer.listTriedy,
    listUcitel: state.RozvrhEditReducer.listUcitel,
    listVyucovanie_cas: state.RozvrhEditReducer.listVyucovanie_cas
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RozvrhEdit);
