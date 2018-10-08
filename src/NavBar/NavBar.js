import React from "react";
import "./NavBar.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'


library.add(faSearch);

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
      styler: this.props.navstyle
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    console.log("dzd",this.props.user.pseudo)
    return (
      <div>
        <header>
          <div>
            <Navbar
              color={this.state.styler}
              dark
              expand="md"
              fixed="top"
              scrolling
            >
              <NavbarBrand className="logo">
                <Link to ="/">
                <strong>Troquini</strong>
                </Link>
              </NavbarBrand>
              {!this.state.isWideEnough && (
                <NavbarToggler onClick={this.onClick} />
              )}
              <Collapse isOpen={this.state.collapse} navbar className="premier">
                <NavbarNav className="left">
                  <NavItem>
                    <NavLink className="menu item-1" to="/comment-ca-marche">
                      Comment ça marche ?
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="menu" to="/add-troc">
                      Je propose
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="menu" to="/search-troc">
                      Je recherche
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="menu" to="/user-profile">
                      Mon Profil
                    </NavLink>
                  </NavItem>
                </NavbarNav>
                
                <NavbarNav className="right">
                { this.props.user.pseudo ? 
                  <NavItem className="menu-utilitaires">
                      <Link to="/user-profile" className="log-in">
                    <button type="button" className="log-button" >
                      {this.props.user.pseudo}
                    </button>
                      </Link>
                    <button type="button" className="log-button" onClick={this.props.onLogOutReduxAction}>
                      <Link to="/" className="log-in">
                        Déconnexion
                      </Link>
                    </button>
                  </NavItem>
                : 
                  <NavItem className="menu-utilitaires">
                      <Link to="/log-in" className="log-in">
                    <button type="button" className="log-button">
                        Connexion
                    </button>
                      </Link>
                    <button type="button" className="sign-button">
                      <Link to="/register" className="register">
                        Inscrivez-vous
                      </Link>
                    </button>
                  </NavItem>}
                </NavbarNav>
              </Collapse>
            </Navbar>
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user : state.userReducer
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onLogOutReduxAction : () => {
      dispatch({
        type : "LOG_OUT",
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
