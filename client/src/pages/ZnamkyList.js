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
import ZnamkyActions from "../redux/actions/ZnamkyActions";

// END IMPORT ACTIONS

/** APIs

* actionsZnamky.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsZnamky.list
*	@description CRUD ACTION list
*

**/


class ZnamkyList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsZnamky.loadZnamkyList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsZnamky.deleteZnamky(this.state.idDelete).then(data => {
      this.props.actionsZnamky.loadZnamkyList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "cislo",
        type: "number",
        label: "Cislo"
      }, 
      {
        id: "poznamka",
        type: "string",
        label: "Poznamka"
      },
    ];
    const link = "/znamky/";

    return (
      <div>
        <h1>Znamky List</h1>

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
              <TableCell align="right">Cislo</TableCell>
              <TableCell align="right">Poznamka</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/znamky/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.cislo }</TableCell>
                <TableCell align="right">{ row.poznamka }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/znamky/new">
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
    actionsZnamky: bindActionCreators(ZnamkyActions, dispatch),
  };
};

// Validate types
ZnamkyList.propTypes = { 
  actionsZnamky: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.ZnamkyListReducer.listZnamky
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ZnamkyList);
