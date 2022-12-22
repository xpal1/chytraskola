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
import OdboryActions from "../redux/actions/OdboryActions";

// END IMPORT ACTIONS

/** APIs

* actionsOdbory.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsOdbory.list
*	@description CRUD ACTION list
*

**/


class OdboryList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsOdbory.loadOdboryList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsOdbory.deleteOdbory(this.state.idDelete).then(data => {
      this.props.actionsOdbory.loadOdboryList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "forma_studia",
        type: "string",
        label: "Forma_studia"
      }, 
      {
        id: "kod",
        type: "string",
        label: "Kod"
      }, 
      {
        id: "nazov",
        type: "string",
        label: "Nazov"
      }, 
      {
        id: "orientacia",
        type: "string",
        label: "Orientacia"
      }, 
      {
        id: "popis",
        type: "string",
        label: "Popis"
      }, 
      {
        id: "ucebny_plan",
        type: "string",
        label: "Ucebny_plan"
      },
    ];
    const link = "/odbory/";

    return (
      <div>
        <h1>Odbory List</h1>

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
              <TableCell align="right">Forma_studia</TableCell>
              <TableCell align="right">Kod</TableCell>
              <TableCell align="right">Nazov</TableCell>
              <TableCell align="right">Orientacia</TableCell>
              <TableCell align="right">Popis</TableCell>
              <TableCell align="right">Ucebny_plan</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/odbory/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.forma_studia }</TableCell>
                <TableCell align="right">{ row.kod }</TableCell>
                <TableCell align="right">{ row.nazov }</TableCell>
                <TableCell align="right">{ row.orientacia }</TableCell>
                <TableCell align="right">{ row.popis }</TableCell>
                <TableCell align="right">{ row.ucebny_plan }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/odbory/new">
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
    actionsOdbory: bindActionCreators(OdboryActions, dispatch),
  };
};

// Validate types
OdboryList.propTypes = { 
  actionsOdbory: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.OdboryListReducer.listOdbory
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OdboryList);
