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
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStudent.list
*	@description CRUD ACTION list
*

**/


class StudentList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStudent.loadStudentList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStudent.deleteStudent(this.state.idDelete).then(data => {
      this.props.actionsStudent.loadStudentList();
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
        id: "datum_narodenia",
        type: "date",
        label: "Datum_narodenia"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "fotografia",
        type: "custom",
        label: "Fotografia"
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
        id: "odbor",
        type: "string",
        label: "Odbor"
      }, 
      {
        id: "pohlavie",
        type: "string",
        label: "Pohlavie"
      }, 
      {
        id: "priezvisko",
        type: "string",
        label: "Priezvisko"
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
    ];
    const link = "/student/";

    return (
      <div>
        <h1>Student List</h1>

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
              <TableCell align="right">Datum_narodenia</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Fotografia</TableCell>
              <TableCell align="right">Meno</TableCell>
              <TableCell align="right">Mobil</TableCell>
              <TableCell align="right">Odbor</TableCell>
              <TableCell align="right">Pohlavie</TableCell>
              <TableCell align="right">Priezvisko</TableCell>
              <TableCell align="right">Skupina</TableCell>
              <TableCell align="right">Trieda</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/student/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.adresa }</TableCell>
                <TableCell align="right">{ row.datum_narodenia }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.fotografia }</TableCell>
                <TableCell align="right">{ row.meno }</TableCell>
                <TableCell align="right">{ row.mobil }</TableCell>
                <TableCell align="right">{ row.odbor }</TableCell>
                <TableCell align="right">{ row.pohlavie }</TableCell>
                <TableCell align="right">{ row.priezvisko }</TableCell>
                <TableCell align="right">{ row.skupina }</TableCell>
                <TableCell align="right">{ row.trieda }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/student/new">
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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
StudentList.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StudentListReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
