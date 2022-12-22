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
import Spravy_uzivateliaActions from "../redux/actions/Spravy_uzivateliaActions";
import Spravy_archivActions from "../redux/actions/Spravy_archivActions";

// END IMPORT ACTIONS

/** APIs

* actionsSpravy_uzivatelia.create
*	@description CRUD ACTION create
*
* actionsSpravy_uzivatelia.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsSpravy_uzivatelia.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsSpravy_archiv.findBy_spravy_uzivatelia
*	@description CRUD ACTION findBy_spravy_uzivatelia
*	@param Objectid key - Id of model to search for
*

**/

class Spravy_uzivateliaEdit extends Component {
  // Init spravy_uzivatelia
  constructor(props) {
    super(props);
    this.state = {
      spravy_uzivatelia: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsSpravy_uzivatelia.loadSpravy_uzivatelia(this.props.match.params.id);
      this.props.actionsSpravy_archiv.findBy_spravy_uzivatelia(this.props.match.params.id);
    }
    
  }

  // Insert props spravy_uzivatelia in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      spravy_uzivatelia: props.spravy_uzivatelia
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.spravy_uzivatelia._id) {
      this.props.actionsSpravy_uzivatelia.saveSpravy_uzivatelia(this.state.spravy_uzivatelia).then(data => {
        this.props.history.push("/spravy_uzivatelia/");
      });
    } else {
      this.props.actionsSpravy_uzivatelia.createSpravy_uzivatelia(this.state.spravy_uzivatelia).then(data => {
        this.props.history.push("/spravy_uzivatelia/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Spravy_uzivatelia Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          <DateTimePicker
            id="datum_cas"
            label="Datum_cas"
            className="mt-20 mb-20"
            ampm={false}
            value={
              this.state.spravy_uzivatelia.datum_cas
                ? new Date(this.state.spravy_uzivatelia.datum_cas)
                : null
            }
            onChange={Utils.handleChangeDate.bind(this, "spravy_uzivatelia", "datum_cas")}
            fullWidth
            autoOk
            disableFuture
          />
          
          
          <TextField
            id="prijemca"
            label="Prijemca"
            value={this.state.spravy_uzivatelia.prijemca || ""}
            onChange={Utils.handleChange.bind(this, "spravy_uzivatelia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="prilohy"
            label="Prilohy"
            value={this.state.spravy_uzivatelia.prilohy || ""}
            onChange={Utils.handleChange.bind(this, "spravy_uzivatelia")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="text"
            label="Text"
            value={this.state.spravy_uzivatelia.text || ""}
            onChange={Utils.handleChange.bind(this, "spravy_uzivatelia")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

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
            <Link to="/spravy_uzivatelia/">Back to list</Link>

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
    actionsSpravy_uzivatelia: bindActionCreators(Spravy_uzivateliaActions, dispatch),
    actionsSpravy_archiv: bindActionCreators(Spravy_archivActions, dispatch),
  };
};

// Validate types
Spravy_uzivateliaEdit.propTypes = { 
  actionsSpravy_uzivatelia: PropTypes.object.isRequired,
  actionsSpravy_archiv: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    spravy_uzivatelia: state.Spravy_uzivateliaEditReducer.spravy_uzivatelia,
    listSpravy_archiv: state.Spravy_uzivateliaEditReducer.listSpravy_archiv
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spravy_uzivateliaEdit);
