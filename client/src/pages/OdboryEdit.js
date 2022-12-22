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
import OdboryActions from "../redux/actions/OdboryActions";
import StudentActions from "../redux/actions/StudentActions";
import TriedyActions from "../redux/actions/TriedyActions";

// END IMPORT ACTIONS

/** APIs

* actionsOdbory.create
*	@description CRUD ACTION create
*
* actionsOdbory.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsOdbory.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsStudent.findBy_odbory
*	@description CRUD ACTION findBy_odbory
*	@param Objectid key - Id of model to search for
*
* actionsTriedy.findBy_odbory
*	@description CRUD ACTION findBy_odbory
*	@param Objectid key - Id of model to search for
*

**/

class OdboryEdit extends Component {
  // Init odbory
  constructor(props) {
    super(props);
    this.state = {
      odbory: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsOdbory.loadOdbory(this.props.match.params.id);
      this.props.actionsTriedy.findBy_odbory(this.props.match.params.id);
      this.props.actionsStudent.findBy_odbory(this.props.match.params.id);
    }
    
  }

  // Insert props odbory in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      odbory: props.odbory
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.odbory._id) {
      this.props.actionsOdbory.saveOdbory(this.state.odbory).then(data => {
        this.props.history.push("/odbory/");
      });
    } else {
      this.props.actionsOdbory.createOdbory(this.state.odbory).then(data => {
        this.props.history.push("/odbory/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Odbory Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="forma_studia"
            label="Forma_studia"
            value={this.state.odbory.forma_studia || ""}
            onChange={Utils.handleChange.bind(this, "odbory")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="kod"
            label="Kod"
            value={this.state.odbory.kod || ""}
            onChange={Utils.handleChange.bind(this, "odbory")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="nazov"
            label="Nazov"
            value={this.state.odbory.nazov || ""}
            onChange={Utils.handleChange.bind(this, "odbory")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="orientacia"
            label="Orientacia"
            value={this.state.odbory.orientacia || ""}
            onChange={Utils.handleChange.bind(this, "odbory")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="popis"
            label="Popis"
            value={this.state.odbory.popis || ""}
            onChange={Utils.handleChange.bind(this, "odbory")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="ucebny_plan"
            label="Ucebny_plan"
            value={this.state.odbory.ucebny_plan || ""}
            onChange={Utils.handleChange.bind(this, "odbory")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with triedy */}
          
          <h3>Triedy</h3>
          {(!this.props.listTriedy || this.props.listTriedy.length === 0) && 
            <div>No Triedy associated</div>
          }
          {this.props.listTriedy &&
            this.props.listTriedy.map((item, i) => {
              return (
                <Link to={"/triedys/" + item._id} key={item._id}>
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
            <Link to="/odbory/">Back to list</Link>

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
    actionsOdbory: bindActionCreators(OdboryActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
  };
};

// Validate types
OdboryEdit.propTypes = { 
  actionsOdbory: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsTriedy: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    odbory: state.OdboryEditReducer.odbory,
    listTriedy: state.OdboryEditReducer.listTriedy,
    listStudent: state.OdboryEditReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OdboryEdit);
