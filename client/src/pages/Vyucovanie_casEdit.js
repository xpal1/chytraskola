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

// Custom Actions


// START IMPORT ACTIONS
import Vyucovanie_casActions from "../redux/actions/Vyucovanie_casActions";
import RozvrhActions from "../redux/actions/RozvrhActions";

// END IMPORT ACTIONS

/** APIs

* actionsVyucovanie_cas.create
*	@description CRUD ACTION create
*
* actionsVyucovanie_cas.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsVyucovanie_cas.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsRozvrh.findBy_vyucovanie_cas
*	@description CRUD ACTION findBy_vyucovanie_cas
*	@param Objectid key - Id of model to search for
*

**/

class Vyucovanie_casEdit extends Component {
  // Init vyucovanie_cas
  constructor(props) {
    super(props);
    this.state = {
      vyucovanie_cas: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsVyucovanie_cas.loadVyucovanie_cas(this.props.match.params.id);
      this.props.actionsRozvrh.findBy_vyucovanie_cas(this.props.match.params.id);
    }
    
  }

  // Insert props vyucovanie_cas in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      vyucovanie_cas: props.vyucovanie_cas
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.vyucovanie_cas._id) {
      this.props.actionsVyucovanie_cas.saveVyucovanie_cas(this.state.vyucovanie_cas).then(data => {
        this.props.history.push("/vyucovanie_cas/");
      });
    } else {
      this.props.actionsVyucovanie_cas.createVyucovanie_cas(this.state.vyucovanie_cas).then(data => {
        this.props.history.push("/vyucovanie_cas/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Vyucovanie_cas Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="cas_od_do"
            label="Cas_od_do"
            value={this.state.vyucovanie_cas.cas_od_do || ""}
            onChange={Utils.handleChange.bind(this, "vyucovanie_cas")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="poradie_hodiny"
            label="Poradie_hodiny"
            value={this.state.vyucovanie_cas.poradie_hodiny || ""}
            onChange={Utils.handleChange.bind(this, "vyucovanie_cas")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

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

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/vyucovanie_cas/">Back to list</Link>

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
    actionsVyucovanie_cas: bindActionCreators(Vyucovanie_casActions, dispatch),
    actionsRozvrh: bindActionCreators(RozvrhActions, dispatch),
  };
};

// Validate types
Vyucovanie_casEdit.propTypes = { 
  actionsVyucovanie_cas: PropTypes.object.isRequired,
  actionsRozvrh: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    vyucovanie_cas: state.Vyucovanie_casEditReducer.vyucovanie_cas,
    listRozvrh: state.Vyucovanie_casEditReducer.listRozvrh
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vyucovanie_casEdit);
