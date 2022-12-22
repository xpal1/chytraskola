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
import RozvrhActions from "../redux/actions/RozvrhActions";

// END IMPORT ACTIONS

/** APIs

* actionsRozvrh.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsRozvrh.list
*	@description CRUD ACTION list
*

**/


class RozvrhList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsRozvrh.loadRozvrhList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsRozvrh.deleteRozvrh(this.state.idDelete).then(data => {
      this.props.actionsRozvrh.loadRozvrhList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "cas_vyucovanie",
        type: "string",
        label: "Cas_vyucovanie"
      }, 
      {
        id: "den",
        type: "string",
        label: "Den"
      }, 
      {
        id: "predmet",
        type: "string",
        label: "Predmet"
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
        id: "ucitel",
        type: "string",
        label: "Ucitel"
      },
    ];
    const link = "/rozvrh/";

    return (
      <div>
        <h1>Rozvrh List</h1>

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
              <TableCell align="right">Cas_vyucovanie</TableCell>
              <TableCell align="right">Den</TableCell>
              <TableCell align="right">Predmet</TableCell>
              <TableCell align="right">Skupina</TableCell>
              <TableCell align="right">Trieda</TableCell>
              <TableCell align="right">Ucitel</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/rozvrh/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.cas_vyucovanie }</TableCell>
                <TableCell align="right">{ row.den }</TableCell>
                <TableCell align="right">{ row.predmet }</TableCell>
                <TableCell align="right">{ row.skupina }</TableCell>
                <TableCell align="right">{ row.trieda }</TableCell>
                <TableCell align="right">{ row.ucitel }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/rozvrh/new">
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
    actionsRozvrh: bindActionCreators(RozvrhActions, dispatch),
  };
};

// Validate types
RozvrhList.propTypes = { 
  actionsRozvrh: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.RozvrhListReducer.listRozvrh
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RozvrhList);
