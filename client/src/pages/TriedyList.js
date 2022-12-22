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
import TriedyActions from "../redux/actions/TriedyActions";

// END IMPORT ACTIONS

/** APIs

* actionsTriedy.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTriedy.list
*	@description CRUD ACTION list
*

**/


class TriedyList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsTriedy.loadTriedyList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsTriedy.deleteTriedy(this.state.idDelete).then(data => {
      this.props.actionsTriedy.loadTriedyList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "nazov",
        type: "string",
        label: "Nazov"
      }, 
      {
        id: "odbor",
        type: "string",
        label: "Odbor"
      }, 
      {
        id: "rocnik",
        type: "string",
        label: "Rocnik"
      }, 
      {
        id: "skupina",
        type: "string",
        label: "Skupina"
      }, 
      {
        id: "student",
        type: "string",
        label: "Student"
      }, 
      {
        id: "ucitel",
        type: "string",
        label: "Ucitel"
      }, 
      {
        id: "vznik_datum",
        type: "date",
        label: "Vznik_datum"
      }, 
      {
        id: "zanik_datum",
        type: "date",
        label: "Zanik_datum"
      },
    ];
    const link = "/triedy/";

    return (
      <div>
        <h1>Triedy List</h1>

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
              <TableCell align="right">Nazov</TableCell>
              <TableCell align="right">Odbor</TableCell>
              <TableCell align="right">Rocnik</TableCell>
              <TableCell align="right">Skupina</TableCell>
              <TableCell align="right">Student</TableCell>
              <TableCell align="right">Ucitel</TableCell>
              <TableCell align="right">Vznik_datum</TableCell>
              <TableCell align="right">Zanik_datum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/triedy/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.nazov }</TableCell>
                <TableCell align="right">{ row.odbor }</TableCell>
                <TableCell align="right">{ row.rocnik }</TableCell>
                <TableCell align="right">{ row.skupina }</TableCell>
                <TableCell align="right">{ row.student }</TableCell>
                <TableCell align="right">{ row.ucitel }</TableCell>
                <TableCell align="right">{ row.vznik_datum }</TableCell>
                <TableCell align="right">{ row.zanik_datum }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/triedy/new">
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
    actionsTriedy: bindActionCreators(TriedyActions, dispatch),
  };
};

// Validate types
TriedyList.propTypes = { 
  actionsTriedy: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.TriedyListReducer.listTriedy
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriedyList);
