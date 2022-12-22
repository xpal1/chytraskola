import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS

// END IMPORT ACTIONS

/** APIs

**/

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>

        <h3>Sitemap</h3>
                    
        <div>
          <Link to="/student">Link to studentList</Link>
        </div>
        <div>
          <Link to="/ucitel">Link to ucitelList</Link>
        </div>
        <div>
          <Link to="/uzivatel">Link to uzivatelList</Link>
        </div>
        <div>
          <Link to="/rodicia">Link to rodiciaList</Link>
        </div>
        <div>
          <Link to="/skupina">Link to skupinaList</Link>
        </div>
        <div>
          <Link to="/zadania">Link to zadaniaList</Link>
        </div>
        <div>
          <Link to="/rozvrh">Link to rozvrhList</Link>
        </div>
        <div>
          <Link to="/vyucovanie_cas">Link to vyucovanie_casList</Link>
        </div>
        <div>
          <Link to="/dochadzka">Link to dochadzkaList</Link>
        </div>
        <div>
          <Link to="/spravy_skupiny">Link to spravy_skupinyList</Link>
        </div>
        <div>
          <Link to="/spravy_archiv">Link to spravy_archivList</Link>
        </div>
        <div>
          <Link to="/spravy_uzivatelia">Link to spravy_uzivateliaList</Link>
        </div>
        <div>
          <Link to="/triedy">Link to triedyList</Link>
        </div>
        <div>
          <Link to="/skola">Link to skolaList</Link>
        </div>
        <div>
          <Link to="/odbory">Link to odboryList</Link>
        </div>
        <div>
          <Link to="/udalost">Link to udalostList</Link>
        </div>
        <div>
          <Link to="/znamky">Link to znamkyList</Link>
        </div>
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Home.propTypes = {
  actionsUser: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
