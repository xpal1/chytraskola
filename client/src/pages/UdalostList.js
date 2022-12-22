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
import UdalostActions from "../redux/actions/UdalostActions";

// END IMPORT ACTIONS

/** APIs

* actionsUdalost.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsUdalost.list
*	@description CRUD ACTION list
*

**/


class UdalostList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsUdalost.loadUdalostList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsUdalost.deleteUdalost(this.state.idDelete).then(data => {
      this.props.actionsUdalost.loadUdalostList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "farba",
        type: "string",
        label: "Farba"
      }, 
      {
        id: "koniec_cas",
        type: "date",
        label: "Koniec_cas"
      }, 
      {
        id: "koniec_datum",
        type: "date",
        label: "Koniec_datum"
      }, 
      {
        id: "nazov",
        type: "string",
        label: "Nazov"
      }, 
      {
        id: "popis",
        type: "string",
        label: "Popis"
      }, 
      {
        id: "typ",
        type: "string",
        label: "Typ"
      }, 
      {
        id: "zaciatok_cas",
        type: "date",
        label: "Zaciatok_cas"
      }, 
      {
        id: "zaciatok_datum",
        type: "date",
        label: "Zaciatok_datum"
      },
    ];
    const link = "/udalost/";

    return (
      <div>
        <h1>Udalost List</h1>

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
              <TableCell align="right">Farba</TableCell>
              <TableCell align="right">Koniec_cas</TableCell>
              <TableCell align="right">Koniec_datum</TableCell>
              <TableCell align="right">Nazov</TableCell>
              <TableCell align="right">Popis</TableCell>
              <TableCell align="right">Typ</TableCell>
              <TableCell align="right">Zaciatok_cas</TableCell>
              <TableCell align="right">Zaciatok_datum</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/udalost/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.farba }</TableCell>
                <TableCell align="right">{ row.koniec_cas }</TableCell>
                <TableCell align="right">{ row.koniec_datum }</TableCell>
                <TableCell align="right">{ row.nazov }</TableCell>
                <TableCell align="right">{ row.popis }</TableCell>
                <TableCell align="right">{ row.typ }</TableCell>
                <TableCell align="right">{ row.zaciatok_cas }</TableCell>
                <TableCell align="right">{ row.zaciatok_datum }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/udalost/new">
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
    actionsUdalost: bindActionCreators(UdalostActions, dispatch),
  };
};

// Validate types
UdalostList.propTypes = { 
  actionsUdalost: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.UdalostListReducer.listUdalost
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UdalostList);
