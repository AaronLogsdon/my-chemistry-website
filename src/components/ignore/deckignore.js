import React, { Component } from 'react';//making the component available in the file
import { Link, withRouter, } from 'react-router-dom';//making the DOM features available in the file
import * as routes from '../constants/routes';//making al the routes in the route file in the constant folder availabkle in the file
import { TestLink } from './Test';//making the TestLink available in the file
import { StudyLink } from './Study';//making the StudyLink available in the file
import { Game1Link } from './Game1';//making the Game1Link available in the file
import { Game2Link } from './Game2';//making the Game2Link available in the file
import { ViewLink } from './View';//making the ViewLink available in the file


class Deck extends Component {//everything in this component is rendered onto the screen and these are the word "Deck" 
                              //and all the links I have imported above
  
  render() {
    return (
      <div>
        <h1>Deck</h1>
        <ViewLink/>
        <TestLink/>
        <StudyLink/>
        <Game1Link/>
        <Game2Link/>
      </div>
    );
  }
}

const DeckLink = () =>//makes a link to the Deck page by using its route
  <p>
    <Link to={routes.DECK}>Deck</Link>
  </p>

export default withRouter(Deck);//makes the Deck compoenent available with router features to other files

export {DeckLink};//makes the DeckLink available to other files