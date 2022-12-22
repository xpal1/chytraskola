// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import RodiciaActions from "../redux/actions/RodiciaActions";

// END IMPORT ACTIONS

/** APIs

* actionsRodicia.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsRodicia.list
*	@description CRUD ACTION list
*

**/


class RodiciaList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsRodicia.loadRodiciaList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsRodicia.deleteRodicia(this.state.idDelete).then(data => {
      this.props.actionsRodicia.loadRodiciaList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "datum_narodenia",
        type: "date",
        label: "Datum_narodenia"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "meno",
        type: "string",
        label: "Meno"
      }, 
      {
        id: "mobil",
        type: "string",
        label: "Mobil"
      }, 
      {
        id: "povolanie",
        type: "string",
        label: "Povolanie"
      }, 
      {
        id: "priezvisko",
        type: "string",
        label: "Priezvisko"
      }, 
      {
        id: "student",
        type: "string",
        label: "Student"
      }, 
      {
        id: "vztah_student",
        type: "string",
        label: "Vztah_student"
      },
    ];
    const link = "/rodicia/";

    return (
      <div>
        <h1>Rodicia List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Datum_narodenia</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Meno</TableCell>
              <TableCell align="right">Mobil</TableCell>
              <TableCell align="right">Povolanie</TableCell>
              <TableCell align="right">Priezvisko</TableCell>
              <TableCell align="right">Student</TableCell>
              <TableCell align="right">Vztah_student</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/rodicia/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.datum_narodenia }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.meno }</TableCell>
                <TableCell align="right">{ row.mobil }</TableCell>
                <TableCell align="right">{ row.povolanie }</TableCell>
                <TableCell align="right">{ row.priezvisko }</TableCell>
                <TableCell align="right">{ row.student }</TableCell>
                <TableCell align="right">{ row.vztah_student }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/rodicia/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsRodicia: bindActionCreators(RodiciaActions, dispatch),
  };
};

// Validate types
RodiciaList.propTypes = { 
  actionsRodicia: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.RodiciaListReducer.listRodicia
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RodiciaList);
