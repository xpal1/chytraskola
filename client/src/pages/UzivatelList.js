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
import UzivatelActions from "../redux/actions/UzivatelActions";

// END IMPORT ACTIONS

/** APIs

* actionsUzivatel.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsUzivatel.list
*	@description CRUD ACTION list
*

**/


class UzivatelList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsUzivatel.loadUzivatelList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsUzivatel.deleteUzivatel(this.state.idDelete).then(data => {
      this.props.actionsUzivatel.loadUzivatelList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "datum_aktualizacia",
        type: "date",
        label: "Datum_aktualizacia"
      }, 
      {
        id: "datum_vznik",
        type: "date",
        label: "Datum_vznik"
      }, 
      {
        id: "heslo",
        type: "string",
        label: "Heslo"
      }, 
      {
        id: "meno",
        type: "string",
        label: "Meno"
      }, 
      {
        id: "rola",
        type: "string",
        label: "Rola"
      }, 
      {
        id: "status",
        type: "string",
        label: "Status"
      },
    ];
    const link = "/uzivatel/";

    return (
      <div>
        <h1>Uzivatel List</h1>

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
              <TableCell align="right">Datum_aktualizacia</TableCell>
              <TableCell align="right">Datum_vznik</TableCell>
              <TableCell align="right">Heslo</TableCell>
              <TableCell align="right">Meno</TableCell>
              <TableCell align="right">Rola</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/uzivatel/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.datum_aktualizacia }</TableCell>
                <TableCell align="right">{ row.datum_vznik }</TableCell>
                <TableCell align="right">{ row.heslo }</TableCell>
                <TableCell align="right">{ row.meno }</TableCell>
                <TableCell align="right">{ row.rola }</TableCell>
                <TableCell align="right">{ row.status }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/uzivatel/new">
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
    actionsUzivatel: bindActionCreators(UzivatelActions, dispatch),
  };
};

// Validate types
UzivatelList.propTypes = { 
  actionsUzivatel: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.UzivatelListReducer.listUzivatel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UzivatelList);
