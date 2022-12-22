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
import Vyucovanie_casActions from "../redux/actions/Vyucovanie_casActions";

// END IMPORT ACTIONS

/** APIs

* actionsVyucovanie_cas.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsVyucovanie_cas.list
*	@description CRUD ACTION list
*

**/


class Vyucovanie_casList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsVyucovanie_cas.loadVyucovanie_casList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsVyucovanie_cas.deleteVyucovanie_cas(this.state.idDelete).then(data => {
      this.props.actionsVyucovanie_cas.loadVyucovanie_casList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "cas_od_do",
        type: "string",
        label: "Cas_od_do"
      }, 
      {
        id: "poradie_hodiny",
        type: "number",
        label: "Poradie_hodiny"
      },
    ];
    const link = "/vyucovanie_cas/";

    return (
      <div>
        <h1>Vyucovanie_cas List</h1>

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
              <TableCell align="right">Cas_od_do</TableCell>
              <TableCell align="right">Poradie_hodiny</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/vyucovanie_cas/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.cas_od_do }</TableCell>
                <TableCell align="right">{ row.poradie_hodiny }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/vyucovanie_cas/new">
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
    actionsVyucovanie_cas: bindActionCreators(Vyucovanie_casActions, dispatch),
  };
};

// Validate types
Vyucovanie_casList.propTypes = { 
  actionsVyucovanie_cas: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Vyucovanie_casListReducer.listVyucovanie_cas
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Vyucovanie_casList);
