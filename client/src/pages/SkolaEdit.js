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
import SkolaActions from "../redux/actions/SkolaActions";

// END IMPORT ACTIONS

/** APIs

* actionsSkola.create
*	@description CRUD ACTION create
*
* actionsSkola.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSkola.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class SkolaEdit extends Component {
  // Init skola
  constructor(props) {
    super(props);
    this.state = {
      skola: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSkola.loadSkola(this.props.match.params.id);
    }
    
  }

  // Insert props skola in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      skola: props.skola
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.skola._id) {
      this.props.actionsSkola.saveSkola(this.state.skola).then(data => {
        this.props.history.push("/skola/");
      });
    } else {
      this.props.actionsSkola.createSkola(this.state.skola).then(data => {
        this.props.history.push("/skola/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Skola Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="adresa"
            label="Adresa"
            value={this.state.skola.adresa || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          <DateTimePicker
            id="datum_zalozenia"
            label="Datum_zalozenia"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.skola.datum_zalozenia
                ? new Date(this.state.skola.datum_zalozenia)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "skola", "datum_zalozenia")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="dic"
            label="Dic"
            value={this.state.skola.dic || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="email"
            label="Email"
            value={this.state.skola.email || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="facebook"
            label="Facebook"
            value={this.state.skola.facebook || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ico"
            label="Ico"
            value={this.state.skola.ico || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="instagram"
            label="Instagram"
            value={this.state.skola.instagram || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="logo"
            label="Logo"
            value={this.state.skola.logo || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="mobil"
            label="Mobil"
            value={this.state.skola.mobil || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="nazov"
            label="Nazov"
            value={this.state.skola.nazov || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="riaditel"
            label="Riaditel"
            value={this.state.skola.riaditel || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="veduca_sj"
            label="Veduca_sj"
            value={this.state.skola.veduca_sj || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="web"
            label="Web"
            value={this.state.skola.web || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="zastupca_riaditela"
            label="Zastupca_riaditela"
            value={this.state.skola.zastupca_riaditela || ""}
            onChange={Utils.handleChange.bind(this, "skola")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/skola/">Back to list</Link>

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
    actionsSkola: bindActionCreators(SkolaActions, dispatch),
  };
};

// Validate types
SkolaEdit.propTypes = { 
  actionsSkola: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    skola: state.SkolaEditReducer.skola
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkolaEdit);
