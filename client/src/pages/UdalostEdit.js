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

// Custom Actions


// START IMPORT ACTIONS
import UdalostActions from "../redux/actions/UdalostActions";

// END IMPORT ACTIONS

/** APIs

* actionsUdalost.create
*	@description CRUD ACTION create
*
* actionsUdalost.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUdalost.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class UdalostEdit extends Component {
  // Init udalost
  constructor(props) {
    super(props);
    this.state = {
      udalost: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsUdalost.loadUdalost(this.props.match.params.id);
    }
    
  }

  // Insert props udalost in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      udalost: props.udalost
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.udalost._id) {
      this.props.actionsUdalost.saveUdalost(this.state.udalost).then(data => {
        this.props.history.push("/udalost/");
      });
    } else {
      this.props.actionsUdalost.createUdalost(this.state.udalost).then(data => {
        this.props.history.push("/udalost/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Udalost Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="farba"
            label="Farba"
            value={this.state.udalost.farba || ""}
            onChange={Utils.handleChange.bind(this, "udalost")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="koniec_cas"
            label="Koniec_cas"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.udalost.koniec_cas
                ? new Date(this.state.udalost.koniec_cas)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "udalost", "koniec_cas")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="koniec_datum"
            label="Koniec_datum"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.udalost.koniec_datum
                ? new Date(this.state.udalost.koniec_datum)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "udalost", "koniec_datum")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="nazov"
            label="Nazov"
            value={this.state.udalost.nazov || ""}
            onChange={Utils.handleChange.bind(this, "udalost")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="popis"
            label="Popis"
            value={this.state.udalost.popis || ""}
            onChange={Utils.handleChange.bind(this, "udalost")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="typ"
            label="Typ"
            value={this.state.udalost.typ || ""}
            onChange={Utils.handleChange.bind(this, "udalost")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="zaciatok_cas"
            label="Zaciatok_cas"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.udalost.zaciatok_cas
                ? new Date(this.state.udalost.zaciatok_cas)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "udalost", "zaciatok_cas")}
            fullWidth
            autoOk
            disableFuture
          />
          
          <DateTimePicker
            id="zaciatok_datum"
            label="Zaciatok_datum"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.udalost.zaciatok_datum
                ? new Date(this.state.udalost.zaciatok_datum)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "udalost", "zaciatok_datum")}
            fullWidth
            autoOk
            disableFuture
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/udalost/">Back to list</Link>

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
    actionsUdalost: bindActionCreators(UdalostActions, dispatch),
  };
};

// Validate types
UdalostEdit.propTypes = { 
  actionsUdalost: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    udalost: state.UdalostEditReducer.udalost
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UdalostEdit);
