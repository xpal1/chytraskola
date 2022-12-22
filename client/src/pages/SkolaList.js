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
import SkolaActions from "../redux/actions/SkolaActions";

// END IMPORT ACTIONS

/** APIs

* actionsSkola.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsSkola.list
*	@description CRUD ACTION list
*

**/


class SkolaList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsSkola.loadSkolaList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsSkola.deleteSkola(this.state.idDelete).then(data => {
      this.props.actionsSkola.loadSkolaList();
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
        id: "datum_zalozenia",
        type: "date",
        label: "Datum_zalozenia"
      }, 
      {
        id: "dic",
        type: "string",
        label: "Dic"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "facebook",
        type: "string",
        label: "Facebook"
      }, 
      {
        id: "ico",
        type: "string",
        label: "Ico"
      }, 
      {
        id: "instagram",
        type: "string",
        label: "Instagram"
      }, 
      {
        id: "logo",
        type: "custom",
        label: "Logo"
      }, 
      {
        id: "mobil",
        type: "string",
        label: "Mobil"
      }, 
      {
        id: "nazov",
        type: "string",
        label: "Nazov"
      }, 
      {
        id: "riaditel",
        type: "string",
        label: "Riaditel"
      }, 
      {
        id: "veduca_sj",
        type: "string",
        label: "Veduca_sj"
      }, 
      {
        id: "web",
        type: "string",
        label: "Web"
      }, 
      {
        id: "zastupca_riaditela",
        type: "string",
        label: "Zastupca_riaditela"
      },
    ];
    const link = "/skola/";

    return (
      <div>
        <h1>Skola List</h1>

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
              <TableCell align="right">Datum_zalozenia</TableCell>
              <TableCell align="right">Dic</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Facebook</TableCell>
              <TableCell align="right">Ico</TableCell>
              <TableCell align="right">Instagram</TableCell>
              <TableCell align="right">Logo</TableCell>
              <TableCell align="right">Mobil</TableCell>
              <TableCell align="right">Nazov</TableCell>
              <TableCell align="right">Riaditel</TableCell>
              <TableCell align="right">Veduca_sj</TableCell>
              <TableCell align="right">Web</TableCell>
              <TableCell align="right">Zastupca_riaditela</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/skola/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.adresa }</TableCell>
                <TableCell align="right">{ row.datum_zalozenia }</TableCell>
                <TableCell align="right">{ row.dic }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.facebook }</TableCell>
                <TableCell align="right">{ row.ico }</TableCell>
                <TableCell align="right">{ row.instagram }</TableCell>
                <TableCell align="right">{ row.logo }</TableCell>
                <TableCell align="right">{ row.mobil }</TableCell>
                <TableCell align="right">{ row.nazov }</TableCell>
                <TableCell align="right">{ row.riaditel }</TableCell>
                <TableCell align="right">{ row.veduca_sj }</TableCell>
                <TableCell align="right">{ row.web }</TableCell>
                <TableCell align="right">{ row.zastupca_riaditela }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/skola/new">
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
    actionsSkola: bindActionCreators(SkolaActions, dispatch),
  };
};

// Validate types
SkolaList.propTypes = { 
  actionsSkola: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.SkolaListReducer.listSkola
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SkolaList);
