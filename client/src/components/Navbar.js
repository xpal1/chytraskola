// Dependencies
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";

// Material UI
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Person from "@material-ui/icons/Person";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import Group from "@material-ui/icons/Group";
import PowerSettingsNew from "@material-ui/icons/PowerSettingsNew";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import Divider from "@material-ui/core/Divider";

// Style
import logo from "../img/logo-small.svg";
import SecurityService from "../security/SecurityService";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  user: {
    color: "white"
  }
};

class Navbar extends React.Component {
  state = {
    auth: SecurityService.getUser() != null,
    anchorEl: null,
    openDrawer: false
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  toggleDrawer = open => () => {
    this.setState({
      openDrawer: open
    });
  };

  logout = () => {
    this.props.actions.logout();
    this.handleClose();
    SecurityService.logout();
    this.props.history.push("/home");
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    const sideList = (
      <div className={classes.list}>
        <div className="navbar-drawer-header">
          <img src={logo} className="navbar-logo" alt="logo" />
          <div className="navbar-drawer-text">chytraskola</div>
        </div>
        <Divider />
        <List>
          {/* START LINK MENU */}
            
           <Link to="/dochadzka">
            <ListItem button key="dochadzka">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="dochadzka" />
            </ListItem>
          </Link>{" "}            
           <Link to="/odbory">
            <ListItem button key="odbory">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="odbory" />
            </ListItem>
          </Link>{" "}            
           <Link to="/rodicia">
            <ListItem button key="rodicia">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="rodicia" />
            </ListItem>
          </Link>{" "}            
           <Link to="/rozvrh">
            <ListItem button key="rozvrh">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="rozvrh" />
            </ListItem>
          </Link>{" "}            
           <Link to="/skola">
            <ListItem button key="skola">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="skola" />
            </ListItem>
          </Link>{" "}            
           <Link to="/skupina">
            <ListItem button key="skupina">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="skupina" />
            </ListItem>
          </Link>{" "}            
           <Link to="/spravy_archiv">
            <ListItem button key="spravy_archiv">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="spravy_archiv" />
            </ListItem>
          </Link>{" "}            
           <Link to="/spravy_skupiny">
            <ListItem button key="spravy_skupiny">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="spravy_skupiny" />
            </ListItem>
          </Link>{" "}            
           <Link to="/spravy_uzivatelia">
            <ListItem button key="spravy_uzivatelia">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="spravy_uzivatelia" />
            </ListItem>
          </Link>{" "}            
           <Link to="/student">
            <ListItem button key="student">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="student" />
            </ListItem>
          </Link>{" "}            
           <Link to="/triedy">
            <ListItem button key="triedy">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="triedy" />
            </ListItem>
          </Link>{" "}            
           <Link to="/ucitel">
            <ListItem button key="ucitel">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="ucitel" />
            </ListItem>
          </Link>{" "}            
           <Link to="/udalost">
            <ListItem button key="udalost">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="udalost" />
            </ListItem>
          </Link>{" "}            
           <Link to="/uzivatel">
            <ListItem button key="uzivatel">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="uzivatel" />
            </ListItem>
          </Link>{" "}            
           <Link to="/vyucovanie_cas">
            <ListItem button key="vyucovanie_cas">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="vyucovanie_cas" />
            </ListItem>
          </Link>{" "}            
           <Link to="/zadania">
            <ListItem button key="zadania">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="zadania" />
            </ListItem>
          </Link>{" "}            
           <Link to="/znamky">
            <ListItem button key="znamky">
              <ListItemIcon>
                <ArrowForwardIos />
              </ListItemIcon>
              <ListItemText className="menu-text" primary="znamky" />
            </ListItem>
          </Link>{" "} {/* END LINK MENU */}
        </List>
      </div>
    );

    return (
      <div className="{classes.root}">
        <AppBar position="static">
          <Toolbar>
            {this.props.user && (
              <div>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <SwipeableDrawer
                  open={this.state.openDrawer}
                  onClose={this.toggleDrawer(false)}
                  onOpen={this.toggleDrawer(true)}
                >
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer(false)}
                    onKeyDown={this.toggleDrawer(false)}
                  >
                    {sideList}
                  </div>
                </SwipeableDrawer>
              </div>
            )}
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Link to="/home" className="white">
                chytraskola
              </Link>
            </Typography>
            {this.props.user && (
              <div>
                <IconButton
                  aria-owns={anchorEl ? "navbar-menu" : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  className={classes.user}
                >
                  {this.props.user.username}
                  <KeyboardArrowDown />
                </IconButton>
                <Menu
                  id="navbar-menu"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <Link to="/profile">
                    <MenuItem onClick={this.handleClose}>
                      <Person />
                      Profile
                    </MenuItem>
                  </Link>
                  {SecurityService.hasRole("ADMIN") && (
                    <Link to="/users">
                      <MenuItem onClick={this.handleClose}>
                        <Group />
                        User Management
                      </MenuItem>
                    </Link>
                  )}
                  <Divider />
                  <MenuItem onClick={this.logout.bind(this)}>
                    <PowerSettingsNew />
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

// Store actions
const mapDispatchToProps = function(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
};

// Validate types
Navbar.propTypes = {
  actions: PropTypes.object.isRequired
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
)(withStyles(styles)(withRouter(Navbar)));
