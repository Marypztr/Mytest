import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./NavBar.css"
import {Animated} from "react-animated-css";


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          
            <Nav className="Content-Nav" className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/"><p><Animated animationIn="heartBeat" animationOut="fadeOut" isVisible={true}>About us</Animated></p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><p>Registra tu e-commerce</p></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><p>Iniciar Sesión</p></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}