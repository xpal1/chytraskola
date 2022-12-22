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
import UcitelActions from "../redux/actions/UcitelActions";

// END IMPORT ACTIONS

/** APIs

* actionsUcitel.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsUcitel.list
*	@description CRUD ACTION list
*

**/


class UcitelList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsUcitel.loadUcitelList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsUcitel.deleteUcitel(this.state.idDelete).then(data => {
      this.props.actionsUcitel.loadUcitelList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "adresa",
        type: "string",
        label: "Adresa"
      }, 
      {
        id: "datum_nastup",
        type: "date",
        label: "Datum_nastup"
      }, 
      {
        id: "datum_odchod",
        type: "date",
        label: "Datum_odchod"
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
        id: "pohlavie",
        type: "string",
        label: "Pohlavie"
      }, 
      {
        id: "predmety",
        type: "string",
        label: "Predmety"
      }, 
      {
        id: "priezvisko",
        type: "string",
        label: "Priezvisko"
      }, 
      {
        id: "titul",
        type: "string",
        label: "Titul"
      }, 
      {
        id: "trieda",
        type: "string",
        label: "Trieda"
      }, 
      {
        id: "zameranie",
        type: "string",
        label: "Zameranie"
      },
    ];
    const link = "/ucitel/";

    return (
      <div>
        <h1>Ucitel List</h1>

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
              <TableCell align="right">Adresa</TableCell>
              <TableCell align="right">Datum_nastup</TableCell>
              <TableCell align="right">Datum_odchod</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Meno</TableCell>
              <TableCell align="right">Mobil</TableCell>
              <TableCell align="right">Pohlavie</TableCell>
              <TableCell align="right">Predmety</TableCell>
              <TableCell align="right">Priezvisko</TableCell>
              <TableCell align="right">Titul</TableCell>
              <TableCell align="right">Trieda</TableCell>
              <TableCell align="right">Zameranie</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/ucitel/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.adresa }</TableCell>
                <TableCell align="right">{ row.datum_nastup }</TableCell>
                <TableCell align="right">{ row.datum_odchod }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.meno }</TableCell>
                <TableCell align="right">{ row.mobil }</TableCell>
                <TableCell align="right">{ row.pohlavie }</TableCell>
                <TableCell align="right">{ row.predmety }</TableCell>
                <TableCell align="right">{ row.priezvisko }</TableCell>
                <TableCell align="right">{ row.titul }</TableCell>
                <TableCell align="right">{ row.trieda }</TableCell>
                <TableCell align="right">{ row.zameranie }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/ucitel/new">
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
    actionsUcitel: bindActionCreators(UcitelActions, dispatch),
  };
};

// Validate types
UcitelList.propTypes = { 
  actionsUcitel: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.UcitelListReducer.listUcitel
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UcitelList);
