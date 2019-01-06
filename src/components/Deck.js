import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';
import { TestLink } from './Test';
import { StudyLink } from './Study';
import { Game1Link } from './Game1';
import { Game2Link } from './Game2';
import { ViewLink } from './View';


class Deck extends Component {
  
  render() {
    return (
      <div>
        <h1>Decks</h1>
        {/* <ViewLink/>
        <TestLink/>
        <StudyLink/>
        <Game1Link/>
        <Game2Link/> */}
      </div>
    );
  }
}

const DeckLink = () =>
  <p>
    <Link to={routes.DECK}>Deck</Link>
  </p>

export default withRouter(Deck);

export {DeckLink};
