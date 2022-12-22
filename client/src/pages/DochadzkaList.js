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
import DochadzkaActions from "../redux/actions/DochadzkaActions";

// END IMPORT ACTIONS

/** APIs

* actionsDochadzka.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsDochadzka.list
*	@description CRUD ACTION list
*

**/


class DochadzkaList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsDochadzka.loadDochadzkaList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsDochadzka.deleteDochadzka(this.state.idDelete).then(data => {
      this.props.actionsDochadzka.loadDochadzkaList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "datum",
        type: "date",
        label: "Datum"
      }, 
      {
        id: "predmet",
        type: "string",
        label: "Predmet"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      }, 
      {
        id: "student",
        type: "string",
        label: "Student"
      }, 
      {
        id: "trieda",
        type: "string",
        label: "Trieda"
      }, 
      {
        id: "ucitel",
        type: "string",
        label: "Ucitel"
      },
    ];
    const link = "/dochadzka/";

    return (
      <div>
        <h1>Dochadzka List</h1>

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
              <TableCell align="right">Datum</TableCell>
              <TableCell align="right">Predmet</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Student</TableCell>
              <TableCell align="right">Trieda</TableCell>
              <TableCell align="right">Ucitel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/dochadzka/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.datum }</TableCell>
                <TableCell align="right">{ row.predmet }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
                <TableCell align="right">{ row.student }</TableCell>
                <TableCell align="right">{ row.trieda }</TableCell>
                <TableCell align="right">{ row.ucitel }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/dochadzka/new">
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
    actionsDochadzka: bindActionCreators(DochadzkaActions, dispatch),
  };
};

// Validate types
DochadzkaList.propTypes = { 
  actionsDochadzka: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.DochadzkaListReducer.listDochadzka
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DochadzkaList);
