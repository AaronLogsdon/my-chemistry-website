import React from 'react';//making react library available in the file
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';//making means of developing routes to different pages of my web application available
import Navigation from './Navigation';//making my Navigation file available
import Signin from './Signin';//making my Signin file available
import Home from './Home';//making my Home file available
import * as routes from '../constants/routes';//making all the routes for all the pages of my web application avialble, from my routes file
import withAuthentication from './withAuthentication';//making my withAuthentication file available
import Dashboard from './Dashboard';//making my Dashboard file available
import Test from './Test';//making my Test file available
import Study from './Study';//making my Study file available
import Game1 from './Game1';//making my Game1 file available
import Game2 from './Game2';//making my Game2 file available
import Deck from './Deck';//making my Deck file available
import View from './View';//making my View file available



const App = () =>//the contents of this constant sets up all the routes of all the pages of my web app so all the components can be rendered on screen
  <Router>
    <div>
      <Navigation />
      <hr/>
      <Route exact path={routes.SIGN_IN} component={Signin} /> 
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.DASHBOARD} component={Dashboard} />
      <Route exact path={routes.TEST} component={Test} />
      <Route exact path={routes.STUDY} component={Study} />
      <Route exact path={routes.GAME1} component={Game1} />
      <Route exact path={routes.GAME2} component={Game2} />
      <Route exact path={routes.DECK} component={Deck} />
      <Route exact path={routes.VIEW} component={View} />
    </div>
  </Router>


export default withAuthentication(App);//creates a means of making the App component available to other files 
                                       //with authentication features I have made so users are starting to beauthenticated



