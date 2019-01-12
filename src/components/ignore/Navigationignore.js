import React from 'react';//making react library available in the file
import AuthUserContext from './AuthUserContext';//making AuthUserContext file features available in the file
import SignOutButton from './SignOut';//making the sign out button available in the file
import * as routes from '../constants/routes';//making the routes in the routes file available in the file
import { LinkContainer } from "react-router-bootstrap";//making the ability to place code in link container tags possible
                                                       //this is styling

import {
  Collapse,
  Navbar,
  NavbarBrand,                       
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';//all these navbar features being added in allow me to make a navbar 


const Navigation = ({authUser}) =>//brings in an authenticated user parameter
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
  //all contained in the Navigation constant distinguishes between whether a user is authenticated or unauthenticated

const NavigationAuth = () => (//develops the menu of the authenticated section of the site
                              //placing menu items as nav items within link containers that allow the right pages to be reached
                              //sign out button is also added in to the menu
                              //items before collapse are found ont the left of the scree, items after collapse are found on the right
<Navbar>
 <LinkContainer to={routes.HOME}>
       <NavbarBrand href="/">Home</NavbarBrand>
 </LinkContainer>
 <Collapse navbar>
    <Nav>
    <LinkContainer to={routes.DASHBOARD}>
       <NavbarBrand href="/">Dashboard</NavbarBrand>
    </LinkContainer>
     <LinkContainer to={routes.SIGN_IN}>
        <NavItem>
          <SignOutButton />
        </NavItem>
      </LinkContainer>
     </Nav>
 </Collapse>
</Navbar>
);
const NavigationNonAuth = () => (//develops the menu of the non-authenticated section of the site
                                //placing menu items as nav items within link containers that allow the right pages to be reached
                                //items before collapse are found ont the left of the scree, items after collapse are found on the right
  <Navbar>
 <Collapse navbar>
     <Nav>
     <NavItem>
           <LinkContainer to={routes.HOME}>
             <NavLink>Home</NavLink>
           </LinkContainer>
         </NavItem>
         <NavItem>
           <LinkContainer to={routes.SIGN_IN}>
             <NavLink>Sign in</NavLink>
           </LinkContainer>
         </NavItem>
     </Nav>
 </Collapse>
</Navbar>
);
export default Navigation;//creates a means of making the Navigation file available to other files


