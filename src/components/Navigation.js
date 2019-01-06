import React from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import * as routes from '../constants/routes';
import {
  Collapse,
  Navbar,
  NavbarBrand,                       
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { LinkContainer } from "react-router-bootstrap";


const Navigation = ({authUser}) =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>


const NavigationAuth = () =>
 
<Navbar color="inverse" light expand="md">
  <LinkContainer to={routes.HOME}>
        <NavbarBrand href="/">Home</NavbarBrand>
  </LinkContainer>
  <Collapse navbar>
  <Nav className="ml-auto" navbar>
          <LinkContainer to={routes.DASHBOAD}>
            <NavItem>
              <NavbarBrand href="/">Dashboard</NavbarBrand>
            </NavItem>
          </LinkContainer>
          <LinkContainer to={routes.ACCOUNT}>
            <NavItem>
              <NavbarBrand href="/">Account</NavbarBrand>
            </NavItem>
          </LinkContainer>
          <LinkContainer to={routes.SIGN_IN}>
            <NavItem>
              <SignOutButton />
            </NavItem>
          </LinkContainer>
      </Nav>
  </Collapse>
</Navbar>

const NavigationNonAuth = () =>
  
<Navbar color="inverse" light expand="md">
    <LinkContainer to={routes.HOME}>
      <NavbarBrand href="/">Home</NavbarBrand>
    </LinkContainer>
  <Collapse navbar>
    <Nav className="ml-auto" navbar> 
          <NavItem>
            <LinkContainer to={routes.SIGN_IN}>
              <NavbarBrand href="/">Login</NavbarBrand>
            </LinkContainer>
          </NavItem>
      </Nav>
  </Collapse>
</Navbar>
export default Navigation;


