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
import ZnamkyActions from "../redux/actions/ZnamkyActions";

// END IMPORT ACTIONS

/** APIs

* actionsZnamky.create
*	@description CRUD ACTION create
*
* actionsZnamky.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsZnamky.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class ZnamkyEdit extends Component {
  // Init znamky
  constructor(props) {
    super(props);
    this.state = {
      znamky: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsZnamky.loadZnamky(this.props.match.params.id);
    }
    
  }

  // Insert props znamky in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      znamky: props.znamky
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.znamky._id) {
      this.props.actionsZnamky.saveZnamky(this.state.znamky).then(data => {
        this.props.history.push("/znamky/");
      });
    } else {
      this.props.actionsZnamky.createZnamky(this.state.znamky).then(data => {
        this.props.history.push("/znamky/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Znamky Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="cislo"
            label="Cislo"
            value={this.state.znamky.cislo || ""}
            onChange={Utils.handleChange.bind(this, "znamky")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="poznamka"
            label="Poznamka"
            value={this.state.znamky.poznamka || ""}
            onChange={Utils.handleChange.bind(this, "znamky")}
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/znamky/">Back to list</Link>

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
    actionsZnamky: bindActionCreators(ZnamkyActions, dispatch),
  };
};

// Validate types
ZnamkyEdit.propTypes = { 
  actionsZnamky: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    znamky: state.ZnamkyEditReducer.znamky
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZnamkyEdit);
