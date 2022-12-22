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
import ZadaniaActions from "../redux/actions/ZadaniaActions";

// END IMPORT ACTIONS

/** APIs

* actionsZadania.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsZadania.list
*	@description CRUD ACTION list
*

**/


class ZadaniaList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsZadania.loadZadaniaList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsZadania.deleteZadania(this.state.idDelete).then(data => {
      this.props.actionsZadania.loadZadaniaList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "datum_odovzdania",
        type: "date",
        label: "Datum_odovzdania"
      }, 
      {
        id: "datum_vytvorenia",
        type: "date",
        label: "Datum_vytvorenia"
      }, 
      {
        id: "nazov",
        type: "string",
        label: "Nazov"
      }, 
      {
        id: "overenie",
        type: "boolean",
        label: "Overenie"
      }, 
      {
        id: "popis",
        type: "string",
        label: "Popis"
      }, 
      {
        id: "predmet",
        type: "string",
        label: "Predmet"
      }, 
      {
        id: "prilohy",
        type: "custom",
        label: "Prilohy"
      }, 
      {
        id: "skupina",
        type: "string",
        label: "Skupina"
      }, 
      {
        id: "trieda",
        type: "string",
        label: "Trieda"
      }, 
      {
        id: "typ",
        type: "string",
        label: "Typ"
      },
    ];
    const link = "/zadania/";

    return (
      <div>
        <h1>Zadania List</h1>

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
              <TableCell align="right">Datum_odovzdania</TableCell>
              <TableCell align="right">Datum_vytvorenia</TableCell>
              <TableCell align="right">Nazov</TableCell>
              <TableCell align="right">Overenie</TableCell>
              <TableCell align="right">Popis</TableCell>
              <TableCell align="right">Predmet</TableCell>
              <TableCell align="right">Prilohy</TableCell>
              <TableCell align="right">Skupina</TableCell>
              <TableCell align="right">Trieda</TableCell>
              <TableCell align="right">Typ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/zadania/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.datum_odovzdania }</TableCell>
                <TableCell align="right">{ row.datum_vytvorenia }</TableCell>
                <TableCell align="right">{ row.nazov }</TableCell>
                <TableCell align="right">{ row.overenie }</TableCell>
                <TableCell align="right">{ row.popis }</TableCell>
                <TableCell align="right">{ row.predmet }</TableCell>
                <TableCell align="right">{ row.prilohy }</TableCell>
                <TableCell align="right">{ row.skupina }</TableCell>
                <TableCell align="right">{ row.trieda }</TableCell>
                <TableCell align="right">{ row.typ }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/zadania/new">
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
    actionsZadania: bindActionCreators(ZadaniaActions, dispatch),
  };
};

// Validate types
ZadaniaList.propTypes = { 
  actionsZadania: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ZadaniaListReducer.listZadania
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZadaniaList);
