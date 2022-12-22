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
import Spravy_archivActions from "../redux/actions/Spravy_archivActions";

// END IMPORT ACTIONS

/** APIs

* actionsSpravy_archiv.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsSpravy_archiv.list
*	@description CRUD ACTION list
*

**/


class Spravy_archivList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsSpravy_archiv.loadSpravy_archivList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsSpravy_archiv.deleteSpravy_archiv(this.state.idDelete).then(data => {
      this.props.actionsSpravy_archiv.loadSpravy_archivList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "datum_cas",
        type: "date",
        label: "Datum_cas"
      }, 
      {
        id: "prijemca",
        type: "string",
        label: "Prijemca"
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
        id: "text",
        type: "string",
        label: "Text"
      }, 
      {
        id: "uzivatel",
        type: "string",
        label: "Uzivatel"
      },
    ];
    const link = "/spravy_archiv/";

    return (
      <div>
        <h1>Spravy_archiv List</h1>

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
              <TableCell align="right">Datum_cas</TableCell>
              <TableCell align="right">Prijemca</TableCell>
              <TableCell align="right">Prilohy</TableCell>
              <TableCell align="right">Skupina</TableCell>
              <TableCell align="right">Text</TableCell>
              <TableCell align="right">Uzivatel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/spravy_archiv/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.datum_cas }</TableCell>
                <TableCell align="right">{ row.prijemca }</TableCell>
                <TableCell align="right">{ row.prilohy }</TableCell>
                <TableCell align="right">{ row.skupina }</TableCell>
                <TableCell align="right">{ row.text }</TableCell>
                <TableCell align="right">{ row.uzivatel }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/spravy_archiv/new">
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
    actionsSpravy_archiv: bindActionCreators(Spravy_archivActions, dispatch),
  };
};

// Validate types
Spravy_archivList.propTypes = { 
  actionsSpravy_archiv: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Spravy_archivListReducer.listSpravy_archiv
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Spravy_archivList);
